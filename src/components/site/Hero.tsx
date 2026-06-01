import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { Embers } from "./Embers";
import heroImg from "@/assets/hero.jpg";

const words = ["TRAIN", "HARD.", "LIVE", "STRONG."];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Parallax background */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut", delay: 1.8 }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Athlete lifting heavy barbell in dark gym"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </motion.div>

      <Embers count={50} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          New Delhi · Est. 2017
        </motion.div>

        <h1 className="mt-6 font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] text-foreground max-w-5xl">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 2.1 + i * 0.12, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className={`inline-block ${i === 3 ? "text-gradient-fire text-glow" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.6 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          New Delhi's most intense fitness experience. Transform in{" "}
          <span className="text-foreground font-semibold">90 days</span> or your money back.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-md bg-gradient-fire px-7 py-4 font-bold uppercase tracking-widest text-primary-foreground animate-glow-pulse transition-transform hover:scale-[1.03]"
          >
            Start Free Trial
          </a>
          <a
            href="#transform"
            className="inline-flex items-center gap-3 rounded-md border border-foreground/30 bg-background/30 px-6 py-4 font-bold uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10">
              <Play className="h-3.5 w-3.5 fill-current" />
            </span>
            Watch Our Story
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce-down text-primary" />
      </motion.a>
    </section>
  );
}
