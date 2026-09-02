import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductMockup } from "@/components/marketing/product-mockup";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(15,118,110,0.08),transparent_55%)]"
      />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:pt-16 lg:pb-24">
        <div className="reveal-up">
          <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
            Built for modern auto workshops
          </p>
          <h1 className="mt-4 max-w-xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Run Your Workshop Smarter.
            <span className="mt-1 block text-slate-500">Grow Your Business Faster.</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Manage customers, vehicles, job cards, billing, inventory, staff, rewards and customer
            communication — all from one powerful platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup">
              <Button size="lg" className="btn-marketing">
                Start Free Trial
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg" className="btn-marketing">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>

        <div className="reveal-up animation-delay-2">
          <ProductMockup kind="hero" />
        </div>
      </div>
    </section>
  );
}
