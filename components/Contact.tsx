"use client";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";
import Contours from "./Contours";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  const f = translations[lang].footer;

  return (
    <section id="contact" className="contact">
      <svg
        className="contact-contour"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g data-contour2 fill="none" stroke="#ECE7DC" strokeOpacity=".12">
          <Contours
            cx={20}
            cy={90}
            rings={[
              [0.4, -10],
              [0.8, -4],
              [1.25, 3],
              [1.75, 10],
              [2.3, 17],
              [2.9, 24],
            ]}
          />
        </g>
      </svg>
      <div className="contact-main">
        <div className="label">(05) {t.label}</div>
        <h2 className="contact-title" data-reveal>
          {t.title.pre}
          <br />
          <em>{t.title.em}</em>
        </h2>
        <p className="contact-intro" data-reveal>
          {t.intro}
        </p>
        <a href="mailto:fausmaggioni5@gmail.com" className="contact-email" data-reveal>
          fausmaggioni5@gmail.com <span aria-hidden>↗</span>
        </a>
      </div>
      <footer className="contact-foot label">
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/maggioniduffy/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/maggioniduffy" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="tel:+5492995509968">+549 299 550 9968</a>
        </div>
        <span>
          {f.copyright} · {f.madeWith}
        </span>
      </footer>
    </section>
  );
}
