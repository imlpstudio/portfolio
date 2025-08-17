import type { Metadata } from "next";
import { site } from "@/data/site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    creator: site.creator.handle,
    title: site.title,
    description: site.description,
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
