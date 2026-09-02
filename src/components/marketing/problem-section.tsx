import { CircleAlert } from "lucide-react";
import { problemItems } from "@/data/features";

export function ProblemSection() {
  return (
    <section className="section-pad">
      <div className="max-w-2xl">
        <p className="eyebrow">The challenge</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
          Running a workshop shouldn&apos;t mean managing everything manually.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Paper notes, spreadsheets, and chat threads create delays and limited visibility when the
          day gets busy.
        </p>
      </div>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {problemItems.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-border/80 bg-white px-4 py-4 text-sm"
          >
            <CircleAlert className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
