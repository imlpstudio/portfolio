import Link from "next/link";
import * as Icons from "lucide-react";
import { socials as rawSocials } from "@/data/social";

type IconName = keyof typeof Icons;
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type RawSocial = Readonly<{ label: string; href: string; icon: string }>;
type Social = Readonly<{ label: string; href: string; icon: IconName }>;

function normalizeIconName(name: string): IconName | null {
  const map: Record<string, IconName> = {
    github: "Github",
    linkedin: "Linkedin",
    mail: "Mail",
    email: "Mail",
    twitter: "Twitter",
    x: "Twitter",
    globe: "Globe",
    website: "Globe",
    instagram: "Instagram",
    youtube: "Youtube",
  };
  const guessed = map[name.toLowerCase()] ?? (name.charAt(0).toUpperCase() + name.slice(1));
  return guessed in Icons ? (guessed as IconName) : null;
}

function toSocials(input: unknown): Social[] {
  if (!Array.isArray(input)) return [];
  const out: Social[] = [];
  for (const item of input) {
    const it = item as Partial<RawSocial>;
    if (typeof it?.label !== "string" || typeof it?.href !== "string" || typeof it?.icon !== "string") continue;
    const icon = normalizeIconName(it.icon);
    if (!icon) continue;
    out.push({ label: it.label, href: it.href, icon });
  }
  return out;
}

const links = toSocials(rawSocials);

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((s) => {
        const Icon = Icons[s.icon] as IconComponent;
        const external = /^https?:\/\//i.test(s.href);
        return (
          <Link
            key={s.href}
            href={s.href}
            aria-label={s.label}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border hover:bg-neutral-50"
          >
            <Icon className="h-4 w-4" />
          </Link>
        );
      })}
    </div>
  );
}
