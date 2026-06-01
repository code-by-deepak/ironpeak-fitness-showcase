import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import t4 from "@/assets/t4.jpg";

const trainers = [
  { img: t1, name: "Arjun Mehta", spec: "Strength Coach", years: 9 },
  { img: t2, name: "Priya Sharma", spec: "Yoga Expert", years: 7 },
  { img: t3, name: "Rahul Das", spec: "Boxing Trainer", years: 11 },
  { img: t4, name: "Neha Kapoor", spec: "Nutrition Coach", years: 6 },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Our Team" title="Meet Your" highlight="Coaches">
          Decades of combined experience. Zero tolerance for mediocrity.
        </SectionHeading>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                  <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur border border-border hover:bg-gradient-fire hover:text-primary-foreground transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur border border-border hover:bg-gradient-fire hover:text-primary-foreground transition-colors">
                    <Youtube className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                  {t.spec}
                </span>
                <h3 className="mt-3 font-display text-2xl text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.years}+ years experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
