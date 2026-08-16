import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { me } from "@/content/me";
import { Rail } from "@/components/layout/Rail";
import { Footer } from "@/components/layout/Footer";
import { Background } from "@/components/layout/Background";
import { RevealObserver } from "@/components/ui/RevealObserver";
import shell from "@/components/layout/Shell.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const { site, profile, socials } = me;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  applicationName: `${site.name} — Portfolio`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8eaee" },
    { media: "(prefers-color-scheme: dark)", color: "#1e2127" },
  ],
  colorScheme: "light dark",
};

const themeScript = `(function(){var d=document.documentElement;d.classList.add("js");try{var k="kt-theme";var p=new URLSearchParams(location.search).get("theme");var s=localStorage.getItem(k);var m=window.matchMedia("(prefers-color-scheme: dark)").matches;var t=(p==="light"||p==="dark")?p:(s||(m?"dark":"light"));d.setAttribute("data-theme",t);}catch(e){d.setAttribute("data-theme","light");}})();`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: site.url,
  image: `${site.url}${profile.photo.src}`,
  jobTitle: "Technical Lead & Solution Architect",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: socials
    .filter((s) => s.href.startsWith("http"))
    .map((s) => s.href),
  knowsAbout: site.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body>
        <span id="top" aria-hidden />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Background />
        <RevealObserver />
        <div className={shell.shell}>
          <Rail />
          <main id="main" className={shell.main}>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
