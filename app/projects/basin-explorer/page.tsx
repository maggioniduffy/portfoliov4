import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CaseStudy from "@/components/CaseStudy";
import ScrollFx from "@/components/ScrollFx";
import { LanguageProvider } from "@/components/LanguageContext";

const TITLE = "Basin Explorer — Case study · Faustino Maggioni Duffy";
const DESCRIPTION =
  "Satellite explorers of Argentine river basins on a shared codebase, with a TypeScript/DuckDB/GDAL data pipeline and natural-language search where an LLM never writes numbers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/projects/basin-explorer",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/projects/basin-explorer",
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

export default function BasinExplorerCaseStudy() {
  return (
    <LanguageProvider>
      <div className="grain" aria-hidden />
      <Navbar />
      <main>
        <CaseStudy />
      </main>
      <ScrollFx />
    </LanguageProvider>
  );
}
