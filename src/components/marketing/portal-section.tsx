import { customerPortal, workshopPortal } from "@/data/features";

export function PortalSection() {
  return (
    <section className="border-y border-border/70 bg-slate-950 text-white">
      <div className="section-pad">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-slate-400 uppercase">
            Two connected experiences
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
            Built for your workshop team and your customers.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-8">
            <h3 className="text-2xl font-semibold">{workshopPortal.title}</h3>
            <p className="mt-2 text-sm text-slate-300">
              For {workshopPortal.audience.join(", ")}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {workshopPortal.features.map((feature) => (
                <li key={feature} className="text-sm text-slate-200">
                  <span className="mr-2 text-teal-300" aria-hidden>
                    •
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-8">
            <h3 className="text-2xl font-semibold">{customerPortal.title}</h3>
            <p className="mt-2 text-sm text-slate-300">
              For {customerPortal.audience.join(", ")}
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {customerPortal.features.map((feature) => (
                <li key={feature} className="text-sm text-slate-200">
                  <span className="mr-2 text-teal-300" aria-hidden>
                    •
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
