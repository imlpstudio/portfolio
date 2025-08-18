import Image from "next/image";
import NotebookNav from "@/components/NotebookNav";
import Link from "next/link";
import CASE_STUDIES, {
  CASE_STUDIES_BY_YEAR as EXPORTED_BY_YEAR,
  PROJECT_YEARS as EXPORTED_YEARS,
  type CaseStudy,
} from "@/data/caseStudies/index";

// Safe local grouper (fallback)
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

        <div className="py-8 sm:py-12 lg:py-16 mt-16 sm:mt-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-12">
            <p className="font-mono text-[11px] sm:text-xs tracking-widest text-neutral-500">CASE STUDIES</p>
            <h1 className="mt-1 font-mono text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Projects</h1>
            <p className="mt-2 text-neutral-700">Selected work and process highlights.</p>

            <div className="mt-6 sm:mt-8 space-y-10 sm:space-y-12">
              {years.map((year) => (
                <section key={year} aria-labelledby={`y-${year}`} className="space-y-5 sm:space-y-6">
                  <h2
                    id={`y-${year}`}
                    className="font-mono text-xs sm:text-sm tracking-widest text-neutral-500"
                  >
                    {year}
                  </h2>

                  <ul className="space-y-5 sm:space-y-8">
                    {(byYear[year] ?? []).map((p) => (
                      <li key={p.slug} className="relative pl-0 sm:pl-8">
                        {/* notebook gutter (hide on mobile) */}
                        <span
                          aria-hidden
                          className="hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-neutral-200"
                        />
                        <Link
                          href={`/work/${p.slug}`}
                          className="group grid grid-cols-[88px_1fr] sm:grid-cols-[128px_1fr] gap-3 sm:gap-4 rounded-2xl bg-white p-3 sm:p-4 transition shadow-soft hover:shadow-md"
                        >
                          {/* thumb */}
                          <div className="relative h-[78px] sm:h-[96px] overflow-hidden rounded-lg bg-neutral-50">
                            {p.cover ? (
                              <Image
                                src={p.cover}
                                alt={p.title}
                                fill
                                priority={false}
                                sizes="(max-width: 640px) 88px, 128px"
                                className="object-cover"
                              />
                            ) : null}
                          </div>

                          {/* copy */}
                          <div className="min-w-0">
                            <h3 className="truncate font-semibold text-neutral-900">{p.title}</h3>
                            <p className="mt-1 line-clamp-2 text-sm text-neutral-700">{p.summary}</p>

                            {p.tags?.length ? (
                              <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                                {p.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[10px] sm:text-[11px] font-mono px-2 py-1 rounded-full bg-neutral-100 text-neutral-800"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            ) : null}

                            <span className="mt-3 inline-block text-sm text-neutral-900 underline underline-offset-2 group-hover:no-underline">
                              Read case study →
                            </span>
                          </div>
                        </Link>
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
