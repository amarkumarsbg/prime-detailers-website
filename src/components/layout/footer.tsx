import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-heading text-lg font-semibold tracking-tight"
            >
              <span
                aria-hidden
                className="flex size-8 items-center justify-center rounded-lg bg-slate-900 text-[11px] font-bold text-white"
              >
                PD
              </span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Modern workshop management software for detailing studios, service centers, and growing
              automotive businesses.
            </p>
          </div>

          <FooterColumn title="Product" items={footerNav.product} />
          <FooterColumn title="Company" items={footerNav.company} />
          <FooterColumn title="Resources" items={footerNav.resources} />
          <div className="space-y-8">
            <FooterColumn title="Account" items={footerNav.account} />
            <FooterColumn title="Legal" items={footerNav.legal} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}</p>
          <p>Workshop management software for modern auto businesses.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      <ul className="space-y-2.5 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={`${title}-${item.href}-${item.label}`}>
            <Link href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
