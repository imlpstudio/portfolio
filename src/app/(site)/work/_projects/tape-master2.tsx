// src/app/(site)/work/_projects/tape-master.tsx
import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";
import GeoTimeline from "@/components/GeoTimeline";

export const meta: Metadata = {
  title: "Tape Master — Magnetic Tape Holder & Dispenser",
  description:
    "Ergonomic, waist-holsterable tape system with magnetic retention and quick indexing.",
  openGraph: { images: ["/covers/tape-master.jpg"] },
};

const TIMELINE = [
  { id: "intro",            label: "Intro / Problem" },
  { id: "role",             label: "Role & Approach" },
  { id: "needfinding",      label: "Needfinding" },
  { id: "ideation",         label: "Ideation" },
  // { id: "storyboarding",    label: "Storyboarding" },
  // { id: "mechanical",       label: "Mechanical" },
  // { id: "prototyping",      label: "Prototyping" },
  // { id: "materials",        label: "Materials" },
  // { id: "bom",              label: "BOM" },
  // { id: "manufacturability",label: "Manufacturing" },
  // { id: "safety",           label: "Safety" },
  // { id: "market",           label: "Market" },
  // { id: "outcomes",         label: "Outcomes" },
  // { id: "next",             label: "Next Steps" },
  // { id: "deliverables",     label: "Deliverables" },
];

export default function TapeMasterPage() {
  return (
    <section className="bg-white text-neutral-900">
      {/* 3 columns on large: left nav / content / right legend */}
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_280px]">
        <NotebookNav />

        <article className="py-12 lg:py-16 mt-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12">
            {/* Header */}
            <header id="intro" className="scroll-mt-24 space-y-4">
              <p className="text-sm text-neutral-500">2025-07</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                TapePro++++
              </h1>
              <p className="text-neutral-700 -mt-4 italic">
                Ergonomic, waist-holsterable tape system with magnetic retention and quick indexing.
              </p>


{/* 1. ----------------------------video part-------------------------------------- */}
                 <div className="relative mt-8">
                {/* INNER: rounded crop box that controls the image size */}
                <div className="relative w-full mx-auto aspect-[3/4] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/tape/tapewaist.jpeg"
                    alt="TapePro+ prototype at waist"
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                  />
              </div>
                {/* chunkier, less-round corners */}
                <span className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 rounded-tl-sm border-t-4 border-l-4 border-black" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 rounded-br-sm border-b-4 border-r-4 border-black" />
              </div>


{/* 1. ----------------------------video part-------------------------------------- */}
            </header>
            <div className="my-8 h-px bg-neutral-200" />
            <div className=" space-y-16">

{/* 1. ----------------------------video part-------------------------------------- */}
<h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">MAGNETIC RETENTION</h2>
<p className="text-neutral-700 -mt-10 italic">
                To the belt attatchment, your ladder, door frames, or a random piece of metal. Quick indexing that prvides saftey and comfort. 
</p>
<div className="relative mt-2">
  {/* INNER: rounded crop box that controls the video size */}
  <div className="relative w-full aspect-[10/12] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
    <video
      className="absolute inset-0 h-full w-full object-cover object-bottom"
      poster="/images/tape1-poster.jpg"
      preload="metadata"
      playsInline
      autoPlay
      loop
      muted
      controls={false}
    >
      <source src="/videos/tape1-1080p.webm" type="video/webm" />
      <source src="/videos/tape1-1080p.mp4" type="video/mp4" />
      <source src="/videos/tape1-720p.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
{/* 1. ----------------------------video part-------------------------------------- */}
                 <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">EMBEDDED NEODYMIUM</h2>
                  <p className="text-neutral-700 -mt-10 italic"> <p className="text-neutral-700 -mt-10 italic">
               Printed Iterations on X1E Carbon Printers
</p></p>
                 <div className="relative mt-8">
                {/* INNER: rounded crop box that controls the image size */}
                <div className="relative w-full mx-auto aspect-[10/10] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/tape/tapebambu2.png"
                    alt="TapePro+ prototype at waist"
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                  />
              </div>
                {/* chunkier, less-round corners */}
                <span className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 rounded-tl-sm border-t-4 border-l-4 border-black" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 rounded-br-sm border-b-4 border-r-4 border-black" />
              </div>

{/* 1. ----------------------------video part-------------------------------------- */}




              {/* <section id="prototyping" className="scroll-mt-24 space-y-3">
                <h2 className="text-xl sm:text-2xl font-semibold">Engineering &amp; Prototyping — Iterations</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Rapid <span className="font-medium">3D prints</span> validated grip comfort (with and without gloves),
                  while blade tests compared PLA edge, guarded steel, and composite teeth for cut quality vs. safety.
                </p>
                <div className="relative overflow-hidden rounded-2xl bg-neutral-50 shadow-soft">
                 
                  <img
                    src="/hero/tape/proto2.png"
                    alt="Prototype assembly & testing"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </section> */}

              {/* <section id="materials" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Materials</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Handle: molded polymer with <span className="font-medium">overmolded silicone</span> grip. Blade:
                  <span className="font-medium"> stainless retractable</span> in a protective housing. Magnetic retention:
                  <span className="font-medium text-red-600"> neodymium core</span>.
                </p>
              </section> */}

              {/* <section id="bom" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Product Management — Bill of Materials</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Molded body, silicone grip insert, retractable blade module, magnet assembly,
                  spindle + locking cap. <span className="font-medium">Target cost:</span> ~$12–$15; retail ~$35–$40.
                </p>
              </section> */}

              {/* <section id="manufacturability" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Manufacturability</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Designed for <span className="font-medium">injection molding</span> with snap-fits to reduce fasteners.
                  Blade module ships as a <span className="font-medium">replaceable cartridge</span> to unlock consumable
                  revenue.
                </p>
              </section> */}

              {/* <section id="safety" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Safety</h2>
                <p className="text-neutral-800 leading-relaxed">
                  <span className="font-medium">Retractable blade</span> minimizes exposure during transport.
                  An <span className="font-medium">edge-guarded</span> or <span className="font-medium">tooth</span>
                  variant supports school/DIY environments.
                </p>
              </section> */}

              <section id="market" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Business &amp; Market Thinking</h2>
                <p className="text-neutral-800 leading-relaxed">
                  <span className="font-medium">Market:</span> pro painters, contractors, DIY.{" "}
                  <span className="font-medium">Differentiator:</span> built for tradespeople, not offices.{" "}
                  <span className="font-medium">Positioning:</span>{" "}
                  <em>“Tape faster. Work safer. Always ready at hand.”</em>
                </p>
                <p className="text-neutral-800 leading-relaxed">
                  <span className="font-medium">GTM:</span> licensing (Sherwin-Williams / 3M / Stanley), DTC contractor
                  channels, and Amazon Pro Tools.
                </p>
              </section>

              <section id="outcomes" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Outcomes &amp; Learnings</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Achieved a functioning prototype with <span className="font-medium">one-handed flow</span>,
                  fast indexing, and safe cutting. Field sessions indicate reduced restart time and less frustration.
                </p>
                <p className="text-neutral-800 leading-relaxed">
                  The path to <span className="font-medium">DFM</span> is clear: injection molding with a modular blade
                  assembly.
                </p>
              </section>

              <section id="next" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Next Steps</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Finalize the cutting mechanism choice, run durability cycles on site, refine holster/magnet hardware,
                  and assemble a <span className="font-medium">licensing package</span>.
                </p>
              </section>

              {/* <section id="deliverables" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Case Study Deliverables</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Hero product render, exploded CAD, ergonomic sketch set, prototype photos, BOM cost snapshot,
                  and a sell-sheet mockup for licensing.
                </p>
              </section> */}

              <div className="h-24">  </div>
            </div>
          </div>
        </article>

        {/* Right geology timeline */}
        <div className="hidden xl:block px-6 py-12 mt-36">
          <GeoTimeline items={TIMELINE} />
        </div>
      </div>
    </section>
  );
}
