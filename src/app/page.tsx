// src/app/page.tsx
import Link from "next/link";
import NotebookNav from "@/components/NotebookNav";
import HeroReel from "@/components/HeroReel";

export default function Home() {
  const heroImages = [
    { src: "/hero/1a.png", alt: "Prototype & rig" },
    { src: "/hero/2a.jpg", alt: "CAD & enclosure" },
    { src: "/hero/3a.png", alt: "Electronics & test" },
  ];

  return (
    <section className="bg-white shadow-xxl">
      <div className=" mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr] ">
        <NotebookNav />

        <div className="min-h-[85svh]">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-12 py-16 lg:py-24">
            <div className="relative max-w-xl pl-6 sm:pl-8 mt-8">
              {/* notebook gutter */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px]"
              />
              <p className="text-sm font-medium text-black font-mono">Product Design &amp; Engineering</p>
              <h1 className="text-black mt-3 text-5xl sm:text-6xl font-extrabold tracking-tight">
                IMLP Studio
              </h1>
              

        
              <p className="mt-5 text-lg text-neutral-700">
                From ergonomics to electronics — concept → CAD → prototype → ship.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="inline-flex items-center rounded-xl px-5 py-3 bg-brand text-white bg-orange-300 shadow-soft hover:opacity-90"
                >
                  See Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl px-5 py-3 border bg-black hover:bg-neutral-50"
                >
                  Start a Project
                </Link>
              </div>
            </div>
 <div className="relative inline-block mt-12">
            
            <HeroReel images={heroImages} />  
  <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-10 w-10 rounded-tl-md border-t-2 border-l-2 border-black" />
<span className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-10 w-10 rounded-br-md border-b-2 border-r-2 border-black" />
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
