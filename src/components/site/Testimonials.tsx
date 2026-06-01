import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { name: "Rohan Iyer", role: "Software Engineer", stars: 5, text: "Joined IronPeak after years of mediocre gyms. The energy here is unmatched. I've never been stronger." },
  { name: "Meera Joshi", role: "Doctor", stars: 5, text: "The trainers actually listen. My custom plan worked around my crazy hospital shifts and I still hit my goals." },
  { name: "Aditya Verma", role: "Entrepreneur", stars: 5, text: "Walked in wanting to lose weight. Left as a competitive lifter. This place rewrites what you think is possible." },
  { name: "Sneha Pillai", role: "Marketing Lead", stars: 5, text: "Best decision of 2024. The community is fierce, the coaches push you, and the equipment is world-class." },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28 bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.24_27_/_0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Reviews" title="Our Members" highlight="Don't Lie" align="center" />

        <div className="relative mt-14 h-[280px] md:h-[240px]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              animate={{ opacity: i === idx ? 1 : 0, scale: i === idx ? 1 : 0.96, y: i === idx ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 ${i === idx ? "" : "pointer-events-none"}`}
            >
              <div className="h-full rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1">
                    {Array.from({ length: it.stars }).map((_, s) => (
                      <Star key={s} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-5 text-xl md:text-2xl text-foreground leading-relaxed font-light">
                    "{it.text}"
                  </p>
                </div>
                <div className="mt-6">
                  <div className="font-display text-2xl text-foreground">{it.name}</div>
                  <div className="text-sm text-muted-foreground">{it.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-fire" : "w-3 bg-border"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
