import { howItWorksSteps } from "@/data/features";

export function HowItWorksSection() {
  return (
    <section className="border-y border-border/70 bg-white">
      <div className="section-pad">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Go from signup to daily operations in four clear steps.
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step) => (
            <li key={step.step} className="relative">
              <p className="font-heading text-4xl font-semibold text-primary/20">{step.step}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
