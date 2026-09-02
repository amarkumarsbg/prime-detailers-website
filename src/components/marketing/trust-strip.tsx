import { valueStripItems } from "@/data/features";

export function TrustStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="eyebrow text-center">Everything your workshop needs in one platform</p>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {valueStripItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="text-center sm:text-left">
                <Icon className="mx-auto size-5 text-primary sm:mx-0" aria-hidden />
                <p className="mt-2 text-sm font-medium leading-snug">{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
