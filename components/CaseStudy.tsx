"use client";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";
import Contours from "./Contours";

const LIVE = "https://basinexplorer.vercel.app";
const GITHUB = "https://github.com/maggioniduffy/rionegro-basin-explorer";
const CORE = ["Next.js", "TypeScript", "MapLibre GL", "PMTiles", "DuckDB", "GDAL", "MongoDB"];
const ALSO = ["Zustand", "next-intl", "zod", "Tailwind CSS", "Vitest", "Playwright", "tippecanoe"];

type Title = { pre: string; em: string };

// Section shell: sticky heading on the left, content on the right — the same
// grid as the Experience section.
function Section({
  num,
  label,
  title,
  children,
}: {
  num: string;
  label: string;
  title: Title;
  children: React.ReactNode;
}) {
  return (
    <section className="experience case-section">
      <div className="experience-head">
        <div className="label">
          ({num}) {label}
        </div>
        <h2 className="display">
          {title.pre}
          <br />
          <em>{title.em}</em>
        </h2>
      </div>
      <div className="case-body" data-reveal>
        {children}
      </div>
    </section>
  );
}

const Paragraphs = ({ items }: { items: string[] }) => (
  <>
    {items.map((p) => (
      <p key={p}>{p}</p>
    ))}
  </>
);

export default function CaseStudy() {
  const { lang } = useLanguage();
  const t = translations[lang].caseStudy;
  const projects = translations[lang].projects;

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
            Basin <em>Explorer.</em>
          </h1>
          <p className="case-lede">{t.lede}</p>
          <div className="card-links">
            <a href={`${LIVE}/`} target="_blank" rel="noopener noreferrer">
              {t.links.hub} ↗
            </a>
            <a href={`${LIVE}/rionegro`} target="_blank" rel="noopener noreferrer">
              {t.links.rionegro} ↗
            </a>
            <a href={`${LIVE}/cordoba`} target="_blank" rel="noopener noreferrer">
              {t.links.cordoba} ↗
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
          <video
            className="case-video"
            src="/videos/rionegro.mp4"
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={`${projects.watchDemo}: Basin Explorer`}
          />
        </div>
      </section>

      <Section num="01" label={t.problem.label} title={t.problem.title}>
        <Paragraphs items={t.problem.body} />
      </Section>

      <Section num="02" label={t.architecture.label} title={t.architecture.title}>
        <p>{t.architecture.intro}</p>
        <div className="timeline" data-exp>
          <div className="timeline-rail">
            <div data-line />
          </div>
          {t.architecture.flow.map((step) => (
            <div key={step.name} className="job" data-item>
              <span className="job-dot" />
              <h3>{step.name}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <p>{t.architecture.outro}</p>
      </Section>

      <Section num="03" label={t.pipeline.label} title={t.pipeline.title}>
        <Paragraphs items={t.pipeline.body} />
      </Section>

      <Section num="04" label={t.guardrail.label} title={t.guardrail.title}>
        <Paragraphs items={t.guardrail.body} />
      </Section>

      <Section num="05" label={t.regions.label} title={t.regions.title}>
        <Paragraphs items={t.regions.body} />
      </Section>

      <Section num="06" label={t.stack.label} title={t.stack.title}>
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
