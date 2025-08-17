import Container from "@/components/Container";
import { CASE_STUDIES } from "@/data/caseStudies";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function WorkPage() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold">Case Studies</h1>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {CASE_STUDIES.map(cs => <CaseStudyCard key={cs.slug} cs={cs} />)}
      </ul>
    </Container>
  );
}
