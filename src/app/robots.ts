import { MetadataRoute } from "next";
import { site } from "@/data/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url.replace(/\/$/,"")}/sitemap.xml`,
  };
}
