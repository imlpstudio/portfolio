import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="border-b bg-gradient-to-b from-white to-neutral-50">
        <Container className="py-20 sm:py-24">
          <p className="text-sm font-medium text-brand">Product Design & Engineering</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Studio-grade products & tools.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-neutral-700">
            From ergonomics to electronics — concept → CAD → prototype → ship.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/work" className="rounded-xl px-4 py-2 bg-brand text-white shadow-soft">See Work</Link>
            <Link href="/contact" className="rounded-xl px-4 py-2 border">Start a Project</Link>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Ergonomics", desc: "Human factors, tooling, fixtures." },
            { title: "Electronics", desc: "ESP32, power, enclosures, safety." },
            { title: "DFM → Prod", desc: "BOM, vendor mgmt, test rigs." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border p-6 bg-white">
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{f.desc}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
