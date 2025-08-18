import Link from "next/link";
import type { SVGProps } from "react";

/** An SVG icon component signature (e.g., from lucide-react). */
type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

type Social = {
  href: string;
  label: string;
  icon?: IconComponent;
  external?: boolean;
};

const socials: Social[] = [
  // Add your icons if you use lucide/react or similar. Leaving icons optional keeps typing strict.
  { href: "https://github.com/imlpstudio", label: "GitHub", external: true },
  { href: "https://www.linkedin.com", label: "LinkedIn", external: true },
  { href: "/contact", label: "Email" },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={className} aria-label="Social links">
      <ul className="flex gap-3 text-sm">
        {socials.map(({ href, label, icon: Icon, external }) => (
          <li key={label}>
            {external ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border px-2 py-1 hover:bg-neutral-50"
                aria-label={label}
              >
                {Icon ? <Icon width={16} height={16} /> : label}
              </a>
            ) : (
              <Link
                href={href}
                className="rounded-md border px-2 py-1 hover:bg-neutral-50"
                aria-label={label}
              >
                {Icon ? <Icon width={16} height={16} /> : label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
