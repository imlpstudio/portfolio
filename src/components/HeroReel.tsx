"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt?: string };

// Default to your files in /public/hero
const DEFAULT_IMAGES: Slide[] = [
  { src: "/hero/1a.png", alt: "Prototype & rig" },
  { src: "/hero/2a.png", alt: "CAD & enclosure" },
  { src: "/hero/3a.png", alt: "Electronics & test" },
];

export default function HeroReel({
  images = DEFAULT_IMAGES,
  intervalMs = 3500,
}: {
  images?: Slide[];
  intervalMs?: number;
}) {
  const [i, setI] = useState(0);
  const total = images.length;

  useEffect(() => {
    if (total < 2) return;
    const id = setInterval(() => setI((p) => (p + 1) % total), intervalMs);
    return () => clearInterval(id);
  }, [total, intervalMs]);

  if (total === 0) {
    return (
      <div className="relative h-[420px] w-full rounded-2xl border bg-gradient-to-br from-neutral-50 to-neutral-100" />
    );
  }

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border bg-white shadow-soft">
      {images.map((img, idx) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt ?? ""}
            fill
            priority={idx === 0}
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full border bg-white/70 backdrop-blur ${
              idx === i ? "border-brand" : "border-neutral-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
