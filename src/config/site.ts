export const siteConfig = {
  name: "Prime Detailers",
  tagline: "Run Your Workshop Smarter",
  description:
    "Prime Detailers is a complete workshop management platform for auto detailing businesses. Manage jobs, customers, inventory, staff, and finances — all in one place.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.primedetailers.com",
  workshopAppUrl:
    process.env.NEXT_PUBLIC_WORKSHOP_APP_URL ?? "https://app.primedetailers.com",
  apiUrl:
    process.env.NEXT_PUBLIC_API_URL ?? "https://prime-detailers-api.onrender.com",
  ogImage: "/og-image.svg",
  links: {
    workshop: process.env.NEXT_PUBLIC_WORKSHOP_APP_URL ?? "https://app.primedetailers.com",
  },
  nav: [
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
  ],
} as const;
