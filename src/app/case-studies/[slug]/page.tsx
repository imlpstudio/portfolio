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
    <Container className="py-12">
      <article className="prose max-w-none">
        <h1>{cs.title}</h1>
        <p className="lead">{cs.summary}</p>
        <h2>Problem</h2>
        <p>What constraints, use-cases, and user insights drove the concept?</p>
        <h2>Process</h2>
        <ul>
          <li>Sketch → CAD → prototype loops</li>
          <li>Ergonomic validation + material selection</li>
          <li>Electronics & firmware iterations (if applicable)</li>
        </ul>
        <h2>Outcome</h2>
        <p>Quantify impact, reliability improvements, cost reductions, or time saved.</p>
      </article>
    </Container>
  );
}
