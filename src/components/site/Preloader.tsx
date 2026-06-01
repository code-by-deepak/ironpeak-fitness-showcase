import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "backOut" }}
            >
              <Flame className="h-12 w-12 text-primary text-glow" strokeWidth={2.5} />
            </motion.div>
            <div className="flex overflow-hidden">
              {"IRONPEAK".split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.4, ease: "backOut" }}
                  className="font-display text-5xl tracking-wider text-foreground"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-fire"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
