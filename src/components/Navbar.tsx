import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="lg:hidden sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">IMLP Studio</Link>
        <nav className="text-sm">
          <Link href="/work" className="hover:underline">Work</Link>
          <span className="mx-3 text-neutral-300">/</span>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </Container>
    </header>
  );
}
