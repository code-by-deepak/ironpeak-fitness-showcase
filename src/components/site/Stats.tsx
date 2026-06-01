import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-foreground tabular-nums">
      <motion.span>{rounded}</motion.span>
      <span className="text-gradient-fire">{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 1200, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Expert Trainers" },
  { value: 8, suffix: "", label: "Years of Excellence" },
  { value: 50, suffix: "+", label: "Fitness Programs" },
];

export function Stats() {
  return (
    <section id="stats" className="relative bg-gradient-blood py-16 border-y border-primary/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,oklch(0.08_0.01_30_/_0.6))]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
