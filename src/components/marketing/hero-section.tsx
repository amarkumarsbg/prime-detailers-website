import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductMockup } from "@/components/marketing/product-mockup";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,color-mix(in_oklch,var(--primary),white_88%)_0%,transparent_42%),radial-gradient(circle_at_88%_0%,color-mix(in_oklch,var(--accent),white_70%)_0%,transparent_38%),linear-gradient(180deg,#f7fafc_0%,var(--background)_58%)]"
      />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="reveal-up">
          <p className="inline-flex items-center rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-medium text-muted-foreground">
            Built for Modern Auto Workshops
          </p>
          <h1 className="mt-5 max-w-xl text-balance font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Run Your Workshop Smarter.
            <span className="block text-primary">Grow Your Business Faster.</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
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
