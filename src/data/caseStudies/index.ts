import tapeMaster from "./tape-master";
import brush from "./brush";
import tibetansmacker from "./tibetan-smacker";
// If you don't have pages for these yet, leave them out for now to avoid 404s
// import ergonomicFixture from "./ergonomic-fixture";
// import esp32Logger from "./esp32-logger";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string;
  date: string; // ISO
};

export const CASE_STUDIES: CaseStudy[] = [
  // tapeMaster,
  // ergonomicFixture,
  // esp32Logger,
].sort((a, b) => +new Date(b.date) - +new Date(a.date));

export type CaseStudiesByYear = Record<string, CaseStudy[]>;

export function groupByYear(items: CaseStudy[]): CaseStudiesByYear {
  const by: CaseStudiesByYear = {};
  for (const cs of items) {
    const y = new Date(cs.date).getFullYear().toString();
    (by[y] ||= []).push(cs);
  }
  for (const y of Object.keys(by)) {
    by[y].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }
  return by;
}

export const CASE_STUDIES_BY_YEAR = groupByYear(CASE_STUDIES);
export const PROJECT_YEARS = Object.keys(CASE_STUDIES_BY_YEAR)
  .map(Number)
  .sort((a, b) => b - a)
  .map(String);

export default CASE_STUDIES;
