"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { translations, type Lang } from "@/lib/translations";

const CloseIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width="24" height="24">
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

type Project = {
  num: string;
  name: string;
  badge: string;
  tag?: string;
  summary: string;
  desc: string;
  tech: string[];
  live: string;
  github: string;
  /** Projects without a demo video show a still: light/dark follow the theme, `feature` fills the modal. */
  media: { video: string } | { light: string; dark: string; feature: string };
  tone: "paper" | "acc" | "dusk";
};

const getProjects = (lang: Lang): Project[] => {
  const t = translations[lang].projects.items;
  return [
    {
      num: "01",
      name: "Río Negro Basin Explorer",
      ...t.rionegro,
      tech: ["Next.js", "TypeScript", "MapLibre GL", "PMTiles", "DuckDB", "GDAL"],
      live: "https://rionegrobasinexplorer.vercel.app/",
      github: "https://github.com/maggioniduffy/rionegro-basin-explorer",
      media: { video: "/videos/rionegro.mp4" },
      tone: "paper",
    },
    {
      num: "02",
      name: "KKApp",
      ...t.kkapp,
      tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
      live: "https://kkapp.es/",
      github: "https://github.com/maggioniduffy/conpermiso",
      media: {
        light: "/images/kkapp-light.png",
        dark: "/images/kkapp-dark.png",
        feature: "/images/kkapp-blue.png",
      },
      tone: "acc",
    },
    {
      num: "03",
      name: "Colchoncito",
      ...t.colchoncito,
      tech: ["Next.js", "TypeScript", "Google Auth", "Vercel"],
      live: "https://colchoncito.vercel.app/",
      github: "https://github.com/maggioniduffy/colchoncito",
      media: {
        light: "/images/colchoncito.png",
        dark: "/images/colchoncito.png",
        feature: "/images/colchoncito.png",
      },
      tone: "dusk",
    },
  ];
};

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal" onClick={onClose} role="dialog" aria-modal aria-label={p.name}>
      <button className="modal-close" onClick={onClose} aria-label={t.closeAria}>
        <CloseIcon />
      </button>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        {"video" in p.media ? (
          <video src={p.media.video} controls autoPlay playsInline />
        ) : (
          <img src={p.media.feature} alt={p.name} />
        )}
        <div className="modal-info">
          <div className="label acc">
            {p.num} · {p.badge}
          </div>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
          <div className="card-tech">{p.tech.join(" · ")}</div>
          <div className="card-links">
            <a href={p.live} target="_blank" rel="noopener noreferrer">
              {t.liveSite} ↗
            </a>
            <a href={p.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const videoRef = useRef<HTMLVideoElement>(null);
  const cta = "video" in p.media ? t.watchDemo : t.viewProject;

  // Play the preview loop only while the card is on screen.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const tilt = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const b = el.getBoundingClientRect();
    const x = (e.clientX - b.left) / b.width - 0.5;
    const y = (e.clientY - b.top) / b.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`;
  };
  const untilt = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "none";
  };

  return (
    <article className={`card card-${p.tone}`} onMouseMove={tilt} onMouseLeave={untilt}>
      <button className="card-media" onClick={onOpen} aria-label={`${cta}: ${p.name}`}>
        {"video" in p.media ? (
          <video ref={videoRef} src={p.media.video} muted loop playsInline preload="metadata" />
        ) : (
          <>
            <img className="media-light" src={p.media.light} alt="" />
            <img className="media-dark" src={p.media.dark} alt="" />
          </>
        )}
        <span className="card-play">{"video" in p.media ? `▶ ${cta}` : `${cta} ↗`}</span>
      </button>
      <div className="card-info">
        <div className="card-num">{p.num}</div>
        <div className="card-body">
          <div className="card-head">
            <h3>{p.name}</h3>
            <span className="card-badge">
              {p.tag ? `${p.tag} · ` : ""}
              {p.badge}
            </span>
          </div>
          <p>{p.summary}</p>
          <div className="card-tech">{p.tech.join(" · ")}</div>
          <div className="card-links">
            <a href={p.live} target="_blank" rel="noopener noreferrer">
              {t.liveSite} ↗
            </a>
            <a href={p.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const projects = getProjects(lang);
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="work" data-pin>
      <div className="work-sticky">
        <div className="work-top label">
          <span>(02) {t.label}</span>
          <span>
            <span data-count>01</span> / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <div className="work-track" data-track>
          <div className="work-intro">
            <h2>
              {t.title.pre}
              <em>{t.title.em}</em>
            </h2>
            <p>{t.intro}</p>
          </div>
          {projects.map((p) => (
            <ProjectCard key={p.num} p={p} onOpen={() => setOpen(p)} />
          ))}
          <div className="work-spacer" />
        </div>
        <div className="work-bar">
          <div data-pbar />
        </div>
      </div>
      {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
