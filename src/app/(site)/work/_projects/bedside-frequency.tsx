// app/work/_projects/bedside-frequency.tsx
import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";
import GeoTimeline from "@/components/GeoTimeline";

export const meta: Metadata = {
  title: "Bedside Frequency — Embedded Frequency Emitter for Nighttime Rituals",
  description:
    "An embedded, microcontroller-driven bedside device that generates configurable audio frequencies for nighttime rituals, designed end-to-end from firmware to enclosure.",
  openGraph: { images: ["/covers/bedside-frequency.jpg"] },
};

const TIMELINE = [
  { id: "intro", label: "Hero / TL;DR" },
  { id: "snapshot", label: "Project Snapshot" },
  { id: "problem", label: "Problem & Context" },
  { id: "goals", label: "Design Goals" },
  { id: "system", label: "System Architecture" },
  { id: "hardware", label: "Hardware Design" },
  { id: "firmware", label: "Firmware & UX Logic" },
  { id: "enclosure", label: "Enclosure & Integration" },
  { id: "testing", label: "Testing & Verification" },
  { id: "manufacturing", label: "DFM & BOM" },
  { id: "reflection", label: "Reflection" },
];

export default function BedsideFrequencyPage() {
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
                Bedside Frequency — Embedded Frequency Emitter for Nighttime Rituals
              </h1>
              <p className="text-neutral-700 -mt-4 italic text-[15px] leading-relaxed">
                A microcontroller-based bedside device that generates tunable audio frequencies for
                people who use sound in their nightly rituals—designed end-to-end from firmware
                state machine and signal chain to enclosure and UX.
              </p>

              {/* Hero image with custom corner accents */}
              <div className="relative mt-8">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-neutral-50 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/bedside-frequency/hero.jpg"
                    alt="Bedside Frequency device glowing softly on a nightstand"
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
                    Hardware / Firmware Engineer
                    <br />
                    + Product Designer
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    SCOPE
                  </p>
                  <p className="mt-1 text-neutral-900">
                    Architecture, schematic,
                    <br />
                    PCB, firmware, enclosure
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    TECH STACK
                  </p>
                  <p className="mt-1 text-neutral-900">
                    ESP32-class MCU, DAC / PWM,
                    <br />
                    Class-D amp, Li-ion power
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                    TOOLS
                  </p>
                  <p className="mt-1 text-neutral-900">
                    KiCad / Altium-style CAD,
                    <br />
                    Fusion 360, DSO, audio
                    <br />
                    measurement tools
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
                Bedside Frequency is a small embedded system that sits on a nightstand and outputs
                configurable audio tones and sweeps. It&apos;s designed for people who already use
                sound and frequency-based rituals—sound baths, “healing” tones, meditative drones—
                and want a dedicated, phone-free device.
              </p>
              <p className="text-[15px] leading-relaxed text-neutral-900">
                <span className="font-semibold">Engineering side:</span> system architecture,
                microcontroller selection, digital signal generation (DAC/PWM), analog filtering,
                audio amplification, power management, EMI/layout considerations, and firmware state
                machine.
                <br />
                <span className="font-semibold">Design side:</span> calm industrial design, haptic
                button layout, and a light language that communicates state without turning the
                bedroom into a screen.
              </p>
              <p className="text-[13px] leading-relaxed text-neutral-700">
                The device does not make medical claims; it&apos;s explicitly positioned as a tool
                for personal rituals for users who already believe in music / frequency healing.
              </p>
            </section>

            <div className="my-10 h-px bg-neutral-200" />

            {/* ========================= PROBLEM & CONTEXT ========================= */}
            <section id="problem" className="scroll-mt-24 space-y-3">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                01 — PROBLEM &amp; CONTEXT
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Most people who experiment with specific frequencies at night rely on general-purpose
                hardware: phones, laptops, or Bluetooth speakers. For an engineer, that translates
                to:
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Uncontrolled signal chain (compression, EQ, device-specific coloration).</li>
                <li>
                  Poor UX: app friction, notifications, blue light, and unreliable volume / routing.
                </li>
                <li>
                  No guarantee the device can accurately reproduce the requested frequency range,
                  especially at low volumes.
                </li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I wanted to design a self-contained embedded system where I control the entire path
                from digital frequency generation all the way to the acoustic output—and package it
                in a form factor that belongs in a bedroom, not a lab.
              </p>
            </section>

            {/* ========================= DESIGN GOALS ========================= */}
            <section id="goals" className="scroll-mt-24 space-y-3 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                02 — DESIGN GOALS
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I translated the high-level idea into concrete engineering requirements:
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  <span className="font-semibold">Signal fidelity:</span> generate stable tones in a
                  defined range (e.g. ~100–2000 Hz) with controllable amplitude and minimal audible
                  artifacts.
                </li>
                <li>
                  <span className="font-semibold">Embedded-first:</span> no dependency on phone or
                  cloud; firmware handles UI, presets, timing, and safety limits.
                </li>
                <li>
                  <span className="font-semibold">Safe, quiet power:</span> battery-friendly design
                  with protected Li-ion charging or low-voltage external adapter, low noise on the
                  audio rail.
                </li>
                <li>
                  <span className="font-semibold">Night-optimized UX:</span> controls usable
                  eyes-closed; no boomy clicks or pops when starting / stopping.
                </li>
                <li>
                  <span className="font-semibold">Manufacturable:</span> single main board +
                  daughtercard or LED ring, realistic BOM for a consumer wellness device.
                </li>
              </ul>
            </section>

            {/* ========================= SYSTEM ARCHITECTURE ========================= */}
            <section id="system" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                03 — SYSTEM ARCHITECTURE
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I started by sketching a block diagram of the full system, identifying interfaces,
                noise-sensitive nodes, and potential upgrade paths (e.g. BLE, richer presets).
              </p>

              <div className="grid grid-cols-1 gap-4 mt-3">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/bedside-frequency/block-diagram.jpg"
                    alt="High-level block diagram of Bedside Frequency system architecture"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 1
                    </span>{" "}
                    System architecture: MCU → DAC/PWM → filter → Class-D amp → driver, plus power
                    and LED ring.
                  </figcaption>
                </figure>
              </div>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>ESP32-class MCU chosen for timer peripherals, DAC / PWM, and future BLE option.</li>
                <li>Audio path separated logically (and physically on PCB) from digital switching.</li>
                <li>
                  LED ring and buttons share a low-noise logic rail to avoid injecting artifacts into
                  the audio path.
                </li>
              </ul>
            </section>

            {/* ========================= HARDWARE DESIGN ========================= */}
            <section id="hardware" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                04 — HARDWARE DESIGN
              </h2>

              {/* 4.1 Signal generation & analog path */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  4.1 Signal generation &amp; analog path
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  I explored two approaches for generating the audio signal:
                  <span className="font-semibold"> direct DAC output</span> vs.{" "}
                  <span className="font-semibold">high-frequency PWM + low-pass filter</span>. For
                  the prototype, PWM offered simpler component count and flexibility.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/bedside-frequency/schematic-audio.jpg"
                      alt="Schematic of audio PWM filter and amplifier section"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 2
                      </span>{" "}
                      Audio section schematic: PWM low-pass filter into Class-D amplifier.
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/bedside-frequency/scope-waveforms.jpg"
                      alt="Scope capture of PWM and filtered sine wave"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 3
                      </span>{" "}
                      Scope: high-frequency PWM vs. filtered audio output at ~528 Hz.
                    </figcaption>
                  </figure>
                </div>

                <p className="text-[15px] leading-relaxed text-neutral-900">
                  I tuned the RC filter values to balance rise time and attenuation of the PWM
                  carrier while keeping components small and inexpensive. The output feeds a small
                  Class-D amplifier driving either a full-range driver or bone-conduction
                  transducer.
                </p>
              </div>

              {/* 4.2 Power & battery management */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  4.2 Power &amp; battery management
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  For bedside use, I wanted the option to run from a small Li-ion pack or stay
                  plugged into a 5V adapter. I used a typical single-cell charging IC with
                  protection and a buck converter to generate a clean 3.3 V rail for digital logic
                  and LED control.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/bedside-frequency/schematic-power.jpg"
                      alt="Schematic of power and charging circuitry"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 4
                      </span>{" "}
                      Power path: USB-C / 5V input, Li-ion charger, protected cell, buck regulator.
                    </figcaption>
                  </figure>
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/bedside-frequency/thermal-test.jpg"
                      alt="Thermal camera image during worst-case charging and playback"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 5
                      </span>{" "}
                      Thermal snapshot under worst-case audio output + charging.
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* 4.3 PCB layout */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide text-neutral-900">
                  4.3 PCB layout &amp; noise control
                </h3>
                <p className="text-[15px] leading-relaxed text-neutral-900">
                  I routed the board with a clear separation between noisy switching domains,
                  analog-ish audio, and the LED driver. Ground was treated as a single plane with
                  star-ish returns from the amp, avoiding large current loops under sensitive
                  traces.
                </p>

                <div className="grid grid-cols-1 gap-4 mt-2">
                  <figure className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/bedside-frequency/pcb-top.jpg"
                      alt="Top-layer PCB layout for Bedside Frequency board"
                      className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                    />
                    <figcaption className="px-3 py-2 text-xs text-neutral-600">
                      <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                        FIG. 6
                      </span>{" "}
                      PCB top layer: component placement emphasizes short audio paths and clean
                      routing.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>

            {/* ========================= FIRMWARE & UX LOGIC ========================= */}
            <section id="firmware" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                05 — FIRMWARE &amp; UX LOGIC
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Firmware is written in C/C++ and organized around a simple state machine:
                <span className="font-semibold"> IDLE → ARMED → PLAYING → FADE_OUT → SLEEP</span>.
                The device wakes, plays a timed session, and gracefully ramps down to avoid pops.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/bedside-frequency/state-machine.jpg"
                    alt="State machine diagram for firmware flow"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 7
                    </span>{" "}
                    Firmware state machine governing sessions, buttons, and LED feedback.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/bedside-frequency/code-snippet.jpg"
                    alt="Firmware code snippet showing timer-based frequency update"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 8
                    </span>{" "}
                    Timer ISR and lookup-based waveform generation for specific frequencies.
                  </figcaption>
                </figure>
              </div>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Frequencies are generated from precomputed sine tables and timer-driven updates,
                with amplitude envelopes applied to avoid abrupt edges. The firmware also enforces
                maximum on-time and safe volume limits.
              </p>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Controls map to:
              </p>
              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>Main button: start / stop session, long-press for power-off.</li>
                <li>
                  Frequency rocker: cycles through curated frequency “bands” (low / mid / higher).
                </li>
                <li>Volume control: adjusts output within safe bounds, persisted in flash.</li>
              </ul>
            </section>

            {/* ========================= ENCLOSURE & INTEGRATION ========================= */}
            <section id="enclosure" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                06 — ENCLOSURE &amp; MECH INTEGRATION
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Mechanically, the design had to balance acoustics, heat, and bedside aesthetics. I
                modeled the enclosure in Fusion 360 and treated the internal cavity as both a
                structural volume and an acoustic element.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/bedside-frequency/enclosure-section.jpg"
                    alt="Section view of enclosure showing driver cavity and PCB mounting"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 9
                    </span>{" "}
                    Section view: driver cavity, light ring, board stack, and cable routing.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/bedside-frequency/glam-render.jpg"
                    alt="Glamour render of Bedside Frequency on a nightstand"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 10
                    </span>{" "}
                    Final CMF direction: soft geometry with minimal visible “tech.”
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= TESTING & VERIFICATION ========================= */}
            <section id="testing" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                07 — TESTING &amp; VERIFICATION
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                I approached testing from both an EE perspective and a user-in-context perspective.
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  <span className="font-semibold">Frequency accuracy:</span> measured output using
                  audio tools and scope FFT to confirm target frequencies across the range.
                </li>
                <li>
                  <span className="font-semibold">Noise &amp; artifacts:</span> checked for PWM
                  bleed-through, startup pops, and LED-induced noise on the audio path.
                </li>
                <li>
                  <span className="font-semibold">Battery life &amp; thermals:</span> worst-case
                  playtime at max volume and temperature rise at the hottest components.
                </li>
                <li>
                  <span className="font-semibold">UX tests:</span> number of steps from “in bed” to
                  “session running,” and whether users could operate the device eyes-closed.
                </li>
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/bedside-frequency/fft-plot.jpg"
                    alt="FFT plot of audio output showing main tone and harmonics"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 11
                    </span>{" "}
                    FFT of output: dominant tone with controlled harmonics and noise floor.
                  </figcaption>
                </figure>
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/bedside-frequency/bedside-test.jpg"
                    alt="User testing Bedside Frequency in a real bedroom setup"
                    className="w-full h-full object-cover rounded-xl bg-neutral-50 shadow-soft"
                  />
                  <figcaption className="px-3 py-2 text-xs text-neutral-600">
                    <span className="font-mono text-[10px] tracking-widest text-neutral-400">
                      FIG. 12
                    </span>{" "}
                    In-situ testing: device in real bedroom conditions to validate usability and
                    loudness.
                  </figcaption>
                </figure>
              </div>
            </section>

            {/* ========================= DFM & BOM ========================= */}
            <section id="manufacturing" className="scroll-mt-24 space-y-5 mt-12">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                08 — DFM &amp; BOM THINKING
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Although this is an early-stage prototype, I designed it with eventual
                manufacturability in mind: single main board, minimal connectors, and an enclosure
                that can be molded without exotic tooling.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-neutral-50">
                <table className="min-w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-100">
                      <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                        SUBSYSTEM
                      </th>
                      <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                        KEY PARTS
                      </th>
                      <th className="px-3 py-2 font-mono text-[10px] tracking-[0.2em] text-neutral-500">
                        NOTES
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200">
                      <td className="px-3 py-2 align-top">MCU &amp; logic</td>
                      <td className="px-3 py-2 align-top">
                        ESP32-class microcontroller, crystal, passives
                      </td>
                      <td className="px-3 py-2 align-top">
                        Headroom for BLE / richer presets in future SKUs.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="px-3 py-2 align-top">Audio path</td>
                      <td className="px-3 py-2 align-top">
                        Class-D amp, LC/RC filter, driver / transducer
                      </td>
                      <td className="px-3 py-2 align-top">
                        Tuned for low-volume bedside use; easily adjustable via BOM.
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200">
                      <td className="px-3 py-2 align-top">Power</td>
                      <td className="px-3 py-2 align-top">
                        Li-ion cell, charger IC, buck regulator, USB-C connector
                      </td>
                      <td className="px-3 py-2 align-top">
                        Can be simplified to wall-powered only for cost reduction.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 align-top">Enclosure &amp; UX</td>
                      <td className="px-3 py-2 align-top">
                        ABS / PC-ABS housing, LED ring, silicone feet, mechanical buttons
                      </td>
                      <td className="px-3 py-2 align-top">
                        Designed for 2-part mold with straightforward assembly steps.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ========================= REFLECTION ========================= */}
            <section id="reflection" className="scroll-mt-24 space-y-5 mt-12 mb-20">
              <h2 className="font-mono text-[14px] tracking-[0.2em] text-red-400">
                09 — REFLECTION
              </h2>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Bedside Frequency was a chance to own the full embedded stack on a product that
                still feels emotionally driven. I had to move fluidly between schematic capture,
                layout, firmware, acoustic prototyping, and CMF decisions.
              </p>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                If I extend this project, I want to:
              </p>

              <ul className="list-disc pl-5 text-[15px] leading-relaxed text-neutral-900 space-y-1">
                <li>
                  Explore a pure bone-conduction variant for ultra-local sound with even less room
                  leakage.
                </li>
                <li>
                  Design a second-board spin optimized for EMC pre-compliance and manufacturability.
                </li>
                <li>
                  Build a small test harness to automatically sweep the frequency range and log
                  output stability across units.
                </li>
              </ul>

              <p className="text-[15px] leading-relaxed text-neutral-900">
                Overall, this project showcases not just that I care about sound and ritual, but
                that I can architect, build, and debug a complete embedded audio product from first
                block diagram to functioning prototype.
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
