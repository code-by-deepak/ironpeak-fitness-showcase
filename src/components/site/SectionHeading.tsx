import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.3em] text-primary font-bold"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 40, skewY: 4 }}
        whileInView={{ opacity: 1, y: 0, skewY: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="mt-3 font-display text-5xl md:text-7xl text-foreground leading-none"
      >
        {title}{" "}
        {highlight && <span className="text-gradient-fire text-glow">{highlight}</span>}
      </motion.h2>
      {children && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-5 text-lg text-muted-foreground leading-relaxed"
        >
          {children}
        </motion.p>
      )}
    </div>
  );
}
