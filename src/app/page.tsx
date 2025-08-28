import Link from "next/link";
import NotebookNav from "@/components/NotebookNav";
import HeroReel from "@/components/HeroReel";

export default function Home() {
  const heroImages = [
    { src: "/hero/1a.png", alt: "Prototype & rig" },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr]">
        <NotebookNav />

        <div className="min-h-[75svh]">
          <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-12 py-12 sm:py-16 lg:py-24">
            <div className="relative max-w-xl pl-0 sm:pl-8 mt-4 sm:mt-8 text-neutral-900">
              {/* notebook gutter (hide on mobile) */}
              <span aria-hidden className="hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 w-[3px]" />
              <p className="text-xs sm:text-sm font-mono text-neutral-900/80">
                Product Design &amp; Engineering
              </p>
              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                IMLP Studio
              </h1>
              <p className="mt-4 text-base sm:text-lg text-neutral-800">
  <strong>Sketches into systems</strong> — ft. ergonomic tools, 
  sound-driven devices, and connected prototypes that go beyond the screen. 
  Grounded in industrial design and engineering. 
</p>


              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="inline-flex items-center rounded-xl px-5 py-3 bg-neutral-900 text-white shadow-soft hover:opacity-90"
                >
                  See Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl px-5 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-50"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            {/* hero media */}
            {/* <div className="relative mt-8 lg:mt-0">
              <HeroReel images={heroImages} />
              <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-10 w-10 rounded-tl-md border-t-2 border-l-2 border-black" />
              <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-10 w-10 rounded-br-md border-b-2 border-r-2 border-black" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
