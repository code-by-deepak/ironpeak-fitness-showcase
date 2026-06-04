import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Search, Download, Trash2, CheckCircle2, Circle, LogOut, Lock } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin · IronPeak Fitness" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

type Lead = {
  id: number;
  name: string;
  phone: string;
  email: string;
  goal: string;
  message: string | null;
  contacted: boolean;
  created_at: string;
};

const ADMIN_PASSWORD = "ironpeak2025";
const STORAGE_KEY = "ironpeak_admin_ok";

function AdminPage() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setAuthed(true);
    }
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {authed ? (
        <Dashboard
          onLogout={() => {
            sessionStorage.removeItem(STORAGE_KEY);
            setAuthed(false);
          }}
        />
      ) : (
        <LoginScreen
          onSuccess={() => {
            sessionStorage.setItem(STORAGE_KEY, "1");
            setAuthed(true);
          }}
        />
      )}
    </div>
  );
}

function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setError("");
      onSuccess();
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <form
        onSubmit={submit}
        className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-glow-sm"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-gradient-fire">
            <Lock className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-2xl text-foreground">IronPeak Admin</h1>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Restricted Access
            </p>
          </div>
        </div>

        <label className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Password
        </label>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
          placeholder="Enter admin password"
        />
        {error && <p className="mt-2 text-sm text-destructive">{error}</p>}

        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-gradient-fire px-7 py-4 font-bold uppercase tracking-widest text-primary-foreground shadow-glow-sm transition-transform hover:scale-[1.02]"
        >
          Unlock Dashboard
        </button>
      </form>
    </div>
  );
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("free_trial_leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else {
      setLeads((data ?? []) as Lead[]);
      setError(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return leads;
    return leads.filter(
      (l) => l.name.toLowerCase().includes(q) || l.email.toLowerCase().includes(q),
    );
  }, [leads, query]);

  async function toggleContacted(lead: Lead) {
    const next = !lead.contacted;
    setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, contacted: next } : l)));
    const { error } = await supabase
      .from("free_trial_leads")
      .update({ contacted: next })
      .eq("id", lead.id);
    if (error) {
      setLeads((prev) => prev.map((l) => (l.id === lead.id ? { ...l, contacted: !next } : l)));
      alert("Failed to update: " + error.message);
    }
  }

  async function deleteLead(lead: Lead) {
    if (!confirm(`Delete lead from ${lead.name}?`)) return;
    const prev = leads;
    setLeads((p) => p.filter((l) => l.id !== lead.id));
    const { error } = await supabase.from("free_trial_leads").delete().eq("id", lead.id);
    if (error) {
      setLeads(prev);
      alert("Failed to delete: " + error.message);
    }
  }

  function exportCSV() {
    const headers = ["Name", "Phone", "Email", "Goal", "Message", "Contacted", "Date Submitted"];
    const rows = leads.map((l) => [
      l.name,
      l.phone,
      l.email,
      l.goal,
      l.message ?? "",
      l.contacted ? "Yes" : "No",
      new Date(l.created_at).toISOString(),
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ironpeak-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-primary">IronPeak Admin</p>
          <h1 className="font-display text-4xl text-foreground">Free Trial Leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{leads.length}</span> Total Leads
            {query && (
              <>
                {" · "}
                <span className="text-foreground">{filtered.length}</span> matching
              </>
            )}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={exportCSV}
            disabled={leads.length === 0}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
          <button
            onClick={onLogout}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mt-6 flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or email…"
          className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-card">
        {loading ? (
          <div className="p-10 text-center text-muted-foreground">Loading leads…</div>
        ) : error ? (
          <div className="p-10 text-center text-destructive">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-muted-foreground">
            {leads.length === 0 ? "No leads yet." : "No matches."}
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-background/40 text-[10px] uppercase tracking-widest text-muted-foreground">
              <tr>
                <Th>Status</Th>
                <Th>Name</Th>
                <Th>Phone</Th>
                <Th>Email</Th>
                <Th>Goal</Th>
                <Th>Message</Th>
                <Th>Submitted</Th>
                <Th className="text-right">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-t border-border transition-colors hover:bg-background/30"
                >
                  <Td>
                    <button
                      onClick={() => toggleContacted(lead)}
                      title={lead.contacted ? "Mark as not contacted" : "Mark as contacted"}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors ${
                        lead.contacted
                          ? "border-primary/40 bg-primary/10 text-primary hover:bg-primary/20"
                          : "border-border bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {lead.contacted ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Circle className="h-3.5 w-3.5" />
                      )}
                      {lead.contacted ? "Contacted" : "New"}
                    </button>
                  </Td>
                  <Td className="font-bold text-foreground">{lead.name}</Td>
                  <Td>
                    <a href={`tel:${lead.phone}`} className="hover:text-primary">
                      {lead.phone}
                    </a>
                  </Td>
                  <Td>
                    <a href={`mailto:${lead.email}`} className="hover:text-primary">
                      {lead.email}
                    </a>
                  </Td>
                  <Td>
                    <span className="rounded bg-background px-2 py-1 text-xs text-foreground">
                      {lead.goal}
                    </span>
                  </Td>
                  <Td className="max-w-xs">
                    <span className="line-clamp-2 text-muted-foreground" title={lead.message ?? ""}>
                      {lead.message || "—"}
                    </span>
                  </Td>
                  <Td className="whitespace-nowrap text-muted-foreground">
                    {new Date(lead.created_at).toLocaleString()}
                  </Td>
                  <Td className="text-right">
                    <button
                      onClick={() => deleteLead(lead)}
                      title="Delete lead"
                      className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <th className={`px-4 py-3 text-left font-semibold ${className}`}>{children}</th>;
}
function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={`px-4 py-3 align-middle ${className}`}>{children}</td>;
}
