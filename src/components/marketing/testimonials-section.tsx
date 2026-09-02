import { testimonials, testimonialsDisclaimer } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="border-y border-border/70 bg-white">
      <div className="section-pad">
        <div className="max-w-2xl">
          <p className="eyebrow">What workshops want</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Clearer operations. Less manual chase.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{testimonialsDisclaimer}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="flex flex-col rounded-2xl border border-border bg-slate-50/50 p-6"
            >
              <blockquote className="flex-1 text-sm leading-7 text-foreground">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.role}, {item.workshop} · {item.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
