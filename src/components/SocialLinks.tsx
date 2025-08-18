import Link from "next/link";

type Social = {
  href: string;
  label: string;
  // Optional icon component if you add one later (keeps typing strict, no `any`)
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const SOCIALS: Social[] = [
  { href: "https://www.linkedin.com/in/your-handle", label: "LinkedIn" },
  { href: "https://x.com/your-handle", label: "X / Twitter" },
  { href: "https://www.instagram.com/your-handle", label: "Instagram" },
  { href: "mailto:you@example.com", label: "Email" },
];

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      <nav className="flex flex-wrap gap-3 text-sm">
        {SOCIALS.map(({ href, label, Icon }) => (
          <Link
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            className="inline-flex items-center gap-2 rounded-md border px-2.5 py-1.5 hover:bg-neutral-50"
            aria-label={label}
          >
            {Icon ? <Icon width={16} height={16} /> : null}
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
