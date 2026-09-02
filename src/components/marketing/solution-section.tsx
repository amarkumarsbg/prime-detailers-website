import { solutionFeatures } from "@/data/features";

export function SolutionSection() {
  return (
    <section className="border-y border-border/70 bg-white">
      <div className="section-pad">
        <div className="max-w-2xl">
          <p className="eyebrow">The platform</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            One platform for your entire workshop.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Operations, customers, billing, inventory, and team workflows — connected in one system.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutionFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title}>
                <Icon className="size-5 text-primary" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
