"use client";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";
import Contours from "./Contours";
import { Section, Paragraphs } from "./CaseStudy";

const LIVE = "https://fire-calendar.pages.dev/";
const GITHUB = "https://github.com/maggioniduffy/fire-calendar";
const SPACE_APPS = "https://www.spaceappschallenge.org/";
const CORE = ["Python 3.12", "pandas", "LightGBM", "FastAPI", "TypeScript", "React", "MapLibre GL"];
const ALSO = ["uv", "Vitest", "Playwright", "GitHub Actions", "Cloudflare Pages"];

export default function FireCalendarCaseStudy() {
  const { lang } = useLanguage();
  const t = translations[lang].fireCaseStudy;

  return (
    <>
      <section className="case-hero">
        <svg
          className="contact-contour"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <g data-contour2 fill="none" stroke="#ECE7DC" strokeOpacity=".12">
            <Contours
              cx={80}
              cy={20}
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
          <a href="/#projects" className="label">
            {t.back}
          </a>
          <div className="label acc">{t.label}</div>
          <h1 className="contact-title">
            Fire <em>Calendar.</em>
          </h1>
          <p className="case-lede">{t.lede}</p>
          <div className="card-links">
            <a href={LIVE} target="_blank" rel="noopener noreferrer">
              {t.links.live} ↗
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={SPACE_APPS} target="_blank" rel="noopener noreferrer">
              {t.links.challenge} ↗
            </a>
          </div>
          <img
            className="case-image"
            src="/images/fire-calendar.png"
            alt={t.imageAlt}
            width={1600}
            height={900}
          />
        </div>
      </section>

      <Section num="01" label={t.highlights.label} title={t.highlights.title}>
        <Paragraphs items={t.highlights.body} />
      </Section>

      <Section num="02" label={t.problem.label} title={t.problem.title}>
        <Paragraphs items={t.problem.body} />
      </Section>

      <Section num="03" label={t.approach.label} title={t.approach.title}>
        <p>{t.approach.intro}</p>
        <div className="timeline" data-exp>
          <div className="timeline-rail">
            <div data-line />
          </div>
          {t.approach.flow.map((step) => (
            <div key={step.name} className="job" data-item>
              <span className="job-dot" />
              <h3>{step.name}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <p>{t.approach.outro}</p>
      </Section>

      <Section num="04" label={t.validation.label} title={t.validation.title}>
        <Paragraphs items={t.validation.body} />
      </Section>

      <Section num="05" label={t.ml.label} title={t.ml.title}>
        <Paragraphs items={t.ml.body} />
      </Section>

      <Section num="06" label={t.product.label} title={t.product.title}>
        <Paragraphs items={t.product.body} />
      </Section>

      <Section num="07" label={t.role.label} title={t.role.title}>
        <Paragraphs items={t.role.body} />
      </Section>

      <Section num="08" label={t.stack.label} title={t.stack.title}>
        <div className="skills-list">
          <div>
            <div className="label acc">{t.stack.core}</div>
            <div className="skills-main">{CORE.join(", ")}</div>
          </div>
          <div>
            <div className="label muted">{t.stack.also}</div>
            <div className="skills-sub">{ALSO.join(", ")}</div>
          </div>
        </div>
      </Section>

      <footer className="case-foot label">
        <a href="/#projects">{t.back}</a>
        <span>{translations[lang].footer.copyright}</span>
      </footer>
    </>
  );
}
