import { CircleAlert } from "lucide-react";
import { problemItems } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Decorative background blur */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[800px] rounded-full bg-rose-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-600 ring-1 ring-inset ring-rose-500/20">
            The Challenge
          </p>
          <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Running a workshop shouldn't mean managing everything manually.
          </h2>
          <p className="mt-6 text-pretty text-lg text-slate-600">
            Paper notes, spreadsheets, and chat threads create delays and limited visibility when the
            day gets busy.
          </p>
        </FadeIn>

        <StaggerContainer className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-5" staggerChildren={0.1}>
          {problemItems.map((item) => (
            <StaggerItem
              key={item}
              className="group flex w-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.25rem)]"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-500 transition-colors group-hover:bg-rose-100 group-hover:text-rose-600">
                <CircleAlert className="size-5" aria-hidden />
              </div>
              <span className="mt-2 text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900">{item}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
