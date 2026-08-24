import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function buildMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${input.path}`;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: `${input.title} | ${siteConfig.name}`,
      description: input.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${input.title} | ${siteConfig.name}`,
      description: input.description,
      images: [siteConfig.ogImage],
    },
  };
}
