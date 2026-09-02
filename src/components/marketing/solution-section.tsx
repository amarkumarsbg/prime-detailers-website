import { featureGroups } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function SolutionSection() {
  return (
    <section className="bg-slate-950 py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-teal-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="mx-auto max-w-2xl text-center mb-16">
          <p className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold text-teal-400 ring-1 ring-inset ring-teal-500/20">
            The Platform
          </p>
          <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            One platform for your entire workshop.
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Operations, customers, billing, inventory, and team workflows — all deeply connected in a single, powerful system.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6" staggerChildren={0.15}>
          {featureGroups.map((group, index) => {
            // Asymmetrical grid spans for Bento layout
            const isWide = index === 0 || index === 5;
            const spanClass = isWide 
              ? "sm:col-span-2 lg:col-span-2" 
              : "col-span-1";
            
            // Adjust the 5th item to span 3 columns if we want a massive bottom banner, 
            // but for 6 items: [2,1], [1,1,1], [3] looks great.
            const finalSpan = index === 5 ? "sm:col-span-2 lg:col-span-3" : spanClass;

            return (
              <StaggerItem
                key={group.title}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10",
                  finalSpan
                )}
              >
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-xl font-bold text-white">{group.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {group.description}
                    </p>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-2 mt-auto">
                    {group.items.map((item) => (
                      <span 
                        key={item} 
                        className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/50 px-3 py-1.5 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/10"
                      >
                        <CheckCircle2 className="size-3.5 text-teal-500" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
