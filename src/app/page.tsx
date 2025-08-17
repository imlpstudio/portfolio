import Container from "@/components/Container";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Studio-grade products & tools.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-700">
          From ergonomics to electronics — concept → CAD → prototype → ship.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/work" className="rounded-xl px-4 py-2 border bg-black text-white">See Work</Link>
          <Link href="/contact" className="rounded-xl px-4 py-2 border">Start a Project</Link>
        </div>
      </Container>
    </section>
  );
}
