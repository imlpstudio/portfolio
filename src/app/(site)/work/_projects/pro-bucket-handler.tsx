// app/work/_projects/pro-bucket-handler.tsx
import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";
import GeoTimeline from "@/components/GeoTimeline";

export const meta: Metadata = {
  title: "Pro Bucket-Handler — Ergonomic Quart-Bucket Attachment for Pros",
  description:
    "Ergonomic, ladder-friendly attachment for quart-size paint buckets with magnetic brush and roller parking, designed for real jobsite use.",
  openGraph: { images: ["/covers/pro_bucket_handler.jpg"] },
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

export default function ProBucketHandlerPage() {
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
                Pro Bucket-Handler: Ergonomic Quart-Bucket Attachment for Pros
              </h1>
              <p className="text-neutral-700 -mt-4 italic text-[15px] leading-relaxed">
                An ergonomic, ladder-friendly attachment for quart-size paint buckets that
                magnetically parks your brush or roller, keeps paint cleaner, and reduces strain
                for painters working at height.
              </p>

              {/* Hero image with custom corner accents */}
              <div className="relative mt-8">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/pro_bucket/hero.jpg"
                    alt="Pro Bucket-Handler on a quart bucket mounted to a ladder"
                    className="absolute inset-0 h-full w-full object-cover"
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
                  <p className="mt-1 text-neutral-900">~3 weeks (concept → functional proto)</p>
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

            <div className="my-10 h-px bg-neutral-200" />

            {/* ========================= PROJECT SNAPSHOT ========================= */}
            <section id="snapshot" className="scroll-mt-24 space-y-3">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                PROJECT SNAPSHOT
              </h2>
              <p className="text-[15px] leading-relaxed text-neutral-900">
                I designed the Pro Bucket-Handler to solve a problem I grew up seeing on job sites:
                painters wrestling with small quart buckets while balancing on ladders. This
                attachment improves grip, stabilizes the bucket on ladders, and integrates magnets
                to hold brushes and mini-rollers. The project showcases my ability to move from
                field insights → ergonomic form development → mechanical details → manufacturable
                design with a preliminary BOM and cost targets suitable for retail brands like
                Sherwin-Williams or Home Depot.
              </p>
              <p className="text-[15px] leading-relaxed text-neutral-900">
                <span className="font-semibold">Design side:</span> CMF and form language, intuitive
                interaction on ladders, clean brand-ready visuals.
                <br />
                <span className="font-semibold">Engineering side:</span> structural design, magnet
                selection, clamp mechanism geometry, draft angles, and an early BOM/cost model for
                mass production.
              </p>
            </section>

            <div className="my-10 h-px bg-neutral-200" />

            {/* ========================= PROBLEM & CONTEXT ========================= */}
            <section id="problem" className="scroll-mt-24 space-y-3">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                01 — PROBLEM &amp; CONTEXT
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Painters often use quart buckets for cutting in edges and detail work on ladders.
                The stock metal wire handle is narrow, uncomfortable over long periods, and doesn’t
                stabilize well when hooked on a ladder.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Fatiguing, awkward grip on small, heavy quart buckets.</li>
                <li>No clean way to park a brush or small roller without dripping or contaminating.</li>
                <li>Buckets are unstable when balanced or loosely hooked on ladders.</li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                <span className="font-semibold">Users / stakeholders:</span> pro painters (all-day
                use), DIYers (safety and ease-of-use), and paint retailers looking for meaningful
                add-on accessories.
              </p>

              <p className="mt-2 text-[15px] leading-relaxed text-neutral-900">
                <span className="italic">
                  How might we turn a standard quart bucket into a safer, more ergonomic painting
                  tool without changing the bucket itself?
                </span>
              </p>

              <div className="grid grid-cols-1 gap-4 mt-4">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/pro_bucket/context-jobsite.jpg"
                    alt="Painter using a standard quart bucket on a ladder"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 1
                    </span>{" "}
                    Typical setup: narrow wire handle, awkward grip, bucket loosely hooked on a
                    ladder rung.
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
                I translated the field problems into a set of clear goals and engineering-style
                requirements.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  <span className="font-semibold">Ergonomics:</span> comfortable grip for long
                  sessions, compatible with different hand sizes and gloves.
                </li>
                <li>
                  <span className="font-semibold">Ladder integration:</span> secure attachment to
                  standard ladder rungs and rails without tools.
                </li>
                <li>
                  <span className="font-semibold">Brush / roller management:</span> integrated
                  magnets and geometry that let tools “snap” into place for quick, clean parking.
                </li>
                <li>
                  <span className="font-semibold">Compatibility:</span> works with off-the-shelf
                  quart buckets—no change to the bucket itself.
                </li>
                <li>
                  <span className="font-semibold">Durability &amp; cleanability:</span> survives
                  jobsite abuse and cleans easily.
                </li>
                <li>
                  <span className="font-semibold">Manufacturability:</span> simple part split,
                  minimal assembly, realistic unit cost for big-box retail.
                </li>
              </ul>

              <div className="mt-4 overflow-x-auto rounded-2xl border border-neutral-200 bg-neutral-50">
                <table className="min-w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-100">
                      <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                        REQUIREMENT
                      </th>
                      <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                        TARGET
                      </th>
                      <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                        RATIONALE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200">
                      <td className="px-3 py-2 align-top">Comfortable grip</td>
                      <td className="px-3 py-2 align-top">
                        Grip diameter in the 30–40 mm range, distributed contact area
                      </td>
                      <td className="px-3 py-2 align-top">Reduce contact pressure and hand strain.</td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="px-3 py-2 align-top">Ladder retention</td>
                      <td className="px-3 py-2 align-top">
                        Withstand lateral loads from a full quart + incidental bumps
                      </td>
                      <td className="px-3 py-2 align-top">
                        Prevent tipping or sliding when a painter shifts weight.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="px-3 py-2 align-top">Brush retention</td>
                      <td className="px-3 py-2 align-top">
                        Hold a loaded brush / mini roller without sliding over time
                      </td>
                      <td className="px-3 py-2 align-top">
                        Allow fast one-hand placement and removal without mess.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="px-3 py-2 align-top">Material</td>
                      <td className="px-3 py-2 align-top">
                        PP or ABS, paint- and solvent-resistant, recyclable
                      </td>
                      <td className="px-3 py-2 align-top">
                        Balance durability, cleanability, and cost.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 align-top">Target price</td>
                      <td className="px-3 py-2 align-top">
                        Retail-friendly price point with &gt;50% margin over unit cost
                      </td>
                      <td className="px-3 py-2 align-top">
                        Attractive to both paint retailers and pro-channel distributors.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========================= DISCOVER: RESEARCH ========================= */}
            <section id="discover" className="scroll-mt-24 space-y-3 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                03 — DISCOVER: FIELD INSIGHTS
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I grew up around painting job sites and used that lived experience as a starting
                point. For this project, I explicitly asked painters how they handle quart buckets
                on ladders and observed their setups.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Painters choke up on the wire handle or grip the bucket body itself.</li>
                <li>
                  Many jury-rig solutions: rags wrapped around handles, makeshift hooks, cheap
                  plastic clips.
                </li>
                <li>
                  No single product addresses grip comfort, ladder stability, and brush management
                  together.
                </li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Distilled user needs:
              </p>
              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  “I want something that feels solid and secure on the ladder, not like it&apos;s
                  going to tip.”
                </li>
                <li>“My hand shouldn’t hurt at the end of the day.”</li>
                <li>“I just want to park my brush fast without thinking.”</li>
              </ul>

              <div className="grid grid-cols-1 gap-4 mt-4">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/pro_bucket/research-annotated.jpg"
                    alt="Annotated photos of painters using quart buckets on ladders"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 2
                    </span>{" "}
                    Annotated observations: grip positions, ladder interface, and improvised
                    solutions.
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
                To keep the concept realistic for licensing and manufacturing, I explicitly defined
                constraints early:
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Must slip onto existing quart buckets—no special bucket tooling.</li>
                <li>Must interface with common ladder profiles (front step + side rail).</li>
                <li>
                  Must be manufacturable as 1–3 plastic parts plus magnets and potential fasteners.
                </li>
                <li>Assembly should be fast and tool-free at the factory.</li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I framed the work as a discover → define → develop → deliver loop, using prototypes
                to validate both ergonomic and engineering decisions along the way.
              </p>
            </section>

            {/* ========================= DEVELOP: CONCEPTS & PROTOS ========================= */}
            <section id="develop" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                05 — DEVELOP: CONCEPTS, SKETCHES &amp; UGLY PROTOTYPES
              </h2>

              {/* 5.1 Early Concept Sketches */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  5.1 Early concept sketches
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  I started with over a dozen quick layouts exploring how a painter’s hand approaches
                  the bucket when reaching around a ladder rail. I compared:
                </p>
                <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                  <li>Side-mounted vs. top-mounted handles.</li>
                  <li>Clamp-based vs. hook-based ladder interfaces.</li>
                  <li>Brush-only vs. brush + mini-roller parking.</li>
                </ul>

                <div className="grid grid-cols-1 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/pro_bucket/sketches-sheet.jpg"
                      alt="Page of rough Pro Bucket-Handler sketches"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 3
                      </span>{" "}
                      Early form and mechanism sketches with circled favorites and notes.
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* 5.2 First Functional Prototypes */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  5.2 First functional prototypes (the ugly ones)
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  I moved quickly into FDM prints—basic grips, ladder hooks, and magnet mounts—to
                  test how they felt in-hand and on an actual ladder.
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  <span className="font-semibold">Iteration 1 — rotating handle (fail):</span>{" "}
                  the first clip-on handle only grabbed a thin lip on the bucket. Under a half-full
                  load, it rotated and felt scary on a ladder. This led to a deeper wrap-around
                  engagement that indexed off two surfaces instead of one.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/pro_bucket/proto-early.jpg"
                      alt="Early 3D printed prototypes zip-tied to a bucket"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 4
                      </span>{" "}
                      Early clip-on concepts that rotated under load—useful failures.
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/pro_bucket/magnet-tests.jpg"
                      alt="Magnet test jigs for brush retention"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 5
                      </span>{" "}
                      Magnet retention tests: finding the sweet spot between secure and effortless.
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
                  I referenced hand breadth and power-grip diameter ranges (5th–95th percentile) to
                  tune the handle thickness and curvature. The goal was to keep contact pressure low
                  while avoiding a bulky, material-heavy part.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/pro_bucket/ergonomics-section.jpg"
                      alt="CAD section of hand around Pro Bucket-Handler grip"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 6
                      </span>{" "}
                      Grip section with hand overlay and annotated diameter range.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            {/* ========================= FINAL DESIGN ========================= */}
            <section id="final" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                06 — FINAL DESIGN: PRO BUCKET-HANDLER
              </h2>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  6.1 Overall form
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  The final design wraps around the bucket rim, integrates a sculpted ergonomic
                  handle, and extends into a ladder saddle and magnet pockets for tools.
                </p>

                <div className="relative mt-3">
                  <div className="rounded-2xl overflow-hidden bg-white shadow-soft">
                    <div className="grid grid-cols-1 gap-0">
                      <figure className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/projects/pro_bucket/hero-callouts.jpg"
                          alt="Hero render of Pro Bucket-Handler with callouts"
                          className="w-full h-full object-cover"
                        />
                        <figcaption className="px-3 py-2 text-xs text-neutral-600">
                          <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                            FIG. 7
                          </span>{" "}
                          Callouts: ergonomic grip, bucket clamp, ladder saddle, and magnet pocket.
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-10 w-10 rounded-tl-md border-t-2 border-l-2 border-black" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  6.2 Brush &amp; roller parking
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  The Pro Bucket-Handler uses a recessed magnet and shaped cradle. The brush ferrule
                  snaps to the magnet while the bristles rest against a ledge to avoid splaying. A
                  secondary curved saddle holds mini rollers, using gravity plus magnet retention.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/pro_bucket/brush-park.jpg"
                      alt="Brush parked on the Pro Bucket-Handler magnet cradle"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 8
                      </span>{" "}
                      Brush ferrule seated on the magnet, bristles supported without splaying.
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/pro_bucket/roller-park.jpg"
                      alt="Mini roller parked on the Pro Bucket-Handler"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 9
                      </span>{" "}
                      Mini roller saddle with magnet assist, tuned to avoid sticking too hard.
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  6.3 Ladder integration
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  The ladder interface is a U-shaped saddle that rests on the rung while a side arm
                  hugs the rail. This distributes load and keeps the bucket from swinging freely
                  when the painter shifts position.
                </p>

                <figure className="relative mt-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/pro_bucket/ladder-integration.jpg"
                    alt="Pro Bucket-Handler mounted to ladder rung with bucket"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 10
                    </span>{" "}
                    Ladder saddle geometry showing load paths and stabilized bucket position.
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
                  I organized the design into a main structural body, an optional soft-touch grip,
                  and magnet/fastener details that can be tuned for different SKUs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/pro_bucket/exploded-view.jpg"
                      alt="Exploded view of Pro Bucket-Handler components"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 11
                      </span>{" "}
                      Exploded view: main body, grip insert, magnets, optional fasteners.
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/pro_bucket/section-wallthickness.jpg"
                      alt="Section view showing wall thickness and ribbing"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 12
                      </span>{" "}
                      Section view: wall thickness, ribs, and draft angles for injection molding.
                    </figcaption>
                  </figure>
                </div>

                <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                  <li>Wall thickness tuned to avoid sink and keep weight reasonable.</li>
                  <li>Ribs placed to stiffen ladder and bucket interfaces without over-building.</li>
                  <li>Draft angles added to all faces expected for molded parts.</li>
                  <li>Bosses and snap features sized for common fastener options.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  7.2 Materials &amp; manufacturing process
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  I designed the part primarily for injection-molded PP or ABS—materials that can
                  handle paint, occasional solvents, and general jobsite abuse. A TPE or similar
                  elastomer overmold could be added to the grip region for a premium SKU.
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  The geometry is optimized for two main molded components plus press-fit magnets.
                  This keeps tooling simple, assembly time low, and part count minimal while still
                  leaving room for CMF customization.
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
                        <td className="px-3 py-2 align-top">Main body</td>
                        <td className="px-3 py-2 align-top">1</td>
                        <td className="px-3 py-2 align-top">PP / ABS</td>
                        <td className="px-3 py-2 align-top">Injection molding</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="px-3 py-2 align-top">Grip insert (optional)</td>
                        <td className="px-3 py-2 align-top">1</td>
                        <td className="px-3 py-2 align-top">TPE</td>
                        <td className="px-3 py-2 align-top">Overmold / secondary process</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="px-3 py-2 align-top">Magnet — brush</td>
                        <td className="px-3 py-2 align-top">1</td>
                        <td className="px-3 py-2 align-top">NdFeB</td>
                        <td className="px-3 py-2 align-top">Purchased component</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="px-3 py-2 align-top">Magnet — roller (optional)</td>
                        <td className="px-3 py-2 align-top">1</td>
                        <td className="px-3 py-2 align-top">NdFeB</td>
                        <td className="px-3 py-2 align-top">Purchased component</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 align-top">Fasteners / inserts (if used)</td>
                        <td className="px-3 py-2 align-top">2–4</td>
                        <td className="px-3 py-2 align-top">Steel / brass</td>
                        <td className="px-3 py-2 align-top">Purchased component</td>
                        <td className="px-3 py-2 align-top">$X.XX</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-[15px] leading-relaxed text-neutral-900 mt-2">
                  With a target retail price in the ~$15–$25 range, this structure leaves margin
                  for both paint retailers and pro-channel distributors while supporting future
                  premium versions.
                </p>
              </div>
            </section>

            {/* ========================= TESTING & VALIDATION ========================= */}
            <section id="testing" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                08 — TESTING &amp; VALIDATION
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I ran informal but focused tests around three axes: grip comfort, ladder stability,
                and magnet retention.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  <span className="font-semibold">Grip comfort:</span> painters held a full quart on
                  a ladder using the stock wire handle vs. the Pro Bucket-Handler and rated comfort
                  and perceived security.
                </li>
                <li>
                  <span className="font-semibold">Ladder stability:</span> static load tests with
                  side pulls to simulate bumps, checking for tipping or sliding behavior.
                </li>
                <li>
                  <span className="font-semibold">Magnet retention:</span> checking minimum force to
                  detach brushes and mini rollers and watching for slow sliding over time.
                </li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                During testing, one painter instinctively reached for the new handle instead of the
                wire one after only a few minutes. That confirmed the grip intuitiveness and showed
                that the design matched their natural hand movement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/pro_bucket/testing-ladder.jpg"
                    alt="Painter testing Pro Bucket-Handler on ladder"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 13
                    </span>{" "}
                    On-ladder testing: comfort, stability, and reach while cutting in.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/pro_bucket/testing-chart.jpg"
                    alt="Simple chart comparing comfort ratings vs stock handle"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 14
                    </span>{" "}
                    Comfort and perceived security vs. stock wire handle (informal ratings).
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
                I deliberately kept and documented the versions that failed, because they drove key
                changes in the design.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-2">
                <li>
                  <span className="font-semibold">Iteration 1 — thin clip:</span> rotated and flexed
                  on the bucket rim under load. I widened the contact area and added a secondary
                  indexing surface to lock orientation.
                </li>
                <li>
                  <span className="font-semibold">Iteration 2 — over-strong magnet:</span> the brush
                  stuck too hard and sometimes splashed when pulled off. I reduced magnet strength
                  and added a small mechanical notch to guide the ferrule.
                </li>
                <li>
                  <span className="font-semibold">Iteration 3 — ladder hook width:</span> fit one
                  ladder model perfectly, but not others. I created a slightly flared U-profile and
                  compliant ribbing to accommodate variation between ladders.
                </li>
              </ul>

              <div className="grid grid-cols-1 gap-4 mt-2">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/pro_bucket/iterations-lineup.jpg"
                    alt="Multiple Pro Bucket-Handler prototypes labeled v1 v2 v3"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 15
                    </span>{" "}
                    Prototype lineup: v1–v3, with the major geometry changes called out.
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
                The Pro Bucket-Handler is designed as a hero product in a broader family of
                ergonomic painter tools (brush attachments, tape holders, roller extensions). The
                same design language can extend across a complete system of jobsite helpers.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Refine DFM with a manufacturing partner and quote tooling.</li>
                <li>Run detailed cost analysis at volume (10k / 50k / 100k units).</li>
                <li>
                  Explore co-branding and licensing opportunities with paint manufacturers and
                  pro-focused brands.
                </li>
                <li>
                  Build a sell sheet and demo kit for trade shows and in-store retail pilots.
                </li>
              </ul>
            </section>

            {/* ========================= REFLECTION ========================= */}
            <section id="reflection" className="scroll-mt-24 space-y-5 mt-12 mb-20">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                11 — REFLECTION
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                This project reinforced my belief that great tools have to respect the messy reality
                of the jobsite: paint drips, gloves, ladder wobble, and fatigue over a long day. It
                also reminded me how much value there is in listening carefully to experienced pros
                and then translating their quick comments into hard requirements.
              </p>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                If I had another couple of weeks, I&apos;d iterate on an integrated brush-wiping
                feature, design a version that works with 1-gallon cans, and run more formal drop
                and abuse tests. More broadly, this project gave me a repeatable framework for
                moving from field observation → ergonomic exploration → manufacturable hardware that
                I plan to apply to future painter-focused tools.
              </p>
            </section>
          </div>
        </article>

        {/* Right side timeline */}
        <div className="hidden xl:block px-6 py-12 mt-36">
          <GeoTimeline items={TIMELINE} />
        </div>
      </div>
    </section>
  );
}
