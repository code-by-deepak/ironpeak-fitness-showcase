import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const imgs = [
  { src: g1, span: "row-span-2" },
  { src: g2, span: "" },
  { src: g3, span: "" },
  { src: g4, span: "" },
  { src: g5, span: "row-span-2" },
  { src: g6, span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="The Space" title="Inside" highlight="IronPeak">
          22,000 sq ft of iron, sweat and intention. Take a look.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {imgs.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-lg ${img.span}`}
            >
              <img src={img.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500 mix-blend-multiply" />
              <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-primary transition-all duration-500 rounded-lg" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center justify-center rounded-md border border-foreground/30 px-7 py-3.5 font-bold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary">
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
