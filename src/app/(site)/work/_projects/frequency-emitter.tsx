import type { Metadata } from "next";
import NotebookNav from "@/components/NotebookNav";

export const meta: Metadata = {
  title: "Bedside Frequency Emitter",
  description:
    "Bone-conduction sleep device with ESP32 control, safe power system, and enclosure.",
  openGraph: { images: ["/covers/frequency.jpg"] },
};

export default function FrequencyEmitterPage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr]">
        <NotebookNav />
        <article className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-12">
            <header className="relative pl-6 sm:pl-8">
              <span aria-hidden className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-neutral-200" />
              <p className="text-sm text-neutral-500">2025-06-26</p>
              <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Bedside Frequency Emitter
              </h1>
              <p className="mt-2 text-neutral-700">
                Bone-conduction device driven by ESP32 with tuned amplifier and safe power architecture.
              </p>
              <div className="relative mt-6 overflow-hidden rounded-2xl border bg-neutral-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/covers/frequency.jpg" alt="Frequency Emitter" className="w-full h-auto object-cover" />
              </div>
            </header>

            <section className="mt-10 space-y-6">
              <h2 className="text-xl font-semibold">Architecture</h2>
              <ul className="list-disc pl-5 text-neutral-700">
                <li>ESP32 control → class-D amp → bone transducer</li>
                <li>Isolated supply, thermal limits, safeties</li>
                <li>Serviceable enclosure with silicone interface</li>
              </ul>

              <h2 className="text-xl font-semibold">Result</h2>
              <p>Quiet bedside operation, safe thermals, and reproducible assembly.</p>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
