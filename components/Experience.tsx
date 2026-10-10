"use client";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export default function Experience() {
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="experience">
      <div className="experience-head">
        <div className="label">(04) {t.label}</div>
        <h2 className="display">
          {t.title.pre}
          <br />
          <em>{t.title.em}</em>
        </h2>
      </div>
      <div className="timeline" data-exp>
        <div className="timeline-rail">
          <div data-line />
        </div>
        {t.jobs.map((job, i) => (
          <div key={i} className="job" data-item data-reveal>
            <span className="job-dot" />
            <div className="label muted">{job.period}</div>
            <h3>
              {job.role}
              {job.company && ` — ${job.company}`}
            </h3>
            <p>{job.desc}</p>
          </div>
        ))}
        <div className="education" data-reveal>
          {[
            [t.educationLabel, t.education],
            [t.certificationsLabel, t.certifications],
          ].map(([label, items]) => (
            <div key={label as string}>
              <div className="label acc">{label}</div>
              {(items as string[]).map((item, i) => (
                <div key={item} className={i ? "muted-line" : undefined}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
