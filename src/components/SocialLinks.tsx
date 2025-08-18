"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { socials as rawSocials } from "@/data/social";

type IconName = keyof typeof Icons;
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type RawSocial = { label: string; href: string; icon: string };
type Social = { label: string; href: string; icon: IconName };

function isIconName(name: string): name is IconName {
  return name in Icons;
}

const links: Social[] = (rawSocials as ReadonlyArray<RawSocial>)
  .filter((s): s is RawSocial & { icon: IconName } => isIconName(s.icon))
  .map((s) => ({ label: s.label, href: s.href, icon: s.icon }));

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((s) => {
        const Icon = Icons[s.icon] as IconComponent;
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
