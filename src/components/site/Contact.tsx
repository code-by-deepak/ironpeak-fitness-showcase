import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { supabase } from "@/integrations/supabase/client";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      goal: String(fd.get("goal") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim() || null,
    };

    const { error } = await supabase.from("free_trial_leads").insert(payload);

    if (error) {
      console.error("free_trial_leads insert failed", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    form.reset();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 6000);
  }

  const buttonLabel =
    status === "sending"
      ? "Sending…"
      : status === "success"
        ? "✓ Request received"
        : "Submit & Start";

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Visit Us" title="Come" highlight="Train">
          Drop by, take a tour, lift something heavy. We're in the heart of New Delhi.
        </SectionHeading>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.21%2C28.61%2C77.24%2C28.64&layer=mapnik"
                className="h-full w-full grayscale contrast-125 brightness-75"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Address", val: "B-42, Connaught Place, New Delhi 110001" },
                { icon: Phone, label: "Phone", val: "+91 98765 43210" },
                { icon: Mail, label: "Email", val: "info@ironpeakfitness.com" },
                { icon: Clock, label: "Hours", val: "Mon–Sun · 5 AM – 11 PM" },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="text-sm text-foreground">{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-8 space-y-4"
          >
            <h3 className="font-display text-3xl text-foreground">Book Your Free Trial</h3>
            <p className="text-sm text-muted-foreground -mt-2">We'll call you back within 24 hours.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <Field label="Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Email" name="email" type="email" />

            <div>
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Goal</label>
              <select
                name="goal"
                required
                defaultValue="Lose Weight"
                className="mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              >
                <option>Lose Weight</option>
                <option>Build Muscle</option>
                <option>Improve Fitness</option>
                <option>General</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-md bg-gradient-fire px-7 py-4 font-bold uppercase tracking-widest text-primary-foreground shadow-glow-sm transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
            >
              {buttonLabel}
            </button>

            {status === "success" && (
              <p className="text-sm text-primary text-center pt-1">
                We've received your request! Our team will call you back within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive text-center pt-1">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
