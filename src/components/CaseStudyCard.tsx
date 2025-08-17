import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <li className="rounded-2xl border overflow-hidden bg-white hover:shadow-soft transition">
      <div className="aspect-[16/9] bg-neutral-100">
        {cs.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={cs.cover} alt={cs.title} className="h-full w-full object-cover" />
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="font-semibold">{cs.title}</h3>
        <p className="mt-2 text-sm text-neutral-600 line-clamp-3">{cs.summary}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {cs.tags.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100">{t}</span>
          ))}
        </div>
        <Link className="mt-4 inline-block text-sm underline" href={`/case-studies/${cs.slug}`}>Read case study</Link>
      </div>
    </li>
  );
}
