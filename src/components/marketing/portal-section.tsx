import { customerPortal, workshopPortal } from "@/data/features";

export function PortalSection() {
  return (
    <section className="border-y border-border/70 bg-slate-950 text-white">
      <div className="section-pad">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-slate-400 uppercase">
            Two connected experiences
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Built for your workshop team and your customers.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <PortalCard
            title={workshopPortal.title}
            subtitle="For owners, admins, staff, and managers"
            audience={workshopPortal.audience}
            features={workshopPortal.features}
          />
          <PortalCard
            title={customerPortal.title}
            subtitle="Self-service visibility for every vehicle owner"
            audience={customerPortal.audience}
            features={customerPortal.features}
          />
        </div>
      </div>
    </section>
  );
}

function PortalCard({
  title,
  subtitle,
  audience,
  features,
}: {
  title: string;
  subtitle: string;
  audience: string[];
  features: string[];
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {audience.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {features.map((feature) => (
          <li key={feature} className="text-sm text-slate-200">
            <span className="mr-2 text-teal-300" aria-hidden>
              •
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
