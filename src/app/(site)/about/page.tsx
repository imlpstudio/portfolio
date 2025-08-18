import Link from "next/link";
import NotebookNav from "@/components/NotebookNav";
import MeReel from "@/components/MeReel";

export default function AboutPage() {
  // Make sure these filenames match case exactly in /public (Vercel is case-sensitive).
  const meImages = [
    { src: "/picsme/me1.JPG",  alt: "Hands-on prototyping in the workshop" },
    { src: "/picsme/me2.jpeg", alt: "CAD and enclosure iteration" }, // change to .JPEG if that's your real extension
    { src: "/picsme/me3.png",  alt: "Electronics bring-up and test" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr]">
        <NotebookNav />

        <div className="min-h-[75svh]">
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-12 py-12 sm:py-16 lg:py-24 mt-12">
            {/* Copy */}
            <div className="relative max-w-xl pl-0 sm:pl-8 text-neutral-900">
              {/* notebook gutter (hide on mobile) */}
              <span
                aria-hidden
                className="hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 w-[3px]"
              />
              <p className="text-xs sm:text-sm font-mono text-neutral-900/80">
                B.S. Product Design &amp; Engineering
              </p>
              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight">
                About Me
              </h1>
              {/* Approach (short + concrete) */}
              <div className="mt-5 space-y-2 text-[15px]">
                <p className="text-neutral-900">
                  <span className="font-semibold">Approach:</span> observe the job, model the motion, prototype fast,
                  and simplify until the tool “disappears” in use.
                </p>
                <p className="text-neutral-700">
                  First principles over bells-and-whistles. Evidence over ego. Ship, learn, iterate.
                </p>
              </div>

              {/* Toolbox chips */}
              <div className="mt-5 flex flex-wrap gap-2 text-[12px]">
                {[
                  "Needfinding",
                  "Ergonomics",
                  "CAD",
                  "Prototyping",
                  "DFM",
                  "ESP32 / Firmware",
                  "Testing",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-neutral-100 px-2 py-1 text-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Media with custom corner accents */}
            <div className="relative mt-8 lg:mt-0">
              <MeReel images={meImages} heightClass="h-[340px] sm:h-[420px] lg:h-[480px]" />
              <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-10 w-10 rounded-tl-md border-t-2 border-l-2 border-black" />
              <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-10 w-10 rounded-br-md border-b-2 border-r-2 border-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
