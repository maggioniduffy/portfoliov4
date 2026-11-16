import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FireCalendarCaseStudy from "@/components/FireCalendarCaseStudy";
import ScrollFx from "@/components/ScrollFx";
import { LanguageProvider } from "@/components/LanguageContext";

const TITLE = "Fire Calendar — Case study · Faustino Maggioni Duffy";
const DESCRIPTION =
  "A harmonized MODIS + VIIRS fire calendar for Argentina, 2000 to today, built from NASA FIRMS data with uncertainty bands. Submitted to CONAE's challenge at NASA Space Apps Challenge 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/projects/fire-calendar",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/projects/fire-calendar",
    siteName: "Faustino Maggioni Duffy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: TITLE }],
    locale: "en_US",
    alternateLocale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function FireCalendarPage() {
  return (
    <LanguageProvider>
      <div className="grain" aria-hidden />
      <Navbar />
      <main>
        <FireCalendarCaseStudy />
      </main>
      <ScrollFx />
    </LanguageProvider>
  );
}
