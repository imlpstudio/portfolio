import Container from "@/components/Container";
export default function Services() {
  return (
    <Container>
      <h1 className="mt-12 text-3xl font-bold">Services</h1>
      <ul className="mt-4 list-disc pl-6 text-neutral-700">
        <li>Product design & prototyping</li>
        <li>Patent drawings & documentation</li>
        <li>CAD, DFM, manufacturing sourcing</li>
      </ul>
    </Container>
  );
}
