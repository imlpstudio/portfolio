// src/app/(site)/work/page.tsx
import Image from "next/image";                 // ⬅️ add this
import NotebookNav from "@/components/NotebookNav";
import Link from "next/link";
import CASE_STUDIES, {
  CASE_STUDIES_BY_YEAR as EXPORTED_BY_YEAR,
  PROJECT_YEARS as EXPORTED_YEARS,
  type CaseStudy,
} from "@/data/caseStudies/index";

// ... keep your helper/grouping code the same ...

export default function WorkPage() {
  const LIST = Array.isArray(CASE_STUDIES) ? CASE_STUDIES : [];
  const byYear = EXPORTED_BY_YEAR ?? groupLocal(LIST);
  const years = EXPORTED_YEARS ?? Object.keys(byYear).map(String).sort((a, b) => +b - +a);

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
                      <li key={p.slug} className="relative pl-6 sm:pl-8">
                        <span aria-hidden className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-neutral-200" />
                        <Link
                          href={`/work/${p.slug}`}
                          className="group grid grid-cols-[112px_1fr] gap-4 rounded-2xl bg-white p-4 transition shadow-soft hover:shadow-md sm:grid-cols-[128px_1fr]"
                        >
                          {/* thumb with next/image */}
                          <div className="relative h-[84px] sm:h-[96px] overflow-hidden rounded-lg border bg-neutral-50">
                            {p.cover ? (
                              <Image
                                src={p.cover}
                                alt={p.title}
                                fill
                                sizes="128px"
                                className="object-cover"
                              />
                            ) : null}
                          </div>

                          <div className="min-w-0">
                            <h3 className="truncate font-semibold">{p.title}</h3>
                            <p className="mt-1 line-clamp-2 text-sm text-neutral-600">{p.summary}</p>

                            {p.tags?.length ? (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                  <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-full bg-neutral-100 text-neutral-700">
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
