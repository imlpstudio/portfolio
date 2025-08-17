import type { Metadata } from "next";
import Container from "@/components/Container";
import { CASE_STUDIES } from "@/data/caseStudies";

export async function generateStaticParams() {
  return CASE_STUDIES.map(cs => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cs = CASE_STUDIES.find(c => c.slug === params.slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: { images: cs.cover ? [{ url: cs.cover }] : [] },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = CASE_STUDIES.find(c => c.slug === params.slug)!;
  return (
    <Container>
      <article className="prose max-w-none prose-neutral mt-12">
        <h1>{cs.title}</h1>
        <p className="lead">{cs.summary}</p>
        <hr />
        <p>Long-form write-up goes here. Add build notes, CAD, BOM, testing, and business results.</p>
      </article>
    </Container>
  );
}
