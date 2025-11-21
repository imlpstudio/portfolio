// app/work/_projects/tape-master.tsx
import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";
import GeoTimeline from "@/components/GeoTimeline";

export const meta: Metadata = {
  title: "Tape Master — Magnetic Tape Holder & Dispenser",
  description:
    "Ergonomic, waist-holsterable tape system with magnetic retention and quick indexing, designed for real jobsite use.",
  openGraph: { images: ["/covers/tape-master.jpg"] },
};

const TIMELINE = [
  { id: "intro", label: "Hero / TL;DR" },
  { id: "snapshot", label: "Project Snapshot" },
  { id: "problem", label: "Problem & Context" },
  { id: "goals", label: "Design Goals" },
  { id: "discover", label: "Discover: Field Insights" },
  { id: "define", label: "Define: Constraints" },
  { id: "develop", label: "Develop: Concepts" },
  { id: "final", label: "Final Design" },
  { id: "engineering", label: "Engineering & DFM" },
  { id: "testing", label: "Testing & Validation" },
  { id: "iterations", label: "Iterations & Failures" },
  { id: "business", label: "Business & Roadmap" },
  { id: "reflection", label: "Reflection" },
];

export default function TapeMasterPage() {
  return (
    <section className="bg-white text-neutral-900">
      {/* 3 columns on large: left nav / content / right legend */}
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_280px]">
        <NotebookNav />

        <article className="py-12 lg:py-16 mt-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12">
            {/* ========================= HERO / TL;DR ========================= */}
            <header id="intro" className="scroll-mt-24 space-y-4">
              <p className="text-sm text-neutral-500">2025</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Tape Master — Magnetic Tape Holder &amp; Dispenser
              </h1>
              <p className="text-neutral-700 -mt-4 italic text-[15px] leading-relaxed">
                An ergonomic, waist-holsterable tape system with magnetic retention and quick
                indexing—built so pros can grab, tear, and place tape without breaking their flow on
                ladders, scaffolds, or lifts.
              </p>

              {/* Hero image with custom corner accents */}
              <div className="relative mt-8">
                <div className="relative w-full mx-auto aspect-[3/4] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/tape/tapewaist.jpeg"
                    alt="Tape Master prototype worn at the waist on a jobsite"
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                  />
                </div>
                <span className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 rounded-tl-sm border-t-4 border-l-4 border-black" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 rounded-br-sm border-b-4 border-r-4 border-black" />
              </div>

              {/* Quick stat bar */}
              <div className="mt-6 grid gap-3 sm:grid-cols-4 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-3 text-xs sm:text-[13px]">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">ROLE</p>
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
                  <p className="mt-1 text-neutral-900">~3–4 weeks (concept → functional proto)</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    SKILLS
                  </p>
                  <p className="mt-1 text-neutral-900">
                    Ergonomics, CAD, DFM,
                    <br />
                    Mechanisms, Prototyping, BOM
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    TOOLS
                  </p>
                  <p className="mt-1 text-neutral-900">
                    Fusion 360 / SolidWorks,
                    <br />
                    Bambu X1C, hand tools,
                    <br />
                    magnet tests
                  </p>
                </div>
              </div>
            </header>

            <div className="my-10 h-px bg-neutral-200" />

            {/* ========================= PROJECT SNAPSHOT ========================= */}
            <section id="snapshot" className="scroll-mt-24 space-y-3">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                PROJECT SNAPSHOT
              </h2>
              <p className="text-[15px] leading-relaxed text-neutral-900">
                Tape Master was born from watching pros constantly reach, pocket, drop, and search
                for their tape rolls while trying to keep a job moving. I designed a magnetic,
                waist-holsterable system that keeps tape indexed at the hip, docks securely to
                ladders and metal surfaces, and integrates a safer, controlled tearing experience.
              </p>
              <p className="text-[15px] leading-relaxed text-neutral-900">
                <span className="font-semibold">Designer side:</span> sculpted holster geometry,
                belt integration, clear affordances for “grab, tear, place,” and brand-ready
                visuals.
                <br />
                <span className="font-semibold">Engineer side:</span> spindle and locking cap
                mechanics, embedded neodymium magnets, cutting-edge exploration, wall thicknesses,
                draft angles, and a preliminary BOM designed for licensing to brands like
                Sherwin-Williams, 3M, or Stanley.
              </p>
            </section>

            <div className="my-10 h-px bg-neutral-200" />

            {/* ========================= PROBLEM & CONTEXT ========================= */}
            <section id="problem" className="scroll-mt-24 space-y-3">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                01 — PROBLEM &amp; CONTEXT
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                On real job sites, tape is a constant: masking, labeling, protection, layout. But
                the workflow often looks like this: tape roll tossed on a ladder step, jammed into a
                pocket, or balanced on a sill—ready to fall or disappear exactly when you need it.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  Tape rolls are easy to misplace, drop, or kick off ladders—especially when moving
                  quickly.
                </li>
                <li>
                  One-handed tearing is clumsy and often risky with improvised blades or jagged
                  edges.
                </li>
                <li>
                  Nothing integrates belt-carry + magnetic docking + safe tearing in one pro-grade
                  tool.
                </li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                <span className="font-semibold">Users / stakeholders:</span> pro painters,
                carpenters, general contractors, and DIYers who live with tape in their hands all
                day—and brands that want to upsell accessories to those users.
              </p>

              <p className="mt-2 text-[15px] leading-relaxed text-neutral-900">
                <span className="italic">
                  How might we design a tape system that stays with the worker, not the ladder,
                  while making taping safer, faster, and less frustrating?
                </span>
              </p>

              <div className="grid grid-cols-1 gap-4 mt-4">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/tape/context-jobsite.jpg"
                    alt="Tape roll sitting loosely on ladder and window sill"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 1
                    </span>{" "}
                    Typical reality: tape rolls on sills, steps, and pockets—easy to drop, lose, or
                    crush.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= DESIGN GOALS ========================= */}
            <section id="goals" className="scroll-mt-24 space-y-3 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                02 — DESIGN GOALS
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                From these observations, I created a set of design and engineering goals that would
                keep Tape Master grounded in real jobsite value.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  <span className="font-semibold">Ergonomic waist carry:</span> comfortable all-day
                  wear that doesn’t dig into the hip or snag on harnesses.
                </li>
                <li>
                  <span className="font-semibold">Magnetic retention:</span> embedded neodymium
                  magnets to dock to ladders, door frames, or metal studs—without feeling “sticky”
                  or annoying.
                </li>
                <li>
                  <span className="font-semibold">Intuitive one-handed flow:</span> grab tape roll,
                  pull, tear, and place—with a single hand when the other is on a brush, roller, or
                  tool.
                </li>
                <li>
                  <span className="font-semibold">Compatibility:</span> support common painter’s
                  tapes and standard core sizes.
                </li>
                <li>
                  <span className="font-semibold">Durability &amp; safety:</span> robust enough for
                  drops and jobsite abuse, with a controlled edge strategy (either guarded metal or
                  composite teeth).
                </li>
                <li>
                  <span className="font-semibold">Manufacturability:</span> clean part splits, low
                  assembly complexity, attractive margins at retail price points.
                </li>
              </ul>
            </section>

            {/* ========================= DISCOVER: RESEARCH ========================= */}
            <section id="discover" className="scroll-mt-24 space-y-3 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                03 — DISCOVER: FIELD INSIGHTS
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I treated this as a small needfinding sprint: watching how painters, tapers, and
                remodelers actually carry and tear tape over the course of a day.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  Rolls migrate constantly: from ladder rung → pocket → sill → top of a bucket →
                  floor.
                </li>
                <li>
                  Many people “hack” solutions: carabiners through the core, lanyards, cheap
                  plastic dispensers, or magnets duct-taped to the roll.
                </li>
                <li>
                  The most experienced pros are extremely fast with tape—but often at the cost of
                  safety or comfort.
                </li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Condensed user needs sounded like:
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>“I just want the tape to always be on me, not back on the ladder.”</li>
                <li>“I hate bending down to grab a roll I just dropped.”</li>
                <li>“I want to tear cleanly with one hand and not rip my gloves.”</li>
              </ul>

              <div className="grid grid-cols-1 gap-4 mt-4">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/tape/research-annotated.jpg"
                    alt="Annotated photos of tape usage habits and improvised solutions"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 2
                    </span>{" "}
                    Annotated field observations: how tape moves around the worker over the day.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= DEFINE: CONSTRAINTS ========================= */}
            <section id="define" className="scroll-mt-24 space-y-3 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                04 — DEFINE: CONSTRAINTS &amp; REQUIREMENTS
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                To keep the concept practical for licensing and manufacturing, I set explicit
                constraints:
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Must support common painter tape widths and core sizes.</li>
                <li>
                  Must attach to a standard belt or tool belt without special hardware or
                  modifications.
                </li>
                <li>
                  Must integrate magnets in a way that feels helpful but doesn’t “grab” everything
                  in a truck or toolbox.
                </li>
                <li>
                  Must be manufacturable as a small set of molded components plus magnets / optional
                  cutting module.
                </li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I framed the work as a loop of discover → define → develop → deliver, validating
                each step via prototypes worn on real jobs.
              </p>
            </section>

            {/* ========================= DEVELOP: CONCEPTS & PROTOS ========================= */}
            <section id="develop" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                05 — DEVELOP: CONCEPTS, SKETCHES &amp; PROTOTYPES
              </h2>

              {/* 5.1 Early Concept Sketches */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  5.1 Early concepts
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  I sketched around a few tensions: fixed holster vs. removable module, exposed vs.
                  guarded cutting edge, and how aggressively the tape should be “locked in” vs.
                  freely spinning.
                </p>

                <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                  <li>Side-loaded vs. top-loaded tape insertion.</li>
                  <li>Holster that stays on belt vs. magnet-only body.</li>
                  <li>One-piece molded body vs. split clamshell with removable core.</li>
                </ul>

                <div className="grid grid-cols-1 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/tape/sketches-sheet.jpg"
                      alt="Page of early Tape Master sketches"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 3
                      </span>{" "}
                      Early layouts exploring how the tape roll enters, spins, and exits the
                      holster.
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* 5.2 Printed Prototypes & Magnet Exploration */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  5.2 3D prints &amp; embedded magnets
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  I moved quickly into FDM prints on a Bambu X1C to validate belt comfort, tape
                  spindle behavior, and magnet placement. The prints doubled as test jigs for
                  experimenting with magnet strength and orientation.
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  The goal wasn&apos;t a pretty part yet—it was understanding how the system behaved
                  under real movement: climbing ladders, bending, turning sideways in tight spaces.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/tape/tapebambu2.png"
                      alt="Bambu-printed Tape Master prototypes on build plate"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 4
                      </span>{" "}
                      Early FDM runs to dial in clearances and magnet pockets.
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/tape/magnet-tests.jpg"
                      alt="Embedded neodymium magnet tests on Tape Master body"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 5
                      </span>{" "}
                      Testing magnet positions for docking to ladders, studs, and door frames.
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* 5.3 Ergonomics & Anthropometrics */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  5.3 Ergonomics &amp; anthropometrics
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  The holster body needed to be large enough to shield the roll and edge, but not so
                  bulky that it bumped into ladders, rails, or other tools. I tuned curvature and
                  belt offset so that the roll sits slightly away from the hip, reducing contact
                  pressure and making the “grab” motion more natural.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/tape/ergonomics-section.jpg"
                      alt="Section view of Tape Master on belt with hip outline"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 6
                      </span>{" "}
                      Section view: standoff from hip, belt slot alignment, and roll position for
                      easy reach.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            {/* ========================= FINAL DESIGN ========================= */}
            <section id="final" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                06 — FINAL DESIGN: TAPE MASTER
              </h2>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  6.1 Overall form
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  The final design is a compact holster with a central spindle, belt slot, and
                  encased magnet region. The geometry guides the user&apos;s hand to the tape exit
                  path and stabilizes the roll during tearing.
                </p>

                <div className="relative mt-3">
                  <div className="rounded-2xl overflow-hidden bg-white shadow-soft">
                    <div className="grid grid-cols-1 gap-0">
                      <figure className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/projects/tape/hero-callouts.jpg"
                          alt="Hero render of Tape Master with callouts"
                          className="w-full h-full object-cover"
                        />
                        <figcaption className="px-3 py-2 text-xs text-neutral-600">
                          <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                            FIG. 7
                          </span>{" "}
                          Callouts: belt interface, spindle, magnet region, and tape exit geometry.
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-10 w-10 rounded-tl-md border-t-2 border-l-2 border-black" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  6.2 Magnetic retention &amp; docking
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Embedded neodymium magnets sit behind a protective wall in the holster body. They
                  allow the entire unit to “click” onto a ladder rail, door frame, or metal stud,
                  without the magnets being exposed to paint and debris.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/tape/docked-ladder.jpg"
                      alt="Tape Master docked magnetically to ladder"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 8
                      </span>{" "}
                      Magnet docking to ladder rails for quick off-body parking.
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/tape/docked-doorframe.jpg"
                      alt="Tape Master attached to metal door frame while working"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 9
                      </span>{" "}
                      Alternate docking on door frames or studs for team sharing.
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  6.3 One-handed tearing
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  The tape exits along a guided path toward a controlled tearing edge (concepts
                  explored with guarded metal and composite teeth). The grip position and edge
                  alignment support a predictable, repeatable tear without needing two hands.
                </p>

                <figure className="relative mt-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/tape/tearing-sequence.jpg"
                    alt="Sequence of one-handed tear using Tape Master"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 10
                    </span>{" "}
                    Grab → pull → tear sequence, designed to keep the user&apos;s other hand free.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= ENGINEERING & MANUFACTURABILITY ========================= */}
            <section id="engineering" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                07 — ENGINEERING &amp; MANUFACTURABILITY
              </h2>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  7.1 CAD &amp; internal architecture
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  I structured Tape Master as a primary holster body, a spindle and cap, and a
                  magnet / cutting module that can be tweaked across SKUs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/tape/exploded-view.jpg"
                      alt="Exploded view of Tape Master components"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 11
                      </span>{" "}
                      Exploded view: holster, spindle, cap, magnet insert, and cutting module.
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/tape/section-wallthickness.jpg"
                      alt="Section view of wall thickness and ribbing for Tape Master"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 12
                      </span>{" "}
                      Section view: wall thickness, stiffening ribs, and draft for molding.
                    </figcaption>
                  </figure>
                </div>

                <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                  <li>Wall thickness tuned for stiffness without excessive weight.</li>
                  <li>Ribs support the belt slot, magnet chamber, and spindle region.</li>
                  <li>Draft angles applied to all relevant molded surfaces.</li>
                  <li>Bosses and snap features sized to accept standard hardware if needed.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  7.2 Materials &amp; manufacturing process
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  The holster is designed primarily for PP or ABS injection molding—tough enough for
                  impacts and abrasion, with decent chemical resistance to paints and adhesives. A
                  softer overmold can be introduced in future versions for grip or belt interface.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  7.3 Preliminary BOM &amp; costing
                </h3>

                <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-neutral-50">
                  <table className="min-w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200 bg-neutral-100">
                        <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                          ITEM
                        </th>
                        <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                          QTY
                        </th>
                        <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                          MATERIAL
                        </th>
                        <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                          PROCESS
                        </th>
                        <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                          EST. UNIT COST
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-200">
                        <td className="px-3 py-2 align-top">Holster body</td>
                        <td className="px-3 py-2 align-top">1</td>
                        <td className="px-3 py-2 align-top">PP / ABS</td>
                        <td className="px-3 py-2 align-top">Injection molding</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="px-3 py-2 align-top">Spindle + cap</td>
                        <td className="px-3 py-2 align-top">1 set</td>
                        <td className="px-3 py-2 align-top">PP / ABS</td>
                        <td className="px-3 py-2 align-top">Injection molding</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="px-3 py-2 align-top">Magnet insert</td>
                        <td className="px-3 py-2 align-top">1</td>
                        <td className="px-3 py-2 align-top">NdFeB + carrier</td>
                        <td className="px-3 py-2 align-top">Purchased / assembled</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="px-3 py-2 align-top">Cutting module</td>
                        <td className="px-3 py-2 align-top">1</td>
                        <td className="px-3 py-2 align-top">Steel / composite</td>
                        <td className="px-3 py-2 align-top">Purchased / stamped</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 align-top">Fasteners / inserts</td>
                        <td className="px-3 py-2 align-top">2–4</td>
                        <td className="px-3 py-2 align-top">Steel / brass</td>
                        <td className="px-3 py-2 align-top">Purchased</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[15px] leading-relaxed text-neutral-900 mt-2">
                  At a target retail of ~$25–$35, this BOM structure leaves room for retailer and
                  distributor margins while supporting a higher-end pro-focused SKU.
                </p>
              </div>
            </section>

            {/* ========================= TESTING & VALIDATION ========================= */}
            <section id="testing" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                08 — TESTING &amp; VALIDATION
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I tested tape access and comfort by wearing Tape Master through real painting and
                prep tasks—climbing ladders, bending, and working in tight corridors.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  <span className="font-semibold">Flow / speed:</span> time from “I need tape” to
                  “tape on surface” vs. a loose roll and vs. a basic plastic dispenser.
                </li>
                <li>
                  <span className="font-semibold">Comfort:</span> subjective ratings after hours of
                  wear, including interactions with harnesses and other belt tools.
                </li>
                <li>
                  <span className="font-semibold">Magnet docking:</span> how often docking was
                  actually used vs. just wearing it, and whether magnets interfered with other
                  gear.
                </li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                A key finding: after a short familiarization period, users stopped thinking about
                where the tape was—it was simply “always there” at the hip. That was the outcome I
                was aiming for.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/tape/testing-waist.jpg"
                    alt="Painter testing Tape Master on ladder"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 13
                    </span>{" "}
                    Ladder testing: reach, comfort, and snag behavior while moving quickly.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/tape/testing-chart.jpg"
                    alt="Simple chart comparing time-to-tape vs loose roll"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 14
                    </span>{" "}
                    Time-to-tape and perceived effort vs. a loose roll.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= ITERATIONS & FAILURES ========================= */}
            <section id="iterations" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                09 — ITERATIONS &amp; FAILURES
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                The “wrong turns” in this project pushed the design toward something genuinely
                usable.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-2">
                <li>
                  <span className="font-semibold">Iteration 1 — too tall holster:</span> dug into
                  the ribs when bending and snagged on ladder rails. I shortened and contoured the
                  body and added a small flare to ride over obstacles.
                </li>
                <li>
                  <span className="font-semibold">Iteration 2 — over-strong magnets:</span> stuck to
                  everything in the truck. I moved magnets further from the outer wall and reduced
                  strength to feel purposeful rather than aggressive.
                </li>
                <li>
                  <span className="font-semibold">Iteration 3 — free-spinning spindle:</span> tape
                  unwound too easily in motion. I added light friction and a small detent to keep
                  the roll in check between uses.
                </li>
              </ul>

              <div className="grid grid-cols-1 gap-4 mt-2">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/tape/iterations-lineup.jpg"
                    alt="Multiple Tape Master prototypes labeled v1 v2 v3"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 15
                    </span>{" "}
                    Prototype lineup: v1–v3, with major geometry and magnet changes called out.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= BUSINESS & ROADMAP ========================= */}
            <section id="business" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                10 — FROM PROTOTYPE TO PRODUCT LINE
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Tape Master is designed as a flagship in a broader ecosystem of ergonomic painter
                tools: brush holders, bucket attachments, roller extenders, and more. The same form
                language and mounting approaches can unify a family of tools for brands that want a
                recognizably “pro-first” line.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Refine DFM with a manufacturing partner and quote molds and assembly.</li>
                <li>Run detailed cost scenarios for 10k / 50k / 100k unit volumes.</li>
                <li>
                  Explore co-branded SKUs with tape manufacturers and paint retailers targeting
                  pros.
                </li>
                <li>
                  Build sell sheets and demo units for trade shows and in-store merchandising
                  tests.
                </li>
              </ul>
            </section>

            {/* ========================= REFLECTION ========================= */}
            <section id="reflection" className="scroll-mt-24 space-y-5 mt-12 mb-20">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                11 — REFLECTION
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                This project reminded me how much “small” frustrations add up on a jobsite. A tape
                roll that is always where you expect it to be may not sound glamorous, but it
                compounds into fewer dropped tools, fewer micro-breaks in focus, and less physical
                annoyance over the day.
              </p>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                If I had more time, I would push deeper into the cutting mechanism—comparing guarded
                blades, tooth profiles, and replaceable cartridges—then run more abusive drop and
                crush tests. More broadly, Tape Master helped me refine a repeatable pattern for
                designing hardware that respects the realities of the trades: observe, prototype
                early, live with the tool, and only then lock in the details.
              </p>
            </section>
          </div>
        </article>

        {/* Right-side timeline */}
        <div className="hidden xl:block px-6 py-12 mt-36">
          <GeoTimeline items={TIMELINE} />
        </div>
      </div>
    </section>
  );
}
