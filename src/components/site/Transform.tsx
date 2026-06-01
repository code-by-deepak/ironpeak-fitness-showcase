import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import transformImg from "@/assets/transform.jpg";
import { Quote } from "lucide-react";

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const drag = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100));
    setPos(p);
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border shadow-glow-sm cursor-ew-resize select-none"
      onMouseMove={(e) => e.buttons === 1 && drag(e.clientX)}
      onMouseDown={(e) => drag(e.clientX)}
      onTouchMove={(e) => drag(e.touches[0].clientX)}
    >
      <img src={transformImg} alt="After 90 days" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img src={transformImg} alt="Before" className="absolute inset-0 h-full object-cover" style={{ width: `${ref.current?.clientWidth ?? 800}px`, filter: "grayscale(1) brightness(0.7)" }} loading="lazy" />
      </div>
      <div className="absolute top-4 left-4 rounded bg-background/80 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">Before</div>
      <div className="absolute top-4 right-4 rounded bg-gradient-fire px-3 py-1 text-xs uppercase tracking-widest text-primary-foreground font-bold">After</div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-fire shadow-glow" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-gradient-fire flex items-center justify-center shadow-glow animate-glow-pulse">
          <span className="text-primary-foreground font-bold">↔</span>
        </div>
      </div>
    </div>
  );
}

const stories = [
  { name: "Vikram Singh", stat: "Lost 24 kg", quote: "I came in skeptical. 6 months later, my doctor cleared me off meds." },
  { name: "Anjali Reddy", stat: "Gained 8 kg muscle", quote: "Strongest I've ever felt. The coaches treat you like family." },
  { name: "Karan Bhalla", stat: "Lost 18 kg", quote: "From winded on stairs to deadlifting 180kg. IronPeak rewired me." },
];

export function Transform() {
  return (
    <section id="transform" className="relative py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Transformations" title="Real People." highlight="Real Results.">
          Drag the slider. Watch what 90 days of disciplined training does.
        </SectionHeading>

        <div className="mt-14">
          <BeforeAfter />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-border bg-card p-7 hover:border-primary/50 transition-colors"
            >
              <Quote className="h-7 w-7 text-primary mb-4" />
              <p className="text-foreground/90 leading-relaxed">"{s.quote}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="font-display text-xl text-foreground">{s.name}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gradient-fire">{s.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
