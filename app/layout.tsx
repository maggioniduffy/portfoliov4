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

const BASE_URL = "https://tusitio.com"; // <-- reemplazá con tu dominio real

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Faustino Maggioni Duffy — Desarrollador de Software",
  description:
    "Desarrollador full-stack de Córdoba, Argentina — construyendo productos digitales limpios, escalables y bellamente diseñados.",
  openGraph: {
    title: "Faustino Maggioni Duffy — Desarrollador de Software",
    description:
      "Desarrollador full-stack de Córdoba, Argentina — construyendo productos digitales limpios, escalables y bellamente diseñados.",
    url: BASE_URL,
    siteName: "Faustino Maggioni Duffy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faustino Maggioni Duffy — Desarrollador de Software",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faustino Maggioni Duffy — Desarrollador de Software",
    description:
      "Desarrollador full-stack de Córdoba, Argentina — construyendo productos digitales limpios, escalables y bellamente diseñados.",
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
