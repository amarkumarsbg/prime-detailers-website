import { howItWorksSteps } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export function HowItWorksSection() {
  return (
    <section className="bg-white py-24 sm:py-32 border-t border-slate-100">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center mb-16">
          <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20">
            How it works
          </p>
          <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From signup to daily operations in four simple steps.
          </h2>
        </FadeIn>

        <StaggerContainer className="mx-auto mt-20 grid max-w-5xl gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" staggerChildren={0.2}>
          {howItWorksSteps.map((step, index) => (
            <StaggerItem key={step.step} className="relative group">
              {/* Connector Line (Desktop only) */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-slate-100">
                  <div className="h-full bg-teal-500 w-0 transition-all duration-700 group-hover:w-full" />
                </div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-slate-50 border-2 border-slate-100 text-lg font-bold text-slate-400 transition-colors duration-300 group-hover:border-teal-200 group-hover:bg-teal-50 group-hover:text-teal-600 z-10 relative">
                  {step.step}
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
