import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import SeoJsonLd from "@/components/seo-jsonld";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s — ${site.legalName}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.legalName,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="grain" />
        <a href="#main" className="sr-only focus-ring">
          Skip to content
        </a>
        <Nav />
        <main id="main" className="relative z-[2]">
          {children}
        </main>
        <Footer />
        <SeoJsonLd />
      </body>
    </html>
  );
}
