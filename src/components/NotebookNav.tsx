// src/components/NotebookNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const links = [
  { href: "/work", label: "WORK" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export default function NotebookNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-[100svh] w-[240px] border-r bg-white text-neutral-300">
    

      {/* socials (just above the nav) */}
      <div className="px-6 pb-3 mt-46">
        <div className="flex items-center gap-3 text-neutral-500">
          <a
            href="https://github.com/imlpstudio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-neutral-900"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-neutral-900"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-neutral-900"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="mailto:contact@imlpstudio.com"
            aria-label="Email"
            className="hover:text-neutral-900"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
         <div className=" pt-8 pb-5 ">
        <Link href="/" className="text-sm font-semibold tracking-tight text-red-400">
          IMLP Studio
        </Link>
      </div>
      </div>

      <nav className="ml-4 flex-1 space-y-2 text-sm">
        {links.map((l) => {
          const active = pathname === l.href || pathname?.startsWith(l.href + "/");
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`block rounded-md px-2 py-1.5 transition ${
                active
                  ? "bg-neutral-100 text-neutral-900 font-inter font-medium"
                  : "text-neutral-700 hover:bg-neutral-50"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-6 pb-8 text-xs text-neutral-500 font-inter">
        © {new Date().getFullYear()} IMLP Studio
      </div>
    </aside>
  );
}
