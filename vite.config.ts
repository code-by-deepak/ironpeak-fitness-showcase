// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { resolve } from "node:path";

// Build target: Vercel. Nitro emits the Vercel Build Output API spec
// into `.vercel/output`, which Vercel auto-detects on deploy.
const root = process.cwd();

export default defineConfig({
  nitro: {
    preset: "vercel",
    output: {
      dir: resolve(root, ".vercel/output"),
      publicDir: resolve(root, ".vercel/output/static"),
      serverDir: resolve(root, ".vercel/output/functions/__server.func"),
    },
  },
});
