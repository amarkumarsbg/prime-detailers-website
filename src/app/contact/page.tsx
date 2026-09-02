import type { Metadata } from "next";
import { ContactForm } from "@/features/contact/contact-form";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact Prime Detailers for product questions, free trial help, pricing guidance, or sales conversations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      title="Talk to the Prime Detailers team"
      description="Share your workshop details and we will follow up about product fit, pricing, or onboarding."
    >
      <ContactForm />
    </PageShell>
  );
}
