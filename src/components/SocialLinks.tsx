"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { socials as rawSocials } from "@/data/social";

type IconName = keyof typeof Icons;
type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Social = {
  label: string;
  href: string;
  icon: IconName; // must match a Lucide icon name (e.g., "Github", "Linkedin", "Mail")
};

const links: Social[] = (rawSocials as Array<{ label: string; href: string; icon: string }>)
  .map((s) => ({ label: s.label, href: s.href, icon: s.icon as IconName }))
  .filter((s) => s.icon in Icons);

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((s) => {
        const Icon = Icons[s.icon] as LucideIcon;
        return (
          <Link
            key={s.href}
            href={s.href}
            aria-label={s.label}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border hover:bg-neutral-50"
            target={s.href.startsWith("http") ? "_blank" : undefined}
          >
            <Icon className="h-4 w-4" />
          </Link>
        );
      })}
    </div>
  );
}
