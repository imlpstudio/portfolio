import Link from "next/link";
import Container from "./Container";
import SocialLinks from "./SocialLinks";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <nav className="flex h-14 items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight">IMLP Studio</Link>
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-black">
                {l.label}
              </Link>
            ))}
            <SocialLinks />
          </div>
        </nav>
      </Container>
    </header>
  );
}
