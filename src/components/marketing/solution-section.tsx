import { solutionFeatures } from "@/data/features";

export function SolutionSection() {
  return (
    <section className="border-y border-border/70 bg-white">
      <div className="section-pad">
        <div className="max-w-2xl">
          <p className="eyebrow">The solution</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            One platform for your entire workshop.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Prime Detailers brings operations, customers, billing, inventory, and team workflows into
            a single modern system.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutionFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="group">
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl border border-border bg-slate-50 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                  <Icon className="size-4" aria-hidden />
                </div>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
