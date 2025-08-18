// src/components/GeoTimeline.tsx
"use client";

import { useEffect, useState } from "react";

type Item = {
  id: string;    // section element id on the page
  label: string; // visible label
};

export default function GeoTimeline({
  items,
  offset = 96, // header offset for smooth-scroll landings
}: {
  items: Item[];
  offset?: number;
}) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (!items.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [items, offset]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <aside className="hidden xl:block sticky top-24 h-[calc(100svh-6rem)]">
      <div className="relative pl-6 pr-2 h-full">
        {/* black vertical line */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-2 top-0 bottom-0 w-px"
        />

        <ul className="select-none text-sm space-y-4">
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <li key={it.id}>
                <button
                  onClick={() => go(it.id)}
                  aria-current={isActive ? "true" : "false"}
                  className={[
                    "mt-2 block text-left pl-5 transition hover:underline focus:outline-none",
                    isActive ? "font-medium text-red-600" : "text-neutral-600 hover:text-neutral-800",
                  ].join(" ")}
                >
                  {it.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
