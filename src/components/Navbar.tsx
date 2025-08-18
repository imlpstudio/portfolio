import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="lg:hidden sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between text-black">
        <Link href="/" className="font-semibold">IMLP Studio</Link>
        <nav className="text-xs">
          <Link href="/work" className="hover:underline font-inter font-bold">WORK</Link>
          <span className="mx-3 text-black">/</span>
           <Link href="/about" className="hover:underline font-inter font-bold">ABOUT</Link>
            <span className="mx-3 text-black">/</span>
          <Link href="/contact" className="hover:underline font-inter font-bold text-red-600">CONTACT</Link>
        </nav>
      </Container>
    </header>
  );
}
