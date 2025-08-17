import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";

export const meta: Metadata = {
  title: "Ergonomic Test Fixture",
  description:
    "Human-factors test rig for repeatable evaluations and safe operator interaction.",
  openGraph: { images: ["/covers/ergonomic-fixture.jpg"] },
};

export default function ErgonomicFixturePage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr]">
        <NotebookNav />
        <article className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12">
            <header className="relative pl-6 sm:pl-8">
              <span aria-hidden className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-neutral-200" />
              <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight">Ergonomic Test Fixture</h1>
              <p className="mt-2 text-neutral-700">Repeatable pinned positions, guarded motion, instrumented loads.</p>
              <div className="relative mt-6 overflow-hidden rounded-2xl border bg-neutral-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/covers/ergonomic-fixture.jpg" alt="Ergonomic Fixture" className="w-full h-auto object-cover" />
              </div>
            </header>

            <section className="mt-10 space-y-6">
              <h2 className="text-xl font-semibold">Notes</h2>
              <p>Designed for quick operator training and minimal fatigue over long runs.</p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
