import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";
import GeoTimeline from "@/components/GeoTimeline";

export const meta: Metadata = {
  title: "Tibetan Smacker — Smart Tibetan Bowl Striker",
  description:
    "Ritual-first device that automates striking/spinning a Tibetan bowl—blending tradition with sensors, haptics, and simple UX.",
  openGraph: { images: ["/covers/tibetan-smacker.jpg"] },
};

const TIMELINE = [
  { id: "intro",             label: "Intro / Problem" },
  { id: "role",              label: "Role & Approach" },
  { id: "needfinding",       label: "Needfinding" },
  { id: "ideation",          label: "Ideation" },
  { id: "storyboarding",     label: "Storyboarding" },
  { id: "electronics",       label: "Electronics" },
  { id: "mechanical",        label: "Mechanical" },
  { id: "prototyping",       label: "Prototyping" },
  { id: "bom",               label: "BOM" },
  { id: "manufacturability", label: "Manufacturing" },
  { id: "reliability",       label: "Reliability" },
  { id: "business",          label: "Business" },
  { id: "outcomes",          label: "Outcomes" },
  { id: "next",              label: "Next Steps" },
];

export default function TibetanSmackerPage() {
  return (
    <section className="bg-white text-neutral-900">
      {/* 3 columns on large: left nav / content / right legend */}
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_280px]">
        <NotebookNav />

        <article className="py-12 lg:py-16 mt-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12">
            {/* Header */}
            <header id="intro" className="scroll-mt-24 space-y-4">
              <p className="text-sm text-neutral-500">2025-04-12</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Tibetan Smacker — Smart Tibetan Bowl Striker
              </h1>
              <p className="text-neutral-700 -mt-1 italic">
                Ancient ritual, modern consistency — calm on tap without screens or fuss.
              </p>

              {/* Hero with corner accents */}
              <div className="relative mt-8">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/smacker/hero.jpg"
                    alt="Smart striker prototype with Tibetan bowl"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <span className="pointer-events-none absolute -top-2 -left-2 h-12 w-12 rounded-tl-sm border-t-4 border-l-4 border-black" />
                <span className="pointer-events-none absolute -bottom-2 -right-2 h-12 w-12 rounded-br-sm border-b-4 border-r-4 border-black" />
              </div>
            </header>

            {/* ROLE */}
            <section id="role" className="scroll mt-8 space-y-2">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">ROLE</h2>
              <p className="text-[15px] leading-relaxed text-neutral-900">
                <strong>Needfinding</strong> → <strong>storyboards</strong> → <strong>electronics (ESP32)</strong> → <strong>mechanism</strong> → <strong>CAD/DFM</strong>.
              </p>
              <p className="text-xs text-neutral-600">
                Product Design / Engineering / CAD / Firmware / PM
              </p>
            </section>

            <div className="my-8 h-px bg-neutral-200" />

            {/* CONTENT */}
            <div className="space-y-16">
              {/* NEEDFINDING */}
              <section id="needfinding" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">NEEDFINDING</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  People want a <strong>sensory, ritual-based</strong> practice—without screens—yet struggle to keep it
                  consistent. Bowls sound beautiful, but require <em>technique</em> and <em>habit</em>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <figure className="relative">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-neutral-50 shadow-soft">
                      <img src="/projects/smacker/obs1.jpg" alt="User interviews & notes" className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    <figcaption className="px-2 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 1</span>{" "}
                      Interviews → desire for ritual & consistency.
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-neutral-50 shadow-soft">
                      <img src="/projects/smacker/obs2.jpg" alt="Bowl resonance mapping" className="absolute inset-0 h-full w-full object-cover" />
                    </div>
                    <figcaption className="px-2 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. 2</span>{" "}
                      Mapping attack/dwell/decay for tone repeatability.
                    </figcaption>
                  </figure>
                </div>
              </section>

              {/* IDEATION */}
              <section id="ideation" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">IDEATION</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Explored <strong>pendulum vs. rotary</strong> strikers, <strong>offset mass</strong> for effortless tone,
                  and a <strong>sensor/haptic pod</strong> for cadence guidance without screens.
                </p>

                {/* Triptych with corner accent on group */}
                <div className="relative mt-2">
                  <div className="rounded-2xl overflow-hidden bg-white shadow-soft">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                      {[
                        { src: "/projects/smacker/ideation1.jpg", cap: "Mechanism sketches" },
                        { src: "/projects/smacker/ideation2.jpg", cap: "Offset mass studies" },
                        { src: "/projects/smacker/ideation3.jpg", cap: "Sensor + haptics packaging" },
                      ].map((f, i) => (
                        <figure key={i} className="relative">
                          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                            <img src={f.src} alt={f.cap} className="absolute inset-0 h-full w-full object-cover" />
                          </div>
                          <figcaption className="px-3 py-2 text-xs text-neutral-600">
                            <span className="font-mono text-[10px] tracking-widest text-neutral-400">FIG. {i + 3}</span>{" "}
                            {f.cap}.
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                  <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-10 w-10 rounded-tl-md border-t-2 border-l-2 border-black" />
                </div>
              </section>

              {/* STORYBOARDING */}
              <section id="storyboarding" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">STORYBOARDING</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Set time → device strikes/spins → bowl sings → habit forms. Haptics cue cadence; LEDs confirm tone quality.
                </p>
                <figure className="relative">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-50 shadow-soft">
                    <img src="/projects/smacker/storyboard.jpg" alt="Ritual storyboard" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                </figure>
              </section>

              {/* ELECTRONICS */}
              <section id="electronics" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">ELECTRONICS</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  <strong>ESP32</strong> core; LiPo + TP4057 charging; motor/driver for strike/rotation; IMU + force sensing; BLE logging; haptics for feedback.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <img src="/projects/smacker/pcb.jpg" alt="PCB & wiring" className="w-full rounded-xl bg-neutral-50 shadow-soft" />
                  <img src="/projects/smacker/haptics.jpg" alt="Haptic driver tests" className="w-full rounded-xl bg-neutral-50 shadow-soft" />
                </div>
              </section>

              {/* MECHANICAL */}
              <section id="mechanical" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">MECHANICAL</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  Compact housing, striker arm geometry for clear attack; interchangeable tips (felt/wood) for tone tuning.
                </p>
                <img src="/projects/smacker/mech.jpg" alt="Mechanical assembly" className="w-full rounded-2xl bg-neutral-50 shadow-soft" />
              </section>

              {/* PROTOTYPING */}
              <section id="prototyping" className="scroll-mt-24 space-y-3">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">PROTOTYPING</h2>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  3D prints → bench rigs → bowl sessions. Iterated on striker velocity, noise, and resonance quality.
                </p>
                <img src="/projects/smacker/proto.jpg" alt="Prototype lineup" className="w-full rounded-2xl bg-neutral-50 shadow-soft" />
              </section>

              {/* BOM */}
              <section id="bom" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">BOM</h2>
                <p className="text-neutral-800">
                  ESP32, motor+gearbox, driver IC, LiPo (150–500 mAh), TP4057 charger, PLA housing, fasteners, striker tips.
                  <span className="font-medium"> Target:</span> &lt;$40 prototype / &lt;$20 scaled.
                </p>
              </section>

              {/* MANUFACTURABILITY */}
              <section id="manufacturability" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">MANUFACTURING</h2>
                <p className="text-neutral-800">
                  Snap-fit + minimal screws; off-the-shelf electronics; path to injection molding for enclosure.
                </p>
              </section>

              {/* RELIABILITY */}
              <section id="reliability" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">RELIABILITY</h2>
                <p className="text-neutral-800">
                  Motor life/battery cycles tested; enclosure designed for easy cell replacement and heat dissipation.
                </p>
              </section>

              {/* BUSINESS */}
              <section id="business" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">BUSINESS</h2>
                <p className="text-neutral-800">
                  <span className="font-medium">Segment:</span> wellness/meditation/yoga.{" "}
                  <span className="font-medium">Positioning:</span> “Ancient ritual, modern consistency.”{" "}
                  <span className="font-medium">GTM:</span> crowdfunding, studio partnerships, influencer storytelling.
                </p>
              </section>

              {/* OUTCOMES */}
              <section id="outcomes" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">OUTCOMES</h2>
                <p className="text-neutral-800">
                  Working prototype that reliably strikes/spins; balanced desirability with feasibility; clear path to a manufacturable unit.
                </p>
              </section>

              {/* NEXT STEPS */}
              <section id="next" className="scroll-mt-24 space-y-2">
                <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">NEXT STEPS</h2>
                <p className="text-neutral-800">
                  Quieter drive + smoother resonance; user testing for ritual adoption; crowdfunding kit with visuals, BOM, and plan.
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
