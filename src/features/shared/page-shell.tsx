import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PageShell({
  title,
  description,
  children,
  showCta = true,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  showCta?: boolean;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <header className="marketing-surface mb-8 p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">Prime Detailers</p>
        <h1 className="text-gradient mt-3 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-muted-foreground">{description}</p>
      </header>
      {children}
      {showCta && (
        <div className="marketing-surface mt-12 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Ready to get started?</h2>
          <p className="mt-2 text-muted-foreground">
            Explore plans, create your organization, and move your team into Prime Detailers.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/pricing">
              <Button>View Pricing</Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline">Create Account</Button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
