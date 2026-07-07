import type { Metadata } from "next";
import { Syne, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const BASE_URL = "https://maggioniduffy.vercel.app";

// Metadata is rendered server-side, so it can't follow the client-side
// language toggle — default to English since the site targets international clients.
const OG_TITLE = "Faustino Maggioni Duffy — Software Developer";
const OG_DESCRIPTION =
  "Full-stack developer from Córdoba, Argentina — building clean, scalable, beautifully designed digital products.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: BASE_URL,
    siteName: "Faustino Maggioni Duffy - Software Developer",
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
    <html lang="es">
      <body
        className={`${syne.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
