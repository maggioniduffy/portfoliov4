"use client";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about">
      <div className="about reveal">
        <div>
          <div className="section-label">{t.label}</div>
          <h2 className="section-title">
            {t.title.pre}
            <em>{t.title.em}</em>
            {t.title.post && (
              <>
                <br />
                {t.title.post}
              </>
            )}
          </h2>
          <div className="about-text">
            {t.paragraphs.map((segments, i) => (
              <p key={i}>
                {segments.map((s, j) =>
                  s.strong ? (
                    <strong key={j}>{s.text}</strong>
                  ) : (
                    <span key={j}>{s.text}</span>
                  )
                )}
              </p>
            ))}
          </div>
        </div>
        <div className="skills-grid">
          <div>
            <div className="skill-group-label">{t.coreStack}</div>
            <div className="skill-tags">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "NestJS",
                "Node.js",
                "Python",
                "CSS",
              ].map((s) => (
                <span key={s} className="skill-tag main">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="skill-group-label">{t.alsoExperienced}</div>
            <div className="skill-tags">
              {[
                "Java",
                "Postgres",
                "AWS",
                "Docker",
                "Pandas",
                t.mlLibraries,
                "Playwright",
                "SQL",
              ].map((s) => (
                <span key={s} className="skill-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="skill-group-label">{t.education}</div>
            <div className="skill-tags">
              <span className="skill-tag">{t.degree}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
