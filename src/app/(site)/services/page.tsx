import type { Metadata } from "next";
import Link from "next/link";
import NotebookNav from "@/components/NotebookNav";

export const metadata: Metadata = {
  title: "Services – IMLP Studio",
  description:
    "Product consulting, CAD conversion & patent drawings, and website building for hardware and design-led teams.",
};

export default function ServicesPage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr]">
        {/* Left notebook sidebar */}
        <NotebookNav />

        {/* Content */}
        <div className="py-12 sm:py-16 lg:py-24 mt-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-12">
            {/* Header (no left gutter line) */}
            <header className="relative">
              <p className="font-mono text-xs tracking-widest text-neutral-500">
                SERVICES
              </p>
              <h1 className="mt-1 text-4xl sm:text-5xl font-extrabold tracking-tight">
                Practical help, end-to-end
              </h1>
              <p className="mt-3 max-w-2xl text-neutral-700">
                I partner with founders, labs, and trades to move ideas from
                insight → CAD → prototype → launch. Clear scope, fast
                iteration, and artifacts you can ship.
              </p>
            </header>

            {/* Compact CTAs */}
            <div className="mt-8 flex flex-wrap gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg px-4 py-2 text-sm bg-neutral-900 text-white shadow-soft hover:opacity-90"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center rounded-lg px-4 py-2 text-sm border border-neutral-900 text-neutral-900 hover:bg-neutral-50"
              >
                See Case Studies
              </Link>
            </div>

            {/* Services grid */}
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Product Consulting */}
              <li className="rounded-2xl bg-white shadow-soft transition hover:shadow-md border border-neutral-100">
                <div className="p-5 sm:p-6">
                  <div className="text-2xl" aria-hidden>🧩</div>
                  <h2 className="mt-3 text-lg font-semibold">Product Consulting</h2>
                  <p className="mt-2 text-sm text-neutral-700">
                    Clarify the problem, map constraints, and design a path to a
                    testable prototype.
                  </p>
                  <div className="mt-4 text-sm space-y-1">
                    <p><span className="font-medium">Outputs:</span> brief, sketches, risk log</p>
                    <p><span className="font-medium">Typical:</span> 1–3 working sessions</p>
                  </div>
                </div>
              </li>

              {/* CAD Conversion / Patent Drawings */}
              <li className="rounded-2xl bg-white shadow-soft transition hover:shadow-md border border-neutral-100">
                <div className="p-5 sm:p-6">
                  <div className="text-2xl" aria-hidden>📐</div>
                  <h2 className="mt-3 text-lg font-semibold">CAD Conversion &amp; Patent Drawings</h2>
                  <p className="mt-2 text-sm text-neutral-700">
                    Clean, watertight CAD from sketches or scans, plus formal
                    figures for IP filings.
                  </p>
                  <div className="mt-4 text-sm space-y-1">
                    <p><span className="font-medium">Outputs:</span> STEP/IGES/SOLID files, ISO views</p>
                    <p><span className="font-medium">Typical:</span> 3–10 parts / assembly</p>
                  </div>
                </div>
              </li>

              {/* Website Building */}
              <li className="rounded-2xl bg-white shadow-soft transition hover:shadow-md border border-neutral-100">
                <div className="p-5 sm:p-6">
                  <div className="text-2xl" aria-hidden>🛠️</div>
                  <h2 className="mt-3 text-lg font-semibold">Website Building</h2>
                  <p className="mt-2 text-sm text-neutral-700">
                    Fast, maintainable sites for product launches and portfolios
                    with clean UX and SEO foundations.
                  </p>
                  <div className="mt-4 text-sm space-y-1">
                    <p><span className="font-medium">Outputs:</span> Next.js site, CMS-ready, analytics</p>
                    <p><span className="font-medium">Typical:</span> 1–3 weeks</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Divider */}
            <div className="mt-10 h-px bg-neutral-200" />

            {/* Process snippet (no gutter line) */}
            <section className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-mono tracking-widest text-neutral-500">HOW I WORK</h3>
                <p className="mt-2 text-neutral-800">
                  Lightweight scopes, quick wins, clear artifacts. I keep comms
                  tight and decisions documented so momentum is never blocked.
                </p>
              </div>

              <div className="rounded-xl bg-neutral-50 p-4 sm:p-5">
                <ol className="text-sm space-y-2 text-neutral-800">
                  <li><span className="font-medium">1. Scope:</span> goals, constraints, success criteria.</li>
                  <li><span className="font-medium">2. Prototype:</span> iterate in the open, weekly check-ins.</li>
                  <li><span className="font-medium">3. Ship:</span> transfer files, notes, and next steps.</li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
