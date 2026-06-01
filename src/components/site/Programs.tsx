import { motion } from "framer-motion";
import { Dumbbell, Flame, Zap, Heart, Activity, Apple, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import strength from "@/assets/p-strength.jpg";
import hiit from "@/assets/p-hiit.jpg";
import boxing from "@/assets/p-boxing.jpg";
import yoga from "@/assets/p-yoga.jpg";
import crossfit from "@/assets/p-crossfit.jpg";
import nutrition from "@/assets/p-nutrition.jpg";

const programs = [
  { img: strength, icon: Dumbbell, name: "Strength Training", desc: "Powerlifting & hypertrophy with progressive overload.", level: "Advanced" },
  { img: hiit, icon: Zap, name: "HIIT Cardio", desc: "30-min interval blasts that torch fat fast.", level: "Intermediate" },
  { img: boxing, icon: Flame, name: "Boxing & MMA", desc: "Pad work, sparring and combat conditioning.", level: "Intermediate" },
  { img: yoga, icon: Heart, name: "Yoga & Flexibility", desc: "Mobility, recovery and breath control.", level: "Beginner" },
  { img: crossfit, icon: Activity, name: "CrossFit", desc: "Functional WODs in a tribe-style class.", level: "Advanced" },
  { img: nutrition, icon: Apple, name: "Nutrition Coaching", desc: "Custom macro plans built around your goal.", level: "Beginner" },
];

const levelColor: Record<string, string> = {
  Beginner: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Intermediate: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Advanced: "bg-primary/25 text-primary border-primary/40",
};

export function Programs() {
  return (
    <section id="programs" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Programs" title="Choose Your" highlight="Battle">
          Six disciplines, one mission — forge the strongest version of you. Mix, match, and dominate.
        </SectionHeading>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card aspect-[4/5] [transform-style:preserve-3d] [perspective:1000px]"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />

                <span className={`absolute top-4 right-4 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${levelColor[p.level]}`}>
                  {p.level}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Icon className="h-7 w-7 text-primary text-glow mb-3" strokeWidth={2.2} />
                  <h3 className="font-display text-3xl text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
                    <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                      Explore <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
