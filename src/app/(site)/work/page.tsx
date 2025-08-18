// src/app/(site)/work/page.tsx
import NotebookNav from "@/components/NotebookNav";
import Link from "next/link";
import CASE_STUDIES, {
  CASE_STUDIES_BY_YEAR as EXPORTED_BY_YEAR,
  PROJECT_YEARS as EXPORTED_YEARS,
  type CaseStudy,
} from "@/data/caseStudies/index";

// local fallback grouper (in case imports ever fail)
function groupLocal(items?: CaseStudy[] | null) {
  const by: Record<string, CaseStudy[]> = {};
  const list = Array.isArray(items) ? items : [];
  for (const cs of list) {
    const y = new Date(cs.date).getFullYear().toString();
    (by[y] ||= []).push(cs);
  }
  for (const y of Object.keys(by)) {
    by[y].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }
  return by;
}

export default function WorkPage() {
  const LIST = Array.isArray(CASE_STUDIES) ? CASE_STUDIES : [];
  const byYear = EXPORTED_BY_YEAR ?? groupLocal(LIST);
  const years =
    EXPORTED_YEARS ?? Object.keys(byYear).map(String).sort((a, b) => +b - +a);

  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr]">
        <NotebookNav />

        <div className="py-12 lg:py-16 mt-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-12">
            <p className="font-mono text-xs tracking-widest text-neutral-500">CASE STUDIES</p>
            <h1 className="mt-1 font-mono text-3xl font-bold tracking-tight">Projects</h1>
            <p className="mt-2 text-neutral-600">Selected work and process highlights.</p>

            <div className="mt-8 space-y-12">
              {years.map((year) => (
                <section key={year} aria-labelledby={`y-${year}`} className="space-y-6">
                  <h2 id={`y-${year}`} className="font-mono text-sm tracking-widest text-neutral-500">
                    {year}
                  </h2>

                  <ul className="space-y-8">
                    {(byYear[year] ?? []).map((p) => (
                      // removed left padding & gutter line
                      <li key={p.slug} className="relative">
                        <Link
                          href={`/work/${p.slug}`}
                          className="group grid grid-cols-[112px_1fr] gap-4 rounded-2xl bg-white p-4 shadow-xl transition hover:shadow-md sm:grid-cols-[128px_1fr]"
                        >
                          {/* no border on the image wrapper */}
                          <div className="relative overflow-hidden rounded-xl bg-neutral-50">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            {p.cover ? (
                              <img
                                src={p.cover}
                                alt={p.title}
                                className="h-[84px] w-full object-cover sm:h-[96px]"
                              />
                            ) : (
                              <div className="h-[84px] w-full sm:h-[96px]" />
                            )}
                          </div>

                          <div className="min-w-0">
                            <h3 className="truncate font-semibold">{p.title}</h3>
                            <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{p.summary}</p>

                            {p.tags?.length ? (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[11px] font-mono px-2 py-1 rounded-full bg-neutral-100 text-neutral-700"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            ) : null}

                            <span className="mt-3 inline-block text-sm underline underline-offset-2 group-hover:no-underline">
                              Read case study →
                            </span>
                          </div>
                        </Link>

                        {/* keep a light divider between cards (optional) */}
                        <div className="mt-6 h-px bg-neutral-200" />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
