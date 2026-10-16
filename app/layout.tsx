import type { Metadata } from "next";
import { Familjen_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { themeInitScript } from "@/components/useTheme";
import { Analytics } from "@vercel/analytics/next";

const grotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const BASE_URL = "https://maggioniduffy.vercel.app";

// Metadata is rendered server-side, so it can't follow the client-side
// language toggle — default to English since the site targets international clients.
const OG_TITLE = "Faustino Maggioni Duffy — Full-Stack Software Engineer";
const OG_DESCRIPTION =
  "Full-stack engineer building production web products end to end with TypeScript, React, Next.js, NestJS and PostgreSQL. Geospatial apps and data pipelines. Remote from Argentina.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  // Both languages live on the same URL (client-side toggle), so there are no
  // per-language hreflang alternates — only the canonical.
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: BASE_URL,
    siteName: "Faustino Maggioni Duffy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: OG_TITLE,
      },
    ],
    locale: "en_US",
    alternateLocale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/og-image.png"],
  },
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
      className={`${grotesk.variable} ${mono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
