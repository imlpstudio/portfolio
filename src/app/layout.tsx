import "./globals.css";
import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@/lib/analytics";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-neutral-900 bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Organization JSON-LD */}
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
