"use client";
import { useRef, useState, useEffect } from "react";

const ExternalIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const GitHubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const PlayIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    width="24"
    height="24"
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

type Project = {
  num: string;
  badge: string;
  accent: string;
  name: string;
  nameExtra?: string;
  tag?: string;
  desc: string;
  tech: string[];
  live: string | null;
  github: string | null;
  video?: string;
};

const projects: Project[] = [
  {
    num: "01",
    badge: "App Web",
    accent: "#00e5a0",
    name: "KKApp",
    tag: "Próximamente",
    desc: "Aplicación web completa construida con tecnologías modernas. Desarrollada con atención al rendimiento y la experiencia del desarrollador.",
    tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL"],
    live: null,
    github: "https://github.com/maggioniduffy/conpermiso",
    // video: "/videos/kkapp.mp4",
  },
  {
    num: "02",
    badge: "App de Turismo",
    accent: "#ff6b35",
    name: "Escapada.cba",
    nameExtra: ".cba",
    tag: "Trabajo en progreso",
    desc: "App de descubrimiento turístico para las Sierras de Córdoba. Los usuarios pueden explorar destinos de fin de semana con calificaciones, niveles de dificultad, distancias y opciones de transporte — en una interfaz de lista/mapa.",
    tech: ["Next.js", "TypeScript", "Maps API", "Vercel"],
    live: "https://escapadascba.vercel.app/",
    github: "https://github.com/maggioniduffy/sierras-cba",
    // video: "/videos/escapada.mp4",
  },
  {
    num: "03",
    badge: "Finanzas",
    accent: "#7b61ff",
    name: "Colchoncito",
    desc: "Tracker de finanzas personales diseñado para la realidad argentina de doble moneda — administrá tu dinero en pesos y dólares sin planillas. Iniciá sesión con Google y tomá el control.",
    tech: ["Next.js", "TypeScript", "Google Auth", "Vercel"],
    live: "https://colchoncito.vercel.app/",
    github: "https://github.com/maggioniduffy/colchoncito",
    video: "/videos/colchoncito.mp4",
  },
  {
    num: "04",
    badge: "E-Commerce",
    accent: "#f5c842",
    name: "El Frutito",
    desc: "Catálogo online y sistema de pedidos para una dietética de Nueva Córdoba. Los clientes navegan el catálogo completo, agregan productos al carrito con stock y precios en tiempo real, y envían su pedido directo por WhatsApp.",
    tech: ["Next.js", "TypeScript", "React", "Vercel"],
    live: "https://elfrutito.vercel.app/",
    github: "https://github.com/maggioniduffy/elfrutito",
    // video: "/videos/elfrutito.mp4",
  },
  {
    num: "05",
    badge: "Directorio",
    accent: "#e85d04",
    name: "YC Directory",
    desc: "Plataforma estilo Y Combinator donde emprendedores publican sus pitches de startups, votan las ideas de otros y ganan visibilidad en competencias virtuales. Incluye autenticación, búsqueda en tiempo real y un editor de contenido enriquecido.",
    tech: ["Next.js", "TypeScript", "Sanity CMS", "NextAuth", "Vercel"],
    live: "https://yc-jsm-seven.vercel.app/",
    github: null,
    // video: "/videos/ycdirectory.mp4",
  },
];

// ─── Modal fullscreen ───────────────────────────────────────────────
function VideoModal({ src, onClose }: { src: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <button
        className="video-modal-close"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <CloseIcon />
      </button>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <video
          ref={videoRef}
          src={src}
          controls
          playsInline
          className="video-modal-player"
        />
      </div>
    </div>
  );
}

// ─── Card ───────────────────────────────────────────────────────────
function ProjectCard({ p }: { p: Project }) {
  const thumbRef = useRef<HTMLVideoElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleMouseEnter = () => thumbRef.current?.play();
  const handleMouseLeave = () => {
    const v = thumbRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <>
      <div
        className="project-card reveal"
        style={{ ["--card-accent" as string]: p.accent }}
        onMouseEnter={p.video ? handleMouseEnter : undefined}
        onMouseLeave={p.video ? handleMouseLeave : undefined}
      >
        {p.video && (
          <div
            className="project-video-wrap"
            onClick={() => setModalOpen(true)}
          >
            <video
              ref={thumbRef}
              src={p.video}
              muted
              loop
              playsInline
              preload="metadata"
              className="project-video"
            />
            <div className="project-video-overlay">
              <PlayIcon />
              <span>Vista previa</span>
            </div>
          </div>
        )}

        <div className="project-number">
          <span>{p.num}</span>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {p.tag && (
              <span
                className="project-badge"
                style={{
                  color: "var(--card-accent)",
                  borderColor: "var(--card-accent)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {p.tag}
              </span>
            )}
            <span className="project-badge">{p.badge}</span>
          </div>
        </div>

        <div className="project-name">
          {p.nameExtra ? (
            <>
              {p.name.replace(p.nameExtra, "")}
              <span style={{ color: "var(--muted)" }}>{p.nameExtra}</span>
            </>
          ) : (
            p.name
          )}
        </div>

        <p className="project-desc">{p.desc}</p>

        <div className="project-tech">
          {p.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        <div className="project-links">
          {p.live ? (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalIcon />
              Sitio en vivo
            </a>
          ) : (
            <span
              className="project-link"
              style={{ opacity: 0.35, cursor: "not-allowed" }}
            >
              <ExternalIcon />
              Sitio en vivo
            </span>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <GitHubIcon />
              GitHub
            </a>
          )}
          {p.video && (
            <button
              className="project-link"
              onClick={() => setModalOpen(true)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <PlayIcon />
              Ver demo
            </button>
          )}
        </div>
      </div>

      {modalOpen && p.video && (
        <VideoModal src={p.video} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

// ─── Section ────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-header reveal">
        <div className="section-label">Trabajos seleccionados</div>
        <h2 className="section-title">
          Proyectos que <em>lancé</em>
        </h2>
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.num} p={p} />
        ))}
      </div>
    </section>
  );
}
