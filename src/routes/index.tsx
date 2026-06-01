import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Programs } from "@/components/site/Programs";
import { Transform } from "@/components/site/Transform";
import { Trainers } from "@/components/site/Trainers";
import { Pricing } from "@/components/site/Pricing";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IronPeak Fitness — Forge Your Body. Own Your Peak." },
      { name: "description", content: "New Delhi's most intense fitness experience. Strength, HIIT, boxing, yoga, CrossFit and nutrition coaching. Transform in 90 days or your money back." },
      { property: "og:title", content: "IronPeak Fitness — Train Hard. Live Strong." },
      { property: "og:description", content: "New Delhi's most intense gym. 1200+ members, 15+ expert trainers, 50+ programs." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark relative min-h-screen bg-background text-foreground">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Transform />
        <Trainers />
        <Pricing />
        <Gallery />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
