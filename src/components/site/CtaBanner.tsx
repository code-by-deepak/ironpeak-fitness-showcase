import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ctaImg from "@/assets/cta.jpg";

function useCountdown(target: number) {
  const [t, setT] = useState(target - Date.now());
  useEffect(() => {
    const i = setInterval(() => setT(target - Date.now()), 1000);
    return () => clearInterval(i);
  }, [target]);
  const clamp = Math.max(0, t);
  const days = Math.floor(clamp / 86400000);
  const hours = Math.floor((clamp % 86400000) / 3600000);
  const mins = Math.floor((clamp % 3600000) / 60000);
  const secs = Math.floor((clamp % 60000) / 1000);
  return { days, hours, mins, secs };
}

export function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const target = useRef(Date.now() + 1000 * 60 * 60 * (24 * 2 + 14) + 1000 * 60 * 32).current;
  const { days, hours, mins, secs } = useCountdown(target);

  const cells = [
    { v: days, l: "Days" },
    { v: hours, l: "Hours" },
    { v: mins, l: "Mins" },
    { v: secs, l: "Secs" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden h-[80vh] min-h-[600px] flex items-center">
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <img src={ctaImg} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold">Limited Offer</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl text-foreground leading-[0.9]">
            Your first week is <span className="text-gradient-fire text-glow">free.</span>{" "}
            No excuses.
          </h2>

          <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-background/50 backdrop-blur px-4 py-3">
            <span className="text-xs uppercase tracking-widest text-muted-foreground mr-2">Offer ends in</span>
            {cells.map((c, i) => (
              <div key={c.l} className="flex items-center">
                <div className="text-center">
                  <div className="font-display text-2xl text-foreground tabular-nums">
                    {String(c.v).padStart(2, "0")}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{c.l}</div>
                </div>
                {i < cells.length - 1 && <span className="mx-2 text-primary font-display text-2xl">:</span>}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-fire px-9 py-5 text-lg font-bold uppercase tracking-widest text-primary-foreground animate-glow-pulse transition-transform hover:scale-105"
            >
              Claim Free Trial Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
