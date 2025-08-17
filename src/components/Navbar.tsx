import Link from "next/link";
import Container from "./Container";
import SocialLinks from "./SocialLinks";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight">IMLP Studio</Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-black">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-xl px-3 py-1.5 bg-brand text-white text-sm shadow-soft hover:opacity-90"
          >
            Contact
          </Link>
          <SocialLinks />
        </nav>
      </Container>
    </header>
  );
}
