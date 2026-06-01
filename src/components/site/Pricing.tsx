import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const plans = [
  {
    name: "Basic",
    price: "999",
    desc: "Get started with the essentials.",
    features: ["Full gym floor access", "Personal locker", "2 group classes / week", "Mobile app access", "Wifi & filtered water"],
    popular: false,
  },
  {
    name: "Pro",
    price: "1,999",
    desc: "Best value for serious lifters.",
    features: ["Everything in Basic", "Unlimited group classes", "1 PT session / week", "Custom diet plan", "Sauna & steam access", "Progress tracking"],
    popular: true,
  },
  {
    name: "Elite",
    price: "3,499",
    desc: "For those who accept no compromise.",
    features: ["Everything in Pro", "Unlimited PT sessions", "Monthly supplement kit", "Priority class booking", "Recovery & massage", "24/7 access"],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Membership" title="Pick Your Plan." highlight="Start Today." align="center">
          No contracts. Cancel anytime. First week is on the house.
        </SectionHeading>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl border p-8 ${
                p.popular
                  ? "border-primary bg-card shadow-glow lg:scale-105 lg:-translate-y-2"
                  : "border-border bg-card hover:border-primary/40 transition-colors"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-fire px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-glow-sm">
                  <Star className="h-3 w-3 fill-current" /> Most Popular
                </div>
              )}
              <h3 className="font-display text-4xl text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl text-foreground">₹{p.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f, j) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + j * 0.05 }}
                    className="flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <span className={`mt-0.5 grid h-5 w-5 place-items-center rounded-full ${p.popular ? "bg-gradient-fire" : "bg-primary/20"}`}>
                      <Check className={`h-3 w-3 ${p.popular ? "text-primary-foreground" : "text-primary"}`} strokeWidth={3} />
                    </span>
                    {f}
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block w-full text-center rounded-md py-3.5 font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] ${
                  p.popular
                    ? "bg-gradient-fire text-primary-foreground animate-glow-pulse"
                    : "border border-border bg-background text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
