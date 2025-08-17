"use client";
import { socials } from "@/data/social";
import * as Icons from "lucide-react";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map((s) => {
        const Icon = (Icons as any)[s.icon] || Icons.Link;
        return (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-black transition"
            aria-label={s.label}
            title={s.label}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
