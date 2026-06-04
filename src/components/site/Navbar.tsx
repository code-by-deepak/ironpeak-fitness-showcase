import { useEffect, useState } from "react";
import { Flame, Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

const links = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#trainers", label: "Trainers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.9, duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 group">
          <Flame className="h-6 w-6 text-primary transition-transform group-hover:scale-110 text-glow" strokeWidth={2.5} />
          <span className="font-display text-2xl tracking-wider text-foreground">
            IRON<span className="text-gradient-fire">PEAK</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-fire after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Link
          to="/admin"
          className="hidden lg:inline-flex items-center justify-center rounded-md border border-border bg-card px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Shield className="h-4 w-4 mr-2" />
          Admin
        </Link>

        <a
          href="#pricing"
          className="hidden lg:inline-flex items-center justify-center rounded-md bg-gradient-fire px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow-sm transition-transform hover:scale-105"
        >
          Join Now — Free Trial
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur border-t border-border"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base uppercase tracking-wider text-foreground border-b border-border/40"
                >
                  {l.label}
                </a>
              ))}
              <Link
                to="/admin"
                onClick={() => setOpen(false)}
                className="py-3 text-base uppercase tracking-wider text-foreground border-b border-border/40 flex items-center gap-2"
              >
                <Shield className="h-4 w-4" />
                Admin
              </Link>
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-md bg-gradient-fire px-5 py-3 font-bold uppercase tracking-wider text-primary-foreground"
              >
                Join Now — Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
