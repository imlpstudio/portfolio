import Link from "next/link";
import type { SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

type Social = {
  href: string;
  label: string;
  icon?: IconComponent;
  external?: boolean;
};

const socials: Social[] = [
  { href: "https://github.com/imlpstudio", label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/your-handle", label: "LinkedIn", external: true },
  { href: "mailto:hello@imlp.studio", label: "Email", external: true },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={className} aria-label="Social links">
      <ul className="flex gap-2 text-xs">
        {socials.map(({ href, label, icon: Icon, external }) => (
          <li key={label}>
            {external ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-md border px-2 py-1 hover:bg-neutral-50"
                aria-label={label}
              >
                {Icon ? <Icon width={14} height={14} /> : label}
              </a>
            ) : (
              <Link
                href={href}
                className="rounded-md border px-2 py-1 hover:bg-neutral-50"
                aria-label={label}
              >
                {Icon ? <Icon width={14} height={14} /> : label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
