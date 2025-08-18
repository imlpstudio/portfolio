"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt?: string };

const DEFAULT_IMAGES: Slide[] = [
  { src: "/picsme/me1.JPG",  alt: "Prototype & rig" },
  { src: "/picsme/me2.jpeg", alt: "CAD & enclosure" },
  { src: "/picsme/me3.png",  alt: "Electronics & test" },
];

export default function MeReel({
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
    <div className="relative h-[300px] w-full overflow-hidden rounded-2xl border bg-white shadow-soft">
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
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === i}
            className={`h-2.5 w-2.5 rounded-full border transition ${
              idx === i
                ? "bg-neutral-900 border-neutral-900"
                : "bg-white/70 border-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
