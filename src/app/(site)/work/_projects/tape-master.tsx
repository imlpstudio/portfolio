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
  { id: "storyboarding",    label: "Storyboarding" },
  { id: "mechanical",       label: "Mechanical" },
  { id: "prototyping",      label: "Prototyping" },
  { id: "materials",        label: "Materials" },
  { id: "bom",              label: "BOM" },
  { id: "manufacturability",label: "Manufacturing" },
  { id: "safety",           label: "Safety" },
  { id: "market",           label: "Market" },
  { id: "outcomes",         label: "Outcomes" },
  { id: "next",             label: "Next Steps" },
  { id: "deliverables",     label: "Deliverables" },
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
              <p className="text-sm text-neutral-500">2025-07-20</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                TapePro+
              </h1>
              <p className="text-neutral-700 -mt-4 italic">
                Ergonomic, waist-holsterable tape system with magnetic retention and quick indexing.
              </p>

              {/* Hero image (no border) */}
              {/* OUTER: holds the corner overlays */}
              {/* OUTER: holds the corner overlays */}
              <div className="relative mt-8">
                {/* INNER: rounded crop box that controls the image size */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero/1a.png"
                    alt="Field observation / prototype rig"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                {/* chunkier, less-round corners */}
                <span className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 rounded-tl-sm border-t-4 border-l-4 border-black" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 rounded-br-sm border-b-4 border-r-4 border-black" />
              </div>
            </header>

            {/* //////////////$$$//////////////////////////Role & Approach (unchanged) */}
              <section id="role" className="scroll mt-8 space-y-2">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">ROLE</h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                <strong>Needfinding</strong> → <strong>ergonomic rigs</strong> → <strong>CAD</strong> → <strong>DFM</strong> → field trials.
              </p>

              <p className="text-xs text-neutral-600">
                Product Design / Ergonomics / CAD / Mechanical Engineering / PM
              </p>
            </section>
              {/* di/////////$$$/////////////////// */}
              <div className="my-8 h-px bg-neutral-200" />
            <div className=" space-y-16">

              {/* 3. DESIGN PROCESS */}
<section id="needfinding" className="scroll-mt-24 space-y-3 ">
  <h2 className="font-mono text-[14px] tracking-[0.2em] text-neutral-500 text-red-400">NEEDFINDING</h2>

 <p className="text-[15px] leading-relaxed text-neutral-900">
  Pain points centered around hands and wrists !
  </p>
  <p className="text-[15px] leading-relaxed text-neutral-900">
  Fingertip pressure from repeated pinching cuts; 
  constantly <strong>finding the ends</strong> (<span className="text-xs text-neutral-600">fig. 1</span>); 
  <strong> losing the roll</strong>; not being easily <strong>equipped on ladders</strong>; 
  non-ergonomic strain while cutting; and wrist pain from wearing the roll like a “bracelet” just to keep it “handy”.
</p>

  {/* Inline image row (placeholder) */}
  <div className="grid grid-cols-1 gap-4">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src=" /projects/tape/problems.jpeg"
      alt="Field sketch / bracelet storage"
      className="w-auto h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
    />
   
  </div>
</section>
 {/* di/////////$$$/////////////////// */}

<section id="storyboarding" className="scroll-mt-24 space-y-3">

  <h2 className="font-mono text-[14px] tracking-[0.2em] text-neutral-500 text-red-400">STORYBOARDING</h2>

 <p className="text-[15px] leading-relaxed text-neutral-900">
  Pain points centered around hands and wrists !
  </p>
 
  {/* Inline image row (placeholder) */}
  <div className="grid grid-cols-1 gap-4">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src=" /projects/tape/storyboard.jpeg"
      alt="Field sketch / bracelet storage"
      className="w-auto h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
    />
  </div>
  <p className="text-sm text-neutral-700">
    On the ground, the roll <strong>holsters at the waist</strong>, oriented for a clean feed. Guarded path and edge control
    yield <strong>crisp, repeatable strips</strong> that keep masking moving.
  </p>
</section>

<div className="h-px bg-neutral-200 my-8" />

<section id="ideation" className="scroll-mt-24 space-y-3">
  <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">DECOMPOSE</h2>

  <p className="text-[15px] leading-relaxed text-neutral-900">
  Three tracks: <strong>holding &amp; cutting</strong>; <strong>equippability</strong> (clip/holster, <strong>magnetic dock</strong>); <strong>ergonomics</strong> (grip, wrist, reach).
</p>


  {/* Three quick prototype placeholders */}
  {/* --- Image triptych with custom corner border around the GROUP --- */}
  <div className="relative mt-4">
    {/* inner wrapper controls crop/rounding; images live inside */}
    <div className="rounded-2xl overflow-hidden bg-white shadow-soft">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {/* Fig 1 */}
        <figure className="relative">
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
    <img
      src="/projects/tape/tape_proto1.png"
      alt="Bracelet-style storage causing wrist load & edge-loss"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
  <figcaption className="px-3 py-2 text-xs text-neutral-600">
    <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
    Bracelet storage → wrist load & lost edge.
  </figcaption>
</figure>
<figure className="relative">
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
    <img
      src="/projects/tape/proto2.png"
      alt="Bracelet-style storage causing wrist load & edge-loss"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
  <figcaption className="px-3 py-2 text-xs text-neutral-600">
    <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
    Bracelet storage → wrist load & lost edge.
  </figcaption>
</figure>
<figure className="relative">
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
    <img
      src="/projects/tape/proto3.png"
      alt="Bracelet-style storage causing wrist load & edge-loss"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
  <figcaption className="px-3 py-2 text-xs text-neutral-600">
    <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
    Bracelet storage → wrist load & lost edge.
  </figcaption>
</figure>
        {/* Fig 3 */}
        
      </div>
    </div>
<div className="h-px bg-neutral-200 my-8" />

    {/* custom corner overlays (outside so they don't get clipped) */}
    <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-10 w-10 rounded-tl-md border-t-2 border-l-2 border-black" />
   </div>
</section>

                        {/* //////////////$$$//////////////////////////Role & Approach (unchanged) */}
<section id="ideation" className="scroll-mt-24 space-y-3">
  <h2 className="font-mono text-[14px] tracking-[0.2em] text-grey-400">MAGNET PROTOTYPES</h2>

  {/* --- Image triptych with custom corner border around the GROUP --- */}
  <div className="relative mt-4">
    {/* inner wrapper controls crop/rounding; images live inside */}
    <div className="rounded-2xl overflow-hidden bg-white shadow-soft">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {/* Fig 1 */}
        <figure className="relative">
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
    <img
      src="/projects/tape/v1.png"
      alt="Bracelet-style storage causing wrist load & edge-loss"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
  <figcaption className="px-3 py-2 text-xs text-neutral-600">
    <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
    Bracelet storage → wrist load & lost edge.
  </figcaption>
</figure>
  {/* //////////////$$$//////////////////////////Role & Approach (unchanged) */}

<figure className="relative">
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
    <img
      src="/projects/tape/v2.png"
      alt="Bracelet-style storage causing wrist load & edge-loss"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
  <figcaption className="px-3 py-2 text-xs text-neutral-600">
    <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
    Bracelet storage → wrist load & lost edge.
  </figcaption>
</figure>
  {/* //////////////$$$//////////////////////////Role & Approach (unchanged) */}

<figure className="relative">
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
    <img
      src="/projects/tape/v3.png"
      alt="Bracelet-style storage causing wrist load & edge-loss"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
    {/* //////////////$$$//////////////////////////Role & Approach (unchanged) */}

  <figcaption className="px-3 py-2 text-xs text-neutral-600">
    <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
    Bracelet storage → wrist load & lost edge.
  </figcaption>
</figure>
        {/* Fig 3 */}
        
      </div>
    </div>

    {/* custom corner overlays (outside so they don't get clipped) */}
      <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-10 w-10 rounded-br-md border-b-2 border-r-2 border-black" />
  </div>
</section>

<section id="storyboarding" className="scroll-mt-24 space-y-3">

  <h2 className="font-mono text-[14px] tracking-[0.2em] text-neutral-500 text-red-400">MAGNET</h2>

 <p className="text-[15px] leading-relaxed text-neutral-900">
   <em> Now the sticky can stick to anything. - Plato </em>
  </p>
 
  {/* Inline image row (placeholder) */}
  <div className="grid grid-cols-1 gap-4">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src=" /projects/tape/mag.png"
      alt="Field sketch / bracelet storage"
      className="w-auto h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
    />
  </div>
  <p className="text-sm text-neutral-700">
    On the ground, the roll <strong>holsters at the waist</strong>, oriented for a clean feed. Guarded path and edge control
    yield <strong>crisp, repeatable strips</strong> that keep masking moving.
  </p>
</section>

<div className="h-px bg-neutral-200 my-8" />

<section id="storyboarding" className="scroll-mt-24 space-y-3">

  <h2 className="font-mono text-[14px] tracking-[0.2em] text-neutral-500 text-red-400">MAGNET</h2>


   <div className="relative mt-4">
    {/* inner wrapper controls crop/rounding; images live inside */}
    <div className="rounded-2xl overflow-hidden bg-white shadow-soft">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {/* Fig 1 */}
        <figure className="relative">
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
    <img
      src="/projects/tape/alone2.png"
      alt="Bracelet-style storage causing wrist load & edge-loss"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
  <figcaption className="px-3 py-2 text-xs text-neutral-600">
    <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
    Bracelet storage → wrist load & lost edge.
  </figcaption>
</figure>
  {/* //////////////$$$//////////////////////////Role & Approach (unchanged) */}
 
  {/* //////////////$$$//////////////////////////Role & Approach (unchanged) */}

<figure className="relative">
  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
    <img
      src="/projects/tape/alone2.png"
      alt="Bracelet-style storage causing wrist load & edge-loss"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
    {/* //////////////$$$//////////////////////////Role & Approach (unchanged) */}

  <figcaption className="px-3 py-2 text-xs text-neutral-600">
    <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
    Bracelet storage → wrist load & lost edge.
  </figcaption>
</figure>
        {/* Fig 3 */}
        
      </div>
    </div>

    {/* custom corner overlays (outside so they don't get clipped) */}
      <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-10 w-10 rounded-br-md border-b-2 border-r-2 border-black" />
  </div>
 
  <p className="text-sm text-neutral-700">
    On the ground, the roll <strong>holsters at the waist</strong>, oriented for a clean feed. Guarded path and edge control
    yield <strong>crisp, repeatable strips</strong> that keep masking moving.
  </p>
</section>

<div className="h-px bg-neutral-200 my-8" />

  {/* //////////////$$$//////////////////////////Role & Approach (unchanged) */}



 {/* di/////////$$$/////////////////// */}
              <section id="prototyping" className="scroll-mt-24 space-y-3">
                <h2 className="text-xl sm:text-2xl font-semibold">Engineering &amp; Prototyping — Iterations</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Rapid <span className="font-medium">3D prints</span> validated grip comfort (with and without gloves),
                  while blade tests compared PLA edge, guarded steel, and composite teeth for cut quality vs. safety.
                </p>

                {/* Single large placeholder */}
                <div className="relative overflow-hidden rounded-2xl bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hero/tape/proto2.png"
                    alt="Prototype assembly & testing"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </section>

              <section id="materials" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Materials</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Handle: molded polymer with <span className="font-medium">overmolded silicone</span> grip. Blade:
                  <span className="font-medium"> stainless retractable</span> in a protective housing. Magnetic retention:
                  <span className="font-medium text-red-600"> neodymium core</span>.
                </p>
              </section>

              <section id="bom" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Product Management — Bill of Materials</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Molded body, silicone grip insert, retractable blade module, magnet assembly,
                  spindle + locking cap. <span className="font-medium">Target cost:</span> ~$12–$15; retail ~$35–$40.
                </p>
              </section>

              <section id="manufacturability" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Manufacturability</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Designed for <span className="font-medium">injection molding</span> with snap-fits to reduce fasteners.
                  Blade module ships as a <span className="font-medium">replaceable cartridge</span> to unlock consumable
                  revenue.
                </p>
              </section>

              <section id="safety" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Safety</h2>
                <p className="text-neutral-800 leading-relaxed">
                  <span className="font-medium">Retractable blade</span> minimizes exposure during transport.
                  An <span className="font-medium">edge-guarded</span> or <span className="font-medium">tooth</span>
                  variant supports school/DIY environments.
                </p>
              </section>

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

              <section id="deliverables" className="scroll-mt-24 space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold">Case Study Deliverables</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Hero product render, exploded CAD, ergonomic sketch set, prototype photos, BOM cost snapshot,
                  and a sell-sheet mockup for licensing.
                </p>
              </section>
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
