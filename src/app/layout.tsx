// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { defaultMetadata } from "@/lib/seo";
import { GoogleAnalytics } from "@/lib/analytics";

import { Inter, Space_Grotesk, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

export const metadata: Metadata = defaultMetadata;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
// keep Plus Jakarta so it’s not “assigned and unused”
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plusjakarta", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} ${sans.variable}`}>
      <body className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-white text-neutral-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
