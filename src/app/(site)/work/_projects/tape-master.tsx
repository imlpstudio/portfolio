// src/app/(site)/work/_projects/tape-master.tsx
import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";
import GeoTimeline from "@/components/GeoTimeline";

export const meta: Metadata = {
  title: "Tape Pro",
  description: "The Tape tool for painters. Tape like a pro.",
  openGraph: { images: ["/covers/tape-master.jpg"] },
};

const TIMELINE = [
  { id: "intro", label: "Intro / Problem" },
  { id: "Context", label: "Context" },
  { id: "design-goals", label: "Design Goals" },
];

export default function TapeMasterPage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_280px]">
        <NotebookNav />

        <article className="py-12 lg:py-16 mt-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12">
            {/* Header */}
            <header id="intro" className="scroll-mt-24 space-y-4">
              <p className="text-sm text-neutral-500">2025-07</p>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Tape Pro
              </h1>

              <p className="text-neutral-700 -mt-4 italic">
                Ergonomic, waist-holsterable tape system with magnetic retention and quick indexing.
              </p>

              {/* Hero image */}
              <div className="relative mt-8">
                <div className="relative h-24 w-full mx-auto aspect-[3/4] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  <img
                    src="/covers/tape-master.jpg"
                    alt="Tape Pro prototype at waist"
                    className="absolute inset-0 h-40 w-full object-cover object-bottom"
                  />
                </div>

                <span className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 rounded-tl-sm border-t-4 border-l-4 border-black" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 rounded-br-sm border-b-4 border-r-4 border-black" />
              </div>

              {/* Meta grid */}
              <div className="mt-6 grid gap-3 sm:grid-cols-4 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-3 text-xs sm:text-[13px]">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    ROLE
                  </p>
                  <p className="mt-1 text-neutral-900">
                    Industrial Designer &amp;
                    <br />
                    Product Engineer
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    DURATION
                  </p>
                  <p className="mt-1 text-neutral-900">
                    ~3 weeks (concept → functional proto)
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    SKILLS
                  </p>
                  <p className="mt-1 text-neutral-900">
                    Ergonomics, CAD, DFM,
                    <br />
                    Prototyping, Testing, BOM
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    TOOLS
                  </p>
                  <p className="mt-1 text-neutral-900">
                    Fusion 360 / SolidWorks,
                    <br />
                    FDM 3D printing, hand tools,
                    <br />
                    magnet test rigs
                  </p>
                </div>
              </div>
            </header>

            <div className="my-8 h-px bg-neutral-200" />

            <div className="space-y-12">
              {/* Magnetic retention */}
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                MAGNETIC RETENTION
              </h2>

              <p className="text-neutral-700 -mt-10 italic">
                To the belt attachment, your ladder, door frames, or any nearby
                piece of metal. Quick indexing that provides safety and comfort.
              </p>

              <div className="relative mt-2 flex gap-4">
                <div className="relative h-96 aspect-[10/12] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  <video
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                    preload="metadata"
                    playsInline
                    autoPlay
                    loop
                    muted
                  >
                    <source src="/videos/tape1-1080p.webm" type="video/webm" />
                    <source src="/videos/tape1-1080p.mp4" type="video/mp4" />
                    <source src="/videos/tape1-720p.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="relative h-96 aspect-[10/12] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  <video
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                    preload="metadata"
                    playsInline
                    autoPlay
                    loop
                    muted
                  >
                    <source src="/videos/tape1-1080p.webm" type="video/webm" />
                    <source src="/videos/tape1-1080p.mp4" type="video/mp4" />
                    <source src="/videos/tape1-720p.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* start of Context///////////////////////////////////////////////////////////////////// */}
        <section id="Context" className="scroll-mt-24 space-y-10">
  {/* Split block: image left, text right */}
  <h2 className="text-xl sm:text-2xl font-semibold">
        Context
      </h2><div className="grid gap-6 sm:grid-cols-2 items-center">
    {/* Left image */}
    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
      <img
        src="/projects/tape/context-hero.jpg"
        alt="Painter workflow context"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>

    {/* Right text */}
    <div className="space-y-4">
      

      <p className="text-neutral-700 leading-relaxed">
        Tape Pro was designed in the context of real job sites — ladders,
        tool belts, door frames, and constant movement. The goal was to
        eliminate micro-friction in a painter’s workflow without adding
        cognitive or physical load.
      </p>

      <p className="text-neutral-800 font-semibold">
        Painters frequently lose tape mid-task, forcing repeated climbs,
        resets, and wasted motion.
      </p>

      <p className="text-neutral-800 font-semibold">
        Existing tape solutions assume static work surfaces, not dynamic,
        vertical, or one-handed use.
      </p>
    </div>
  </div>

  {/* Core insights header */}
  <h3 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
    CORE INSIGHTS
  </h3>

  {/* Insight images */}
  <div className="grid gap-4 sm:grid-cols-3">
    <div className="space-y-2">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
        <img
          src="/projects/tape/insight-1.jpg"
          alt="Tape placed on ladder rung"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <p className="text-xs text-neutral-600 leading-snug">
        Painters routinely park tape on ladders, railings, or improvised
        surfaces — risking drops and interruptions.
      </p>
    </div>

    <div className="space-y-2">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
        <img
          src="/projects/tape/insight-2.jpg"
          alt="Tape falling from pocket"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <p className="text-xs text-neutral-600 leading-snug">
        Pockets and loose holsters fail during bending, climbing, and
        repositioning.
      </p>
    </div>

    <div className="space-y-2">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
        <img
          src="/projects/tape/insight-3.jpg"
          alt="One-handed tape access"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <p className="text-xs text-neutral-600 leading-snug">
        One-handed access is critical when the other hand is stabilizing
        the body or holding a tool.
      </p>
    </div>
  </div>
</section>
              {/* end of Context. and start of Design goals ////////////////////// */}
<section id="design-goals" className="scroll-mt-24 space-y-10">
  <h2 className="text-xl sm:text-2xl font-semibold">Design Goals</h2>

  <div className="grid gap-4 sm:grid-cols-3">
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
      <p className="font-semibold text-neutral-900">One-handed Flow</p>
      <p className="mt-1 text-sm text-neutral-700">
        Enable painters to retrieve, place, and re-dock tape without breaking
        posture or grip.
      </p>
    </div>

    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
      <p className="font-semibold text-neutral-900">Zero Drop Risk</p>
      <p className="mt-1 text-sm text-neutral-700">
        Prevent accidental drops from ladders, lifts, and pockets during motion.
      </p>
    </div>

    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
      <p className="font-semibold text-neutral-900">Job-Site Durable</p>
      <p className="mt-1 text-sm text-neutral-700">
        Survive dust, paint buildup, impacts, and repeated daily use.
      </p>
    </div>
  </div>
</section>
              {/* end of design goals ///////////////////////////////////////////////////////////////////// */}
            <section id="design-psychology" className="scroll-mt-24 space-y-10">
  <h2 className="text-xl sm:text-2xl font-semibold">Design Psychology</h2>

  {/* Sketches */}
  <div className="space-y-3">
    <h3 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
      EARLY ITERATION SKETCHES
    </h3>

    <div className="grid gap-4 sm:grid-cols-2">
      <img src="/projects/tape/sketch-1.jpg" className="rounded-lg bg-neutral-50 shadow-soft" />
      <img src="/projects/tape/sketch-2.jpg" className="rounded-lg bg-neutral-50 shadow-soft" />
    </div>
  </div>

  {/* Physical prototypes */}
  <div className="space-y-3">
    <h3 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
      PHYSICAL PROTOTYPES
    </h3>

    <div className="grid gap-4 sm:grid-cols-3">
      <img src="/projects/tape/proto-1.jpg" className="rounded-lg bg-neutral-50 shadow-soft" />
      <img src="/projects/tape/proto-2.jpg" className="rounded-lg bg-neutral-50 shadow-soft" />
      <img src="/projects/tape/proto-3.jpg" className="rounded-lg bg-neutral-50 shadow-soft" />
    </div>
  </div>

  {/* Final prototypes */}
  <div className="space-y-3">
    <h3 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
      FINAL PROTOTYPE
    </h3>

    <div className="grid gap-4 sm:grid-cols-3">
      <img src="/projects/tape/final-1.jpg" className="rounded-lg bg-neutral-50 shadow-soft" />
      <img src="/projects/tape/final-2.jpg" className="rounded-lg bg-neutral-50 shadow-soft" />
      <img src="/projects/tape/final-3.jpg" className="rounded-lg bg-neutral-50 shadow-soft" />
    </div>
  </div>
</section>

            {/* end of Context. and start of Design goals ////////////////////// */}
            <section id="mechanism" className="scroll-mt-24 space-y-6">
  <div className="grid gap-6 sm:grid-cols-2 items-center">
    <div className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold">
        Mechanism Engineering
      </h2>

      <p className="text-neutral-700 leading-relaxed">
        The retention mechanism balances magnetic force, mechanical indexing,
        and release ergonomics. The system was tuned to remain secure during
        climbing while allowing intentional one-handed removal.
      </p>
    </div>

    <img
      src="/projects/tape/mechanism.gif"
      className="rounded-lg bg-neutral-50 shadow-soft"
    />
  </div>
</section>

            {/* end of Context. and start of Design goals ////////////////////// */}
            <section id="exploded" className="scroll-mt-24 space-y-4">
  <h2 className="text-xl sm:text-2xl font-semibold">Exploded View</h2>

  <img
    src="/projects/tape/exploded.jpg"
    className="w-full rounded-lg bg-neutral-50 shadow-soft"
  />
</section>

            {/* end of Context. and start of Design goals ////////////////////// */}
            <section id="bom" className="scroll-mt-24 space-y-6">
  <div className="grid gap-6 sm:grid-cols-2">
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm">
      <ul className="space-y-2">
        <li>• Injection-molded body</li>
        <li>• Neodymium magnet core</li>
        <li>• Steel indexing insert</li>
        <li>• Retention spring</li>
        <li>• Fastener-free snap fits</li>
      </ul>
    </div>

    <p className="text-neutral-700 leading-relaxed">
      Components were minimized to reduce assembly time and failure points.
      Snap-fits replaced screws wherever possible to lower cost and improve
      manufacturability.
    </p>
  </div>
</section>

            {/* end of Context. and start of Design goals ////////////////////// */}
            <section id="dfm" className="scroll-mt-24 space-y-6">
  <h2 className="text-xl sm:text-2xl font-semibold">
    DFM & Tradeoffs
  </h2>

  <table className="w-full text-sm border border-neutral-200">
    <thead className="bg-neutral-50">
      <tr>
        <th className="p-2 text-left">Decision</th>
        <th className="p-2 text-left">Cost Impact</th>
        <th className="p-2 text-left">Durability Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-t">
        <td className="p-2">Glass-filled polymer</td>
        <td className="p-2">↑</td>
        <td className="p-2">↑↑</td>
      </tr>
      <tr className="border-t">
        <td className="p-2">Snap-fit joints</td>
        <td className="p-2">↓</td>
        <td className="p-2">→</td>
      </tr>
    </tbody>
  </table>
</section>

            {/* end of Context. and start of Design goals ////////////////////// */}
<section id="testing" className="scroll-mt-24 space-y-10">
  <h2 className="text-xl sm:text-2xl font-semibold">
    Field Testing & Results
  </h2>

  {[1,2,3].map(i => (
    <div key={i} className="grid gap-6 sm:grid-cols-2 items-center">
      <img
        src={`/projects/tape/test-${i}.jpg`}
        className="rounded-lg bg-neutral-50 shadow-soft"
      />
      <p className="text-neutral-700 italic">
        “This stayed put the whole time I was cutting in. I didn’t have to
        think about it.”
      </p>
    </div>
  ))}
</section>

            {/* end of Context. and start of Design goals ////////////////////// */}
            <section id="market" className="scroll-mt-24 space-y-4">
  <h2 className="text-xl sm:text-2xl font-semibold">
    Market Validation
  </h2>

  <p className="text-neutral-700">
    Tape Pro units have been sold directly to working painters through
    local networks and job-site demos.
  </p>

  <p className="text-neutral-900 font-semibold">
    {`XX+ units sold • XX repeat buyers • Used on active job sites`}
  </p>
</section>

            {/* end of Context. and start of Design goals ////////////////////// */}
            <section id="reflection" className="scroll-mt-24 space-y-4">
  <h2 className="text-xl sm:text-2xl font-semibold">
    Reflection
  </h2>

  <p className="text-neutral-700 leading-relaxed">
    This project reinforced the value of designing directly within the
    constraints of real labor. The most impactful decisions emerged from
    observing frustration, not from adding features.
  </p>
</section>

            {/* end of Context. and start of Design goals ////////////////////// */}

              <div className="h-24" />
            </div>
          </div>
        </article>

        {/* Right timeline */}
        <div className="hidden xl:block px-6 py-12 mt-36">
          <GeoTimeline items={TIMELINE} />
        </div>
      </div>
    </section>
  );
}
