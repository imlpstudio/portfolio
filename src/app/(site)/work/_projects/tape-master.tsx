import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";

export const meta: Metadata = {
  title: "Tape Master — Magnetic Tape Holder & Dispenser",
  description:
    "Ergonomic, waist-holsterable tape system with magnetic retention and quick indexing.",
  openGraph: { images: ["/covers/tape-master.jpg"] },
};

export default function TapeMasterPage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr]">
        <NotebookNav />
        <article className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12">
            <header className="relative pl-6 sm:pl-8">
              <span aria-hidden className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-neutral-200" />
              <p className="text-sm text-neutral-500">2025-07-20</p>
              <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight mt-24">
                Tape Master — Magnetic Tape Holder &amp; Dispenser
              </h1>
              <p className="mt-2 text-neutral-700">
                Ergonomic, waist-holsterable tape system with magnetic retention and quick indexing.
              </p>

              <div className="relative mt-6 overflow-hidden rounded-2xl border bg-neutral-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/covers/tape-master.jpg"
                  alt="Tape Master"
                  className="w-full h-auto object-cover"
                />
                <span className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 rounded-tl-2xl border-t-2 border-l-2 border-neutral-300" />
                <span className="pointer-events-none absolute -top-2 -right-2 h-12 w-12 rounded-tr-2xl border-t-2 border-r-2 border-neutral-300" />
              </div>
            </header>

            <article className="mt-10 space-y-6 prose prose-neutral max-w-none">
              <h2>Problem</h2>
              <p>Techs needed one-handed operation with secure magnetic retention and quick indexing.</p>

              <h2>Process</h2>
              <ul>
                <li>Ergo studies → foam mockups → CAD loops</li>
                <li>Magnet selection &amp; pole geometry for hold/release balance</li>
                <li>Fixture design for concentric cuts</li>
              </ul>

              <h2>Outcome</h2>
              <p>One-handed use, reduced waste, faster swaps; DFM-ready.</p>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}
