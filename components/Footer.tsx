"use client";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer>
      <span>{t.copyright}</span>
      <span>{t.madeWith}</span>
    </footer>
  );
}
