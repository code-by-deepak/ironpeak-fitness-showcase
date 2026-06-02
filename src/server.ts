import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// --- Request tracing ---------------------------------------------------------
// Emits one structured JSON line per request to stdout. Vercel ingests these
// into Runtime Logs where you can filter by requestId, status, or path.

type LogFields = Record<string, unknown>;

function log(level: "info" | "warn" | "error", msg: string, fields: LogFields = {}) {
  const line = JSON.stringify({
    level,
    msg,
    time: new Date().toISOString(),
    ...fields,
  });
  if (level === "error") console.error(line);
  else if (level === "warn") console.warn(line);
  else console.log(line);
}

function newRequestId(request: Request): string {
  // Vercel forwards x-vercel-id; fall back to a short random id.
  return (
    request.headers.get("x-vercel-id") ??
    request.headers.get("x-request-id") ??
    Math.random().toString(36).slice(2, 10)
  );
}

function serializeError(error: unknown) {
  if (error instanceof Error) {
    return { name: error.name, message: error.message, stack: error.stack };
  }
  try {
    return { value: JSON.parse(JSON.stringify(error)) };
  } catch {
    return { value: String(error) };
  }
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(
  response: Response,
  ctx: { requestId: string; url: string; method: string },
): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  const captured = consumeLastCapturedError();
  log("error", "ssr.swallowed_error", {
    ...ctx,
    body,
    error: captured ? serializeError(captured) : null,
  });

  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8", "x-request-id": ctx.requestId },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const start = Date.now();
    const url = new URL(request.url);
    const requestId = newRequestId(request);
    const traceCtx = { requestId, url: url.pathname + url.search, method: request.method };

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response, traceCtx);

      // Attach request id for client-side correlation.
      const headers = new Headers(normalized.headers);
      if (!headers.has("x-request-id")) headers.set("x-request-id", requestId);
      const finalResponse = new Response(normalized.body, {
        status: normalized.status,
        statusText: normalized.statusText,
        headers,
      });

      const durationMs = Date.now() - start;
      const level = finalResponse.status >= 500 ? "error" : finalResponse.status >= 400 ? "warn" : "info";
      log(level, "request", {
        ...traceCtx,
        status: finalResponse.status,
        durationMs,
        referer: request.headers.get("referer") ?? undefined,
        ua: request.headers.get("user-agent") ?? undefined,
      });

      return finalResponse;
    } catch (error) {
      log("error", "request.unhandled", {
        ...traceCtx,
        durationMs: Date.now() - start,
        error: serializeError(error),
      });
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8", "x-request-id": requestId },
      });
    }
  },
};
