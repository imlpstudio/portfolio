import { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/data/caseStudies";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const pages = ["/", "/work", "/about", "/services", "/contact"].map(p => ({
    url: `${base}${p}`, changefreq: "weekly", priority: p === "/" ? 1 : 0.8,
  }));
  const cases = CASE_STUDIES.map(cs => ({
    url: `${base}/case-studies/${cs.slug}`, changefreq: "monthly", priority: 0.7,
  }));
  return [...pages, ...cases];
}
