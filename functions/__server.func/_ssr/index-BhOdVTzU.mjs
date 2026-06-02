import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as AnimatePresence, m as motion, u as useScroll, a as useTransform, b as useInView, c as useMotionValue, d as animate } from "../_libs/framer-motion.mjs";
import { F as Flame, X, M as Menu, P as Play, C as ChevronDown, D as Dumbbell, Z as Zap, H as Heart, A as Activity, a as Apple, b as ArrowRight, Q as Quote, I as Instagram, Y as Youtube, S as Star, c as Check, d as MapPin, e as Phone, f as Mail, g as Clock, h as Facebook, T as Twitter } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Preloader() {
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !done && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, y: "-100%" },
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { rotate: -90, scale: 0 },
              animate: { rotate: 0, scale: 1 },
              transition: { duration: 0.6, ease: "backOut" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-12 w-12 text-primary text-glow", strokeWidth: 2.5 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-hidden", children: "IRONPEAK".split("").map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { y: 60, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { delay: 0.15 + i * 0.05, duration: 0.4, ease: "backOut" },
              className: "font-display text-5xl tracking-wider text-foreground",
              children: c
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scaleX: 0 },
            animate: { scaleX: 1 },
            transition: { duration: 1.6, ease: "easeInOut" },
            className: "absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-fire"
          }
        )
      ]
    }
  ) });
}
const links = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#trainers", label: "Trainers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -80 },
      animate: { y: 0 },
      transition: { delay: 1.9, duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border/60 py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-6 w-6 text-primary transition-transform group-hover:scale-110 text-glow", strokeWidth: 2.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl tracking-wider text-foreground", children: [
              "IRON",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "PEAK" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "relative text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-fire after:transition-all hover:after:w-full",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#pricing",
              className: "hidden lg:inline-flex items-center justify-center rounded-md bg-gradient-fire px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow-sm transition-transform hover:scale-105",
              children: "Join Now — Free Trial"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "lg:hidden p-2 text-foreground",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: "lg:hidden overflow-hidden bg-background/95 backdrop-blur border-t border-border",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col px-6 py-4 gap-1", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "py-3 text-base uppercase tracking-wider text-foreground border-b border-border/40",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#pricing",
                  onClick: () => setOpen(false),
                  className: "mt-3 inline-flex items-center justify-center rounded-md bg-gradient-fire px-5 py-3 font-bold uppercase tracking-wider text-primary-foreground",
                  children: "Join Now — Free Trial"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function Embers({ count = 40 }) {
  const embers = reactExports.useMemo(
    () => Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      duration: 5 + Math.random() * 8,
      delay: Math.random() * 8,
      size: 2 + Math.random() * 4,
      drift: (Math.random() - 0.5) * 200,
      key: i
    })),
    [count]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: embers.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "ember",
      style: {
        left: `${e.left}%`,
        width: e.size,
        height: e.size,
        animationDuration: `${e.duration}s`,
        animationDelay: `${e.delay}s`,
        ["--drift"]: `${e.drift}px`
      }
    },
    e.key
  )) });
}
const heroImg = "/assets/hero-Ch21PnHr.jpg";
const words = ["TRAIN", "HARD.", "LIVE", "STRONG."];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen overflow-hidden flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 1.2 },
        animate: { scale: 1 },
        transition: { duration: 2.4, ease: "easeOut", delay: 1.8 },
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: heroImg,
              alt: "Athlete lifting heavy barbell in dark gym",
              className: "h-full w-full object-cover",
              width: 1920,
              height: 1280
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Embers, { count: 50 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 2, duration: 0.6 },
          className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
            "New Delhi · Est. 2017"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] text-foreground max-w-5xl", children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden align-bottom mr-[0.25em]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.span,
        {
          initial: { y: "110%" },
          animate: { y: 0 },
          transition: { delay: 2.1 + i * 0.12, duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          className: `inline-block ${i === 3 ? "text-gradient-fire text-glow" : ""}`,
          children: w
        }
      ) }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 2.7, duration: 0.6 },
          className: "mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed",
          children: [
            "New Delhi's most intense fitness experience. Transform in",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "90 days" }),
            " or your money back."
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 2.9, duration: 0.6 },
          className: "mt-10 flex flex-wrap items-center gap-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#pricing",
                className: "group inline-flex items-center gap-2 rounded-md bg-gradient-fire px-7 py-4 font-bold uppercase tracking-widest text-primary-foreground animate-glow-pulse transition-transform hover:scale-[1.03]",
                children: "Start Free Trial"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#transform",
                className: "inline-flex items-center gap-3 rounded-md border border-foreground/30 bg-background/30 px-6 py-4 font-bold uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-3.5 w-3.5 fill-current" }) }),
                  "Watch Our Story"
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "#stats",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 3.4, duration: 0.8 },
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em]", children: "Scroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5 animate-bounce-down text-primary" })
        ]
      }
    )
  ] });
}
function Counter({ value, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());
  reactExports.useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2.2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "font-display text-5xl md:text-6xl text-foreground tabular-nums", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { children: rounded }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: suffix })
  ] });
}
const stats = [
  { value: 1200, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Expert Trainers" },
  { value: 8, suffix: "", label: "Years of Excellence" },
  { value: 50, suffix: "+", label: "Fitness Programs" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "stats", className: "relative bg-gradient-blood py-16 border-y border-primary/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,oklch(0.08_0.01_30_/_0.6))]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 md:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.5 },
        transition: { delay: i * 0.1, duration: 0.5 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { value: s.value, suffix: s.suffix }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground", children: s.label })
        ]
      },
      s.label
    )) })
  ] });
}
function SectionHeading({
  eyebrow,
  title,
  highlight,
  children,
  align = "left"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        initial: { opacity: 0, x: -10 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "inline-block text-xs uppercase tracking-[0.3em] text-primary font-bold",
        children: eyebrow
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.h2,
      {
        initial: { opacity: 0, y: 40, skewY: 4 },
        whileInView: { opacity: 1, y: 0, skewY: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        className: "mt-3 font-display text-5xl md:text-7xl text-foreground leading-none",
        children: [
          title,
          " ",
          highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire text-glow", children: highlight })
        ]
      }
    ),
    children && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.15, duration: 0.5 },
        className: "mt-5 text-lg text-muted-foreground leading-relaxed",
        children
      }
    )
  ] });
}
const strength = "/assets/p-strength-C74PW2j2.jpg";
const hiit = "/assets/p-hiit-DraaAuhY.jpg";
const boxing = "/assets/p-boxing-Ac4qYYVj.jpg";
const yoga = "/assets/p-yoga-C6879Hv1.jpg";
const crossfit = "/assets/p-crossfit-DmlAOWMc.jpg";
const nutrition = "/assets/p-nutrition-lGgxQ_Pi.jpg";
const programs = [
  { img: strength, icon: Dumbbell, name: "Strength Training", desc: "Powerlifting & hypertrophy with progressive overload.", level: "Advanced" },
  { img: hiit, icon: Zap, name: "HIIT Cardio", desc: "30-min interval blasts that torch fat fast.", level: "Intermediate" },
  { img: boxing, icon: Flame, name: "Boxing & MMA", desc: "Pad work, sparring and combat conditioning.", level: "Intermediate" },
  { img: yoga, icon: Heart, name: "Yoga & Flexibility", desc: "Mobility, recovery and breath control.", level: "Beginner" },
  { img: crossfit, icon: Activity, name: "CrossFit", desc: "Functional WODs in a tribe-style class.", level: "Advanced" },
  { img: nutrition, icon: Apple, name: "Nutrition Coaching", desc: "Custom macro plans built around your goal.", level: "Beginner" }
];
const levelColor = {
  Beginner: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Intermediate: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Advanced: "bg-primary/25 text-primary border-primary/40"
};
function Programs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "programs", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Programs", title: "Choose Your", highlight: "Battle", children: "Six disciplines, one mission — forge the strongest version of you. Mix, match, and dominate." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: programs.map((p, i) => {
      const Icon = p.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { delay: i % 3 * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          whileHover: { y: -8, rotateX: 4, rotateY: -4 },
          className: "group relative overflow-hidden rounded-xl border border-border bg-card aspect-[4/5] [transform-style:preserve-3d] [perspective:1000px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.img,
                alt: p.name,
                loading: "lazy",
                className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-4 right-4 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${levelColor[p.level]}`, children: p.level }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-primary text-glow mb-3", strokeWidth: 2.2 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-foreground", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary", children: [
                "Explore ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ] }) })
            ] })
          ]
        },
        p.name
      );
    }) })
  ] }) });
}
const transformImg = "/assets/transform-C5lNhPVF.jpg";
function BeforeAfter() {
  const [pos, setPos] = reactExports.useState(50);
  const ref = reactExports.useRef(null);
  const drag = (clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = Math.min(100, Math.max(0, (clientX - r.left) / r.width * 100));
    setPos(p);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border shadow-glow-sm cursor-ew-resize select-none",
      onMouseMove: (e) => e.buttons === 1 && drag(e.clientX),
      onMouseDown: (e) => drag(e.clientX),
      onTouchMove: (e) => drag(e.touches[0].clientX),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: transformImg, alt: "After 90 days", className: "absolute inset-0 h-full w-full object-cover", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 overflow-hidden",
            style: { width: `${pos}%` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: transformImg, alt: "Before", className: "absolute inset-0 h-full object-cover", style: { width: `${ref.current?.clientWidth ?? 800}px`, filter: "grayscale(1) brightness(0.7)" }, loading: "lazy" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 rounded bg-background/80 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground", children: "Before" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 rounded bg-gradient-fire px-3 py-1 text-xs uppercase tracking-widest text-primary-foreground font-bold", children: "After" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 bottom-0 w-0.5 bg-gradient-fire shadow-glow", style: { left: `${pos}%` }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-gradient-fire flex items-center justify-center shadow-glow animate-glow-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-bold", children: "↔" }) }) })
      ]
    }
  );
}
const stories = [
  { name: "Vikram Singh", stat: "Lost 24 kg", quote: "I came in skeptical. 6 months later, my doctor cleared me off meds." },
  { name: "Anjali Reddy", stat: "Gained 8 kg muscle", quote: "Strongest I've ever felt. The coaches treat you like family." },
  { name: "Karan Bhalla", stat: "Lost 18 kg", quote: "From winded on stairs to deadlifting 180kg. IronPeak rewired me." }
];
function Transform() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "transform", className: "relative py-28 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Transformations", title: "Real People.", highlight: "Real Results.", children: "Drag the slider. Watch what 90 days of disciplined training does." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeforeAfter, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: stories.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { delay: i * 0.1, duration: 0.5 },
        className: "rounded-xl border border-border bg-card p-7 hover:border-primary/50 transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-7 w-7 text-primary mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/90 leading-relaxed", children: [
            '"',
            s.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-foreground", children: s.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-gradient-fire", children: s.stat })
          ] })
        ]
      },
      s.name
    )) })
  ] }) });
}
const t1 = "/assets/t1-DPNu0bk_.jpg";
const t2 = "/assets/t2-wPK5A8uJ.jpg";
const t3 = "/assets/t3-B2AeTQPr.jpg";
const t4 = "/assets/t4-uuLgmm2A.jpg";
const trainers = [
  { img: t1, name: "Arjun Mehta", spec: "Strength Coach", years: 9 },
  { img: t2, name: "Priya Sharma", spec: "Yoga Expert", years: 7 },
  { img: t3, name: "Rahul Das", spec: "Boxing Trainer", years: 11 },
  { img: t4, name: "Neha Kapoor", spec: "Nutrition Coach", years: 6 }
];
function Trainers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "trainers", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Our Team", title: "Meet Your", highlight: "Coaches", children: "Decades of combined experience. Zero tolerance for mediocrity." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: trainers.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        whileHover: { y: -10 },
        className: "group relative overflow-hidden rounded-xl border border-border bg-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur border border-border hover:bg-gradient-fire hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "YouTube", className: "grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur border border-border hover:bg-gradient-fire hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary", children: t.spec }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl text-foreground", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              t.years,
              "+ years experience"
            ] })
          ] })
        ]
      },
      t.name
    )) })
  ] }) });
}
const plans = [
  {
    name: "Basic",
    price: "999",
    desc: "Get started with the essentials.",
    features: ["Full gym floor access", "Personal locker", "2 group classes / week", "Mobile app access", "Wifi & filtered water"],
    popular: false
  },
  {
    name: "Pro",
    price: "1,999",
    desc: "Best value for serious lifters.",
    features: ["Everything in Basic", "Unlimited group classes", "1 PT session / week", "Custom diet plan", "Sauna & steam access", "Progress tracking"],
    popular: true
  },
  {
    name: "Elite",
    price: "3,499",
    desc: "For those who accept no compromise.",
    features: ["Everything in Pro", "Unlimited PT sessions", "Monthly supplement kit", "Priority class booking", "Recovery & massage", "24/7 access"],
    popular: false
  }
];
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "relative py-28 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Membership", title: "Pick Your Plan.", highlight: "Start Today.", align: "center", children: "No contracts. Cancel anytime. First week is on the house." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 lg:grid-cols-3", children: plans.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        className: `relative rounded-2xl border p-8 ${p.popular ? "border-primary bg-card shadow-glow lg:scale-105 lg:-translate-y-2" : "border-border bg-card hover:border-primary/40 transition-colors"}`,
        children: [
          p.popular && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-fire px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-glow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-current" }),
            " Most Popular"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-4xl text-foreground", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-6xl text-foreground", children: [
              "₹",
              p.price
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "/month" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: p.features.map((f, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.li,
            {
              initial: { opacity: 0, x: -10 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.12 + j * 0.05 },
              className: "flex items-start gap-3 text-sm text-foreground/90",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-0.5 grid h-5 w-5 place-items-center rounded-full ${p.popular ? "bg-gradient-fire" : "bg-primary/20"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: `h-3 w-3 ${p.popular ? "text-primary-foreground" : "text-primary"}`, strokeWidth: 3 }) }),
                f
              ]
            },
            f
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: `mt-8 block w-full text-center rounded-md py-3.5 font-bold uppercase tracking-widest transition-transform hover:scale-[1.02] ${p.popular ? "bg-gradient-fire text-primary-foreground animate-glow-pulse" : "border border-border bg-background text-foreground hover:border-primary hover:text-primary"}`,
              children: "Get Started"
            }
          )
        ]
      },
      p.name
    )) })
  ] }) });
}
const g1 = "/assets/g1-COU1iz6t.jpg";
const g2 = "/assets/g2-CaoKAjd4.jpg";
const g3 = "/assets/g3-B6bj7tK-.jpg";
const g4 = "/assets/g4-DTF27RLQ.jpg";
const g5 = "/assets/g5-DRMSlDZw.jpg";
const g6 = "/assets/g6-buOntlkE.jpg";
const imgs = [
  { src: g1, span: "row-span-2" },
  { src: g2, span: "" },
  { src: g3, span: "" },
  { src: g4, span: "" },
  { src: g5, span: "row-span-2" },
  { src: g6, span: "" }
];
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "gallery", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "The Space", title: "Inside", highlight: "IronPeak", children: "22,000 sq ft of iron, sweat and intention. Take a look." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4", children: imgs.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: { delay: i * 0.06, duration: 0.5 },
        className: `group relative overflow-hidden rounded-lg ${img.span}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.src, alt: "", loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500 mix-blend-multiply" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-0 group-hover:ring-2 ring-primary transition-all duration-500 rounded-lg" })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "inline-flex items-center justify-center rounded-md border border-foreground/30 px-7 py-3.5 font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary", children: "View Full Gallery" }) })
  ] }) });
}
const items = [
  { name: "Rohan Iyer", role: "Software Engineer", stars: 5, text: "Joined IronPeak after years of mediocre gyms. The energy here is unmatched. I've never been stronger." },
  { name: "Meera Joshi", role: "Doctor", stars: 5, text: "The trainers actually listen. My custom plan worked around my crazy hospital shifts and I still hit my goals." },
  { name: "Aditya Verma", role: "Entrepreneur", stars: 5, text: "Walked in wanting to lose weight. Left as a competitive lifter. This place rewrites what you think is possible." },
  { name: "Sneha Pillai", role: "Marketing Lead", stars: 5, text: "Best decision of 2024. The community is fierce, the coaches push you, and the equipment is world-class." }
];
function Testimonials() {
  const [idx, setIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-28 bg-secondary/40 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.62_0.24_27_/_0.15),transparent_50%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Reviews", title: "Our Members", highlight: "Don't Lie", align: "center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-14 h-[280px] md:h-[240px]", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          animate: { opacity: i === idx ? 1 : 0, scale: i === idx ? 1 : 0.96, y: i === idx ? 0 : 20 },
          transition: { duration: 0.6 },
          className: `absolute inset-0 ${i === idx ? "" : "pointer-events-none"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: Array.from({ length: it.stars }).map((_, s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 fill-primary text-primary" }, s)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-xl md:text-2xl text-foreground leading-relaxed font-light", children: [
                '"',
                it.text,
                '"'
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-foreground", children: it.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: it.role })
            ] })
          ] })
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex justify-center gap-2", children: items.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIdx(i),
          className: `h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gradient-fire" : "w-3 bg-border"}`,
          "aria-label": `Slide ${i + 1}`
        },
        i
      )) })
    ] })
  ] });
}
const ctaImg = "/assets/cta-JQ42rjC5.jpg";
function useCountdown(target) {
  const [t, setT] = reactExports.useState(target - Date.now());
  reactExports.useEffect(() => {
    const i = setInterval(() => setT(target - Date.now()), 1e3);
    return () => clearInterval(i);
  }, [target]);
  const clamp = Math.max(0, t);
  const days = Math.floor(clamp / 864e5);
  const hours = Math.floor(clamp % 864e5 / 36e5);
  const mins = Math.floor(clamp % 36e5 / 6e4);
  const secs = Math.floor(clamp % 6e4 / 1e3);
  return { days, hours, mins, secs };
}
function CtaBanner() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const target = reactExports.useRef(Date.now() + 1e3 * 60 * 60 * (24 * 2 + 14) + 1e3 * 60 * 32).current;
  const { days, hours, mins, secs } = useCountdown(target);
  const cells = [
    { v: days, l: "Days" },
    { v: hours, l: "Hours" },
    { v: mins, l: "Mins" },
    { v: secs, l: "Secs" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative overflow-hidden h-[80vh] min-h-[600px] flex items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { y }, className: "absolute inset-0 -top-20 -bottom-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ctaImg, alt: "", loading: "lazy", className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.7 },
        className: "max-w-2xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.4em] text-primary font-bold", children: "Limited Offer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-5xl md:text-7xl text-foreground leading-[0.9]", children: [
            "Your first week is ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire text-glow", children: "free." }),
            " ",
            "No excuses."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-background/50 backdrop-blur px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground mr-2", children: "Offer ends in" }),
            cells.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-foreground tabular-nums", children: String(c.v).padStart(2, "0") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] uppercase tracking-widest text-muted-foreground", children: c.l })
              ] }),
              i < cells.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-primary font-display text-2xl", children: ":" })
            ] }, c.l))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "inline-flex items-center gap-2 rounded-md bg-gradient-fire px-9 py-5 text-lg font-bold uppercase tracking-widest text-primary-foreground animate-glow-pulse transition-transform hover:scale-105",
              children: "Claim Free Trial Now"
            }
          ) })
        ]
      }
    ) })
  ] });
}
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Visit Us", title: "Come", highlight: "Train", children: "Drop by, take a tour, lift something heavy. We're in the heart of New Delhi." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid gap-8 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6 },
          className: "space-y-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                title: "Map",
                src: "https://www.openstreetmap.org/export/embed.html?bbox=77.21%2C28.61%2C77.24%2C28.64&layer=mapnik",
                className: "h-full w-full grayscale contrast-125 brightness-75",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              { icon: MapPin, label: "Address", val: "B-42, Connaught Place, New Delhi 110001" },
              { icon: Phone, label: "Phone", val: "+91 98765 43210" },
              { icon: Mail, label: "Email", val: "info@ironpeakfitness.com" },
              { icon: Clock, label: "Hours", val: "Mon–Sun · 5 AM – 11 PM" }
            ].map(({ icon: Icon, label, val }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground", children: val })
              ] })
            ] }, label)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          initial: { opacity: 0, x: 40 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6 },
          onSubmit: (e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4e3);
          },
          className: "rounded-2xl border border-border bg-card p-8 space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl text-foreground", children: "Book Your Free Trial" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground -mt-2", children: "We'll call you back within 24 hours." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Goal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  required: true,
                  className: "mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Lose Weight" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Build Muscle" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Improve Fitness" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "General" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 4,
                  className: "mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "submit",
                className: "w-full rounded-md bg-gradient-fire px-7 py-4 font-bold uppercase tracking-widest text-primary-foreground shadow-glow-sm transition-transform hover:scale-[1.02]",
                children: sent ? "✓ We'll be in touch" : "Submit & Start"
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
function Field({ label, name, type = "text" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: name,
        name,
        type,
        required: true,
        className: "mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border bg-secondary/30 pt-16 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-6 w-6 text-primary text-glow", strokeWidth: 2.5 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl tracking-wider text-foreground", children: [
            "IRON",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "PEAK" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs", children: "Forge Your Body. Fuel Your Mind. Own Your Peak." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { title: "Quick Links", links: ["Home", "Programs", "Trainers", "Pricing", "Gallery"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Col, { title: "Programs", links: ["Strength Training", "HIIT Cardio", "Boxing & MMA", "Yoga", "CrossFit"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl tracking-wider text-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "B-42, Connaught Place" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "New Delhi 110001" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+91 98765 43210" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "info@ironpeakfitness.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-2", children: [Instagram, Youtube, Facebook, Twitter].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-gradient-fire hover:text-primary-foreground hover:border-transparent transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "form",
      {
        onSubmit: (e) => e.preventDefault(),
        className: "mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-2xl border border-border bg-card p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl text-foreground", children: "Get free workout tips in your inbox." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "One email a week. Unsubscribe anytime." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              placeholder: "you@email.com",
              className: "flex-1 sm:max-w-xs rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md bg-gradient-fire px-6 py-3 font-bold uppercase tracking-widest text-primary-foreground hover:scale-[1.02] transition-transform", children: "Subscribe" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-border pt-6 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2025 IronPeak Fitness. All Rights Reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-widest", children: "Forged in New Delhi" })
    ] })
  ] }) });
}
function Col({ title, links: links2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl tracking-wider text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: links2.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-muted-foreground hover:text-primary transition-colors", children: l }) }, l)) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dark relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Preloader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Programs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Transform, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Trainers, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
