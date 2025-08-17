import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <li className="border rounded-2xl p-5 hover:shadow-sm">
      <h3 className="font-semibold">{cs.title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{cs.summary}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {cs.tags.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100">{t}</span>
        ))}
      </div>
      <Link className="mt-4 inline-block text-sm underline" href={`/case-studies/${cs.slug}`}>Read</Link>
    </li>
  );
}
