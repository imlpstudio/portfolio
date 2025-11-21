// src/app/(site)/work/_projects/chess-timer.tsx
import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";
import GeoTimeline from "@/components/GeoTimeline";

export const meta: Metadata = {
  title: "Chess Timer Desk Clock — Grind vs Distraction Tracker",
  description:
    "A physical desktop timer inspired by chess clocks that tracks how much time you spend grinding vs. getting distracted, built as an embedded system to make wasted time visible.",
  openGraph: { images: ["/covers/chess-timer.jpg"] },
};

const TIMELINE = [
  { id: "intro", label: "Hero / TL;DR" },
  { id: "snapshot", label: "Project Snapshot" },
  { id: "problem", label: "Problem & Context" },
  { id: "goals", label: "Design Goals" },
  { id: "interaction", label: "Interaction Model" },
  { id: "hardware", label: "Hardware Design" },
  { id: "firmware", label: "Firmware Logic" },
  { id: "enclosure", label: "Enclosure & CMF" },
  { id: "testing", label: "Testing & Behavior" },
  { id: "reflection", label: "Reflection" },
];

export default function ChessTimerPage() {
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
                Chess Timer Desk Clock — Grind vs Distraction Tracker
              </h1>
              <p className="text-neutral-700 -mt-4 italic text-[15px] leading-relaxed">
                A desktop timer inspired by chess clocks that splits your day into two honest
                buckets: <strong>grinding</strong> vs. <strong>distracting</strong>. One button
                flips into focus mode, the other into distraction mode, and the device quietly logs
                your time—no app, no dashboard, just a physical scoreboard for how you actually
                spend your day.
              </p>

              {/* Hero image with custom corner accents */}
              <div className="relative mt-8">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/hero.jpg"
                    alt="Chess Timer Desk Clock on a desk between laptop and notebook"
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
                    Embedded Systems
                    <br />
                    + Product Design
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    SCOPE
                  </p>
                  <p className="mt-1 text-neutral-900">
                    Interaction, electronics,
                    <br />
                    firmware, enclosure
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    TECH STACK
                  </p>
                  <p className="mt-1 text-neutral-900">
                    Small MCU, OLED / 7-seg,
                    <br />
                    buttons, buzzer, USB-C
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    TOOLS
                  </p>
                  <p className="mt-1 text-neutral-900">
                    KiCad, Fusion 360, FDM,
                    <br />
                    logic analyzer, DSO
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
                The Chess Timer Desk Clock is a physical productivity tool that makes your wasted
                time uncomfortably visible. Two sides, two buttons:
                <strong> GRIND</strong> and <strong>DISTRACT</strong>. Tapping either button flips
                the active timer, just like a chess clock, and the device tracks cumulative time
                spent in each mode over the day.
              </p>
              <p className="text-[15px] leading-relaxed text-neutral-900">
                <span className="font-semibold">Engineer side:</span> embedded architecture,
                low-power timing, input debouncing, non-volatile logging, and display driving.
                <br />
                <span className="font-semibold">Designer side:</span> interaction model that is
                satisfying enough to use but simple enough not to become another procrastination
                tool, plus a desk-friendly object language.
              </p>
            </section>

            <div className="my-10 h-px bg-neutral-200" />

            {/* ========================= PROBLEM & CONTEXT ========================= */}
            <section id="problem" className="scroll-mt-24 space-y-3">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                01 — PROBLEM &amp; CONTEXT
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Time-tracking apps exist, but they&apos;re usually:
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Hidden in a window or browser tab.</li>
                <li>Too detailed (tags, projects, notes) to use in the moment.</li>
                <li>On the same device that&apos;s distracting you in the first place.</li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I wanted something brutally simple for my desk: a chess-timer-like object with two
                big buttons, where I can’t ignore the display that says, “You&apos;ve been
                distracting yourself for 47 minutes.”
              </p>

              <div className="grid grid-cols-1 gap-4 mt-3">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/context-desk.jpg"
                    alt="Cluttered desk with laptop, phone, and distractions"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 1
                    </span>{" "}
                    Typical desk context: the same device you work on is the one distracting you.
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
                I translated the idea into a few sharp constraints:
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  <span className="font-semibold">Binary framing:</span> no complicated categories—only
                  GRIND vs DISTRACT.
                </li>
                <li>
                  <span className="font-semibold">Physical first:</span> must live on the desk as a
                  dedicated object, no phone required.
                </li>
                <li>
                  <span className="font-semibold">Low-friction interaction:</span> one tap to flip
                  modes, no menus.
                </li>
                <li>
                  <span className="font-semibold">Always visible:</span> aggregate time per side on
                  the display, readable from a normal sitting posture.
                </li>
                <li>
                  <span className="font-semibold">Reliable time base:</span> embedded timing robust
                  enough to feel trustworthy over hours.
                </li>
              </ul>
            </section>

            {/* ========================= INTERACTION MODEL ========================= */}
            <section id="interaction" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                03 — INTERACTION MODEL
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                The interaction is borrowed directly from chess clocks:
              </p>

              <ol className="list-decimal pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Press GRIND → grind timer starts, distraction timer pauses.</li>
                <li>Press DISTRACT → distraction timer starts, grind timer pauses.</li>
                <li>Long-press any button → daily totals reset (with confirmation cue).</li>
              </ol>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/storyboard-1.jpg"
                    alt="Storyboard of user flipping between grind and distraction modes"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 2
                    </span>{" "}
                    Storyboard: browsing → hit DISTRACT → back to work → hit GRIND.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/top-view-controls.jpg"
                    alt="Top view of chess timer desk clock controls"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 3
                    </span>{" "}
                    Top view: two large, tactile buttons with clear labels.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= HARDWARE DESIGN ========================= */}
            <section id="hardware" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                04 — HARDWARE DESIGN
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Internally, the device is a simple embedded system optimized for reliability and
                clarity, not feature creep.
              </p>

              <div className="grid grid-cols-1 gap-4 mt-3">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/block-diagram.jpg"
                    alt="Block diagram of chess timer embedded system"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 4
                    </span>{" "}
                    System block diagram: buttons → MCU → display + buzzer, powered via USB-C.
                  </figcaption>
                </figure>
              </div>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I chose a small low-power microcontroller with:
              </p>
              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Hardware timers for timekeeping.</li>
                <li>Sufficient GPIO for buttons + display + buzzer.</li>
                <li>Flash space to store daily aggregates or rolling logs.</li>
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/pcb-top.jpg"
                    alt="PCB layout top view of chess timer board"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 5
                    </span>{" "}
                    PCB layout: MCU, button footprints, display header, and buzzer.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/assembled-pcb.jpg"
                    alt="Assembled prototype PCB of chess timer"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 6
                    </span>{" "}
                    Assembled prototype ready for enclosure fit tests.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= FIRMWARE LOGIC ========================= */}
            <section id="firmware" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                05 — FIRMWARE &amp; STATE MACHINE
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Firmware is written in C/C++ and structured around a small state machine and a
                timer-driven update loop. Two accumulators track total grind and distraction
                seconds.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/state-machine.jpg"
                    alt="State machine diagram for grind vs distraction tracking"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 7
                    </span>{" "}
                    Firmware states: IDLE → GRIND_ACTIVE / DISTRACT_ACTIVE → RESET_CONFIRM.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/code-snippet.jpg"
                    alt="Code snippet for timer update loop and button handling"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 8
                    </span>{" "}
                    Code snippet: debounced button reads and per-second accumulator updates.
                  </figcaption>
                </figure>
              </div>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I added simple debouncing, long-press detection for reset, and a short beep pattern
                to confirm state changes without needing to look at the screen.
              </p>
            </section>

            {/* ========================= ENCLOSURE & CMF ========================= */}
            <section id="enclosure" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                06 — ENCLOSURE &amp; DESK PRESENCE
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Form-wise, I wanted a low, slightly angled block that reads like a small instrument
                on the desk, not a toy. The two buttons tilt toward the user, and the display is
                angled for legibility without forcing you to hunch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/enclosure-section.jpg"
                    alt="Section view of enclosure showing PCB and button mounts"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 9
                    </span>{" "}
                    Section view: PCB, standoffs, button travel, and display window.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/glam-render.jpg"
                    alt="Glamor render of chess timer desk clock on workspace"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 10
                    </span>{" "}
                    Final CMF: muted body color with high-contrast GRIND / DISTRACT labels.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= TESTING ========================= */}
            <section id="testing" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                07 — TESTING &amp; BEHAVIOR
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I tested the prototype in realistic sessions: coding, CAD, YouTube wormholes, and
                phone scrolling. The goal wasn&apos;t scientific accuracy—just consistent behavior
                and a brutally honest visual of where time went.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Compared timer drift against a known-good reference over multi-hour runs.</li>
                <li>Checked button feel and mis-press rate during fast “flip” actions.</li>
                <li>
                  Logged a few full days to see if the device changed my behavior (it did; it&apos;s
                  harder to justify distraction when the number stares back at you).
                </li>
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/testing-desk.jpg"
                    alt="Chess timer device on a real working desk during testing"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 11
                    </span>{" "}
                    In-use test: coding session with the timer running.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/chess-timer/chart-grind-vs-distract.jpg"
                    alt="Chart showing grind vs distraction minutes across a day"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 12
                    </span>{" "}
                    One-day log: hours of grind vs hours of distraction.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= REFLECTION ========================= */}
            <section id="reflection" className="scroll-mt-24 space-y-5 mt-12 mb-20">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                08 — REFLECTION
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                This project lives right where I like to design: simple embedded hardware with a
                strong interaction idea behind it. Building my own “chess clock for life” forced me
                to think through timing accuracy, debouncing, display ergonomics, and emotional
                impact all at once.
              </p>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                If I push this further, I&apos;d:
              </p>
              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Add optional BLE or USB logging for nerdier analytics.</li>
                <li>Fine-tune button springs and caps for more satisfying tactile feedback.</li>
                <li>Explore a family of modes (e.g., dual-pomodoro, solo focus, or habit tracking).</li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                For now, it&apos;s already doing its job: catching me when I drift—and proving that I
                can design, build, and ship a small, opinionated embedded product end-to-end.
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
