"use client";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experience">
      <div className="experience-inner">
        <div className="reveal">
          <div className="section-label">{t.label}</div>
          <h2 className="section-title">
            {t.title.pre}
            <em>{t.title.em}</em>
          </h2>
        </div>
        <div className="timeline">
          {t.jobs.map((job, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-role">{job.role}</div>
              <div className="timeline-company">{job.company}</div>
              <p className="timeline-desc">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
