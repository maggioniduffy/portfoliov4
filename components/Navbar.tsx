"use client";
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
  const { lang, toggle } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const t = translations[lang].nav;

  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        F/MD
      </a>
      <div className="nav-links">
        <a href="#about">{t.about}</a>
        <a href="#projects">{t.projects}</a>
        <a href="#testimonials">{t.testimonials}</a>
        <a href="#experience">{t.experience}</a>
        <a href="#contact">{t.contact}</a>
      </div>
      <div className="nav-actions">
        <button className="nav-btn" onClick={toggle} aria-label={t.langToggleAria}>
          {lang === "es" ? "EN" : "ES"}
        </button>
        <button
          className="nav-btn nav-btn-icon"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? t.themeToLightAria : t.themeToDarkAria}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}
