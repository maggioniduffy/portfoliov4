"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const { lang, toggle } = useLanguage();
  const t = translations[lang].nav;

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef}>
      <a href="#" className="nav-logo">
        FM<span>.</span>
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="#about">{t.about}</a>
          </li>
          <li>
            <a href="#projects">{t.projects}</a>
          </li>
          <li>
            <a href="#experience">{t.experience}</a>
          </li>
          <li>
            <a href="#contact">{t.contact}</a>
          </li>
          <li>
            <a href="#testimonials">{t.testimonials}</a>
          </li>
        </ul>
        <button
          className="lang-toggle"
          onClick={toggle}
          aria-label={t.langToggleAria}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
}
