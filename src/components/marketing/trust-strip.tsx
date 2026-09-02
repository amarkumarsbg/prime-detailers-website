import { valueStripItems } from "@/data/features";

export function TrustStrip() {
  return (
    <section className="border-b border-border/70 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">Everything your workshop needs in one platform</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {valueStripItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="flex flex-col items-start gap-2 rounded-xl border border-border/70 bg-slate-50/60 px-3 py-3"
              >
                <Icon className="size-4 text-primary" aria-hidden />
                <span className="text-sm font-medium leading-snug text-foreground">{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
