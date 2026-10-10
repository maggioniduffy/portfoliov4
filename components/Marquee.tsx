"use client";
import { Fragment } from "react";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export default function Marquee() {
  const { lang } = useLanguage();
  const words = translations[lang].marquee;
  const run = [...words, ...words, ...words];

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-row" data-marq>
        {run.map((w, i) => (
          <Fragment key={i}>
            <span>{w}</span>
            <span className="slash">/</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
