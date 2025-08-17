import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { defaultMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@/lib/analytics";

export const metadata: Metadata = defaultMetadata;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto]">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "IMLP Studio",
              url: "https://imlpstudio.com",
              sameAs: [
                "https://github.com/imlpstudio",
                "https://www.linkedin.com/in/irvingmlp/"
              ]
            }),
          }}
        />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
