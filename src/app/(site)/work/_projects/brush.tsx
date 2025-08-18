import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";
import GeoTimeline from "@/components/GeoTimeline";

export const meta: Metadata = {
  title: "Ergonomic Brush Tool — Reduce Fatigue",
  description:
    "Clamp-on ergonomic brush handle attachment that reduces hand and wrist strain without disrupting painter workflow.",
  openGraph: { images: ["/covers/brush.jpg"] },
};

const TIMELINE = [
  { id: "intro",             label: "Intro / Problem" },
  { id: "role",              label: "Role & Approach" },
  { id: "needfinding",       label: "Needfinding" },
  { id: "ideation",          label: "Ideation" },
  { id: "storyboarding",     label: "Storyboarding" },
  { id: "mechanical",        label: "Mechanical" },
  { id: "prototyping",       label: "Prototyping" },
  { id: "materials",         label: "Materials" },
  { id: "bom",               label: "BOM" },
  { id: "manufacturability", label: "Manufacturing" },
  { id: "safety",            label: "Safety" },
  { id: "market",            label: "Market" },
  { id: "outcomes",          label: "Outcomes" },
  { id: "next",              label: "Next Steps" },
  { id: "deliverables",      label: "Deliverables" },
];

export default function BrushPage() {
  return (
    <section className="bg-white text-neutral-900">
      {/* 3 columns on large: left nav / content / right legend */}
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_280px]">
        <NotebookNav />

        <article className="py-12 lg:py-16 mt-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12">
            {/* Header */}
            <header id="intro" className="scroll-mt-24 space-y-4">
              <p className="text-sm text-neutral-500">2025-03-01</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ergonomic Brush Tool
              </h1>
              <p className="text-neutral-700 -mt-4 italic">
                Clamp-on ergonomic grip that reduces fatigue and adapts to different brush sizes—without changing painter workflow.
              </p>

              {/* Hero image with custom corner accents */}
              <div className="relative mt-8">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/brush/hero.jpg"
                    alt="Ergonomic brush grip on-site"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <span className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 rounded-tl-sm border-t-4 border-l-4 border-black" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 rounded-br-sm border-b-4 border-r-4 border-black" />
              </div>
            </header>

            {/* ROLE (kept minimal, same style) */}
            <section id="role" className="scroll mt-8 space-y-2">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">ROLE</h2>
              <p className="text-[15px] leading-relaxed text-neutral-900">
                <strong>Needfinding</strong> → <strong>ergonomic rigs</strong> → <strong>CAD</strong> → <strong>DFM</strong> → field trials.
              </p>
              <p className="text-xs text-neutral-600">
                Ergonomics / Product Design / CAD / Mechanical Engineering / PM
              </p>
            </section>

            <div className="my-8 h-px bg-neutral-200" />

            <div className="space-y-16">
              {/* NEEDFINDING */}
              <section id="needfinding" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">NEEDFINDING</h2>

                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Painters spend hours gripping brushes at awkward angles—leading to <strong>hand fatigue</strong>, <strong>wrist strain</strong>, and slower work.
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Common issues: cramping during long edging sessions, handles that don’t fit different hand sizes, and wrist torque when cutting in.
                </p>

                {/* Reference sketch */}
                <div className="grid grid-cols-1 gap-4">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/brush/research-sketch.jpg"
                      alt="Field sketch: hand posture & wrist angles while edging"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
                      Job-site observations: pinch force, wrist angle, and posture over time.
                    </figcaption>
                  </figure>
                </div>
              </section>

              {/* STORYBOARDING */}
              <section id="storyboarding" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">STORYBOARDING</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Snap the grip on the brush → reduced wrist bend while edging → quick swap to another brush with no downtime.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/brush/storyboard.jpg"
                      alt="Grip snaps on, painter edges with neutral wrist, swaps brushes quickly"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 2</span>{" "}
                      Flow storyboard: attach → edge → swap.
                    </figcaption>
                  </figure>
                </div>
              </section>

              <div className="h-px bg-neutral-200" />

              {/* IDEATION / DECOMPOSE */}
              <section id="ideation" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">DECOMPOSE</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Three tracks: <strong>grip geometry</strong>; <strong>clamp/attachment</strong> (snap-fit, sleeve, clamp); <strong>materials</strong> (rod core + silicone overmold).
                </p>

                {/* Triptych with corner accent */}
                <div className="relative mt-4">
                  <div className="rounded-2xl overflow-hidden bg-white shadow-soft">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                      <figure className="relative">
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/projects/brush/proto1.jpg"
                            alt="Early grip form explorations"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                        <figcaption className="px-3 py-2 text-xs text-neutral-600">
                          <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 3</span>{" "}
                          Grip volume studies (palm thickness, angle).
                        </figcaption>
                      </figure>

                      <figure className="relative">
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/projects/brush/proto2.jpg"
                            alt="Clamp/sleeve attachment prototypes"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                        <figcaption className="px-3 py-2 text-xs text-neutral-600">
                          <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 4</span>{" "}
                          Attachment methods: clamp, sleeve, snap.
                        </figcaption>
                      </figure>

                      <figure className="relative">
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/projects/brush/proto3.jpg"
                            alt="Silicone overmold around metal rod core"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                        <figcaption className="px-3 py-2 text-xs text-neutral-600">
                          <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 5</span>{" "}
                          Rod core + silicone overmold for comfort & rigidity.
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-10 w-10 rounded-tl-md border-t-2 border-l-2 border-black" />
                </div>
              </section>

              {/* MECHANICAL */}
              <section id="mechanical" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">MECHANICAL</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Clamp-based attachment compatible with common brush handles; angled grip alignment to neutralize wrist bend.
                </p>
              </section>

              {/* PROTOTYPING */}
              <section id="prototyping" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">PROTOTYPING</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Printed mold forms and poured silicone grips; tested swap speed across brush sizes and textures for non-slip use with gloves.
                </p>

                <div className="relative overflow-hidden rounded-2xl bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/brush/proto-large.jpg"
                    alt="Prototype assembly & field tests"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </section>

              {/* MATERIALS */}
              <section id="materials" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">MATERIALS</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Core: lightweight metal rod for rigidity. Grip: silicone elastomer for comfort & solvent resistance. Clamp: injection-molded polymer.
                </p>
              </section>

              {/* BOM */}
              <section id="bom" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">BOM</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Clamp, rod reinforcement, silicone overmold, fastener/snap. <span className="font-medium">Target cost:</span> $3–$5; retail ~$15–$20.
                </p>
              </section>

              {/* MANUFACTURABILITY */}
              <section id="manufacturability" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">MANUFACTURING</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Injection-molded clamp and grip form; silicone overmolding; modular sizing to reduce SKUs.
                </p>
              </section>

              {/* SAFETY */}
              <section id="safety" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">SAFETY</h2>
                <p className="text-neutral-800 leading-relaxed">
                  No sharp edges or pinch points; solvent-resistant materials for job-site cleaning.
                </p>
              </section>

              {/* MARKET */}
              <section id="market" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">MARKET</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Pro painters, contractors, DIY. <span className="font-medium">Positioning:</span> “Work longer, paint smarter, reduce fatigue.”
                </p>
                <p className="text-neutral-800 leading-relaxed">
                  GTM: licensing (Sherwin-Williams / Purdy / Wooster), direct-to-pro launch, bundle with premium lines.
                </p>
              </section>

              {/* OUTCOMES */}
              <section id="outcomes" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">OUTCOMES</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Prototypes reduced hand strain in testing; clamp design validated across multiple brush types.
                </p>
              </section>

              {/* NEXT STEPS */}
              <section id="next" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">NEXT STEPS</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Run fatigue metrics with pros, optimize clamp for faster swaps, tune grip geometry for hand sizes, prepare licensing deck.
                </p>
              </section>

              {/* DELIVERABLES */}
              <section id="deliverables" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">DELIVERABLES</h2>
                <p className="text-neutral-800 leading-relaxed">
                  Hero render on a real brush, exploded CAD (clamp/grip/rod), sketch studies, prototype photos, BOM snapshot, and licensing sell sheet.
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
