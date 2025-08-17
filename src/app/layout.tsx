import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { defaultMetadata } from "@/lib/seo";
import { GoogleAnalytics } from "@/lib/analytics";
import "./globals.css";
import {
  Inter,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";

export const metadata: Metadata = defaultMetadata;

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-inter" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={'${sans.variable} ${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}'}>
      <body className="jetbrains min-h-screen grid grid-rows-[auto_1fr_auto] bg-white text-neutral-900">
        <Navbar />
        <main>{children}</main>
        <GoogleAnalytics />
      </body>
    </html>
  );
}


