import { ProductMockup } from "@/components/marketing/product-mockup";
import { showcaseSections } from "@/data/features";

export function ProductShowcase() {
  return (
    <section className="section-pad space-y-20 lg:space-y-28">
      <div className="max-w-2xl">
        <p className="eyebrow">Product showcase</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
          Built around how workshops actually operate.
        </h2>
      </div>

      {showcaseSections.map((section, index) => (
        <article
          key={section.id}
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <p className="eyebrow">{section.eyebrow}</p>
            <h3 className="mt-3 text-balance text-2xl font-semibold sm:text-3xl">{section.title}</h3>
            <p className="mt-4 text-muted-foreground">{section.description}</p>
            <ul className="mt-6 space-y-2">
              {section.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <ProductMockup kind={section.mockup} />
        </article>
      ))}
    </section>
  );
}
