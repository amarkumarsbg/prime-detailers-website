import { whyPoints } from "@/data/features";

export function WhySection() {
  return (
    <section className="section-pad">
      <div className="max-w-2xl">
        <p className="eyebrow">Why Prime Detailers</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
          Built specifically for workshops that want to grow with clarity.
        </h2>
      </div>

      <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {whyPoints.map((point) => {
          const Icon = point.icon;
          return (
            <article key={point.title}>
              <Icon className="size-5 text-primary" aria-hidden />
              <h3 className="mt-3 text-base font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
