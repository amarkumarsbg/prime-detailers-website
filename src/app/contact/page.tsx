import type { Metadata } from "next";
import { ContactForm } from "@/features/contact/contact-form";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Connect with Prime Detailers for product, onboarding, and pricing support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Prime Detailers"
      description="Share your details and workshop needs. Our team will connect for product guidance and onboarding."
    >
      <ContactForm />
    </PageShell>
  );
}
