import { CircleAlert } from "lucide-react";
import { problemItems } from "@/data/features";

export function ProblemSection() {
  return (
    <section className="section-pad">
      <div className="max-w-2xl">
        <p className="eyebrow">The problem</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold sm:text-4xl">
          Running a workshop shouldn&apos;t mean managing everything manually.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Most workshops still rely on paper notes, spreadsheets, and chat threads. That creates
          delays, missed follow-ups, and limited visibility when the day gets busy.
        </p>
      </div>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {problemItems.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 border-b border-border/80 py-4 text-sm text-foreground sm:border sm:rounded-xl sm:border-border/70 sm:bg-white sm:px-4 sm:py-4"
          >
            <CircleAlert className="mt-0.5 size-4 shrink-0 text-amber-600" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
