"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./useTheme";
import { translations } from "@/lib/translations";

const SunIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const { lang, toggle } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
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
        <button
          className="lang-toggle theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? t.themeToLightAria : t.themeToDarkAria}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}
