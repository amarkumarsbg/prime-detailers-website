export const siteConfig = {
  name: "Prime Detailers",
  tagline: "Complete Workshop Management Software",
  description:
    "Modern workshop management software for car service centers, detailing studios and auto workshops. Manage customers, vehicles, job cards, billing, inventory, staff, rewards and customer communication from one platform.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.primedetailers.com",
  workshopAppUrl:
    process.env.NEXT_PUBLIC_WORKSHOP_APP_URL ?? "https://app.primedetailers.com",
  apiUrl:
    process.env.NEXT_PUBLIC_API_URL ?? "https://prime-detailers-api.onrender.com",
  ogImage: "/og-image.svg",
  links: {
    workshop: process.env.NEXT_PUBLIC_WORKSHOP_APP_URL ?? "https://app.primedetailers.com",
  },
} as const;

/** Flip to false when backend public APIs are ready. */
export const USE_MOCK_PUBLIC_API = true;
