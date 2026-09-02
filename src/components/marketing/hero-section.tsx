import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductMockup } from "@/components/marketing/product-mockup";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-slate-950 -mt-14 sm:-mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <img 
          src="/hero-bg.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(15,118,110,0.5),transparent_70%)]"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-40 lg:pb-20">
        <StaggerContainer className="mx-auto max-w-4xl text-center" delayChildren={0.2} staggerChildren={0.15}>
          <StaggerItem>
            <p className="text-xs font-semibold tracking-[0.14em] text-teal-400 uppercase drop-shadow-sm">
              Built for modern auto workshops
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <h1 className="mt-4 text-balance font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.1] drop-shadow-md">
              Run Your Workshop Smarter.
              <span className="mt-2 block text-slate-300">Grow Your Business Faster.</span>
            </h1>
          </StaggerItem>
          
          <StaggerItem>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-300 sm:text-lg lg:text-xl drop-shadow-sm">
              Manage customers, vehicles, job cards, billing, inventory, staff, rewards and customer
              communication — all from one powerful platform.
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Link href="/signup">
                <Button size="lg" className="btn-marketing group h-14 rounded-full px-8 text-lg font-semibold shadow-xl transition-all hover:scale-105 animate-float">
                  Start Free Trial
                  <ArrowRight className="size-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="btn-marketing h-14 rounded-full border-white/30 bg-white/5 px-8 text-lg font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 hover:text-white animate-float-delayed">
                  Watch Demo
                </Button>
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
