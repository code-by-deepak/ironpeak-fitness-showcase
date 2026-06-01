import { Flame, Instagram, Youtube, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/30 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-primary text-glow" strokeWidth={2.5} />
              <span className="font-display text-2xl tracking-wider text-foreground">
                IRON<span className="text-gradient-fire">PEAK</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Forge Your Body. Fuel Your Mind. Own Your Peak.
            </p>
          </div>

          <Col title="Quick Links" links={["Home", "Programs", "Trainers", "Pricing", "Gallery"]} />
          <Col title="Programs" links={["Strength Training", "HIIT Cardio", "Boxing & MMA", "Yoga", "CrossFit"]} />

          <div>
            <h4 className="font-display text-xl tracking-wider text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>B-42, Connaught Place</li>
              <li>New Delhi 110001</li>
              <li>+91 98765 43210</li>
              <li>info@ironpeakfitness.com</li>
            </ul>
            <div className="mt-4 flex gap-2">
              {[Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-gradient-fire hover:text-primary-foreground hover:border-transparent transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-2xl border border-border bg-card p-6"
        >
          <div className="flex-1">
            <div className="font-display text-xl text-foreground">Get free workout tips in your inbox.</div>
            <div className="text-xs text-muted-foreground">One email a week. Unsubscribe anytime.</div>
          </div>
          <input
            type="email"
            placeholder="you@email.com"
            className="flex-1 sm:max-w-xs rounded-md border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
          />
          <button className="rounded-md bg-gradient-fire px-6 py-3 font-bold uppercase tracking-widest text-primary-foreground hover:scale-[1.02] transition-transform">
            Subscribe
          </button>
        </form>

        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© 2025 IronPeak Fitness. All Rights Reserved.</span>
          <span className="uppercase tracking-widest">Forged in New Delhi</span>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-xl tracking-wider text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
