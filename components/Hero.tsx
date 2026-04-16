export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-content">
        {/* Profile preview */}

        <div className="hero-tag" style={{ marginTop: "28px" }}>
          Disponible para nuevas oportunidades
        </div>
        <h1 className="hero-name">
          Faustino
          <br />
          <span className="line2">Maggioni</span>
          <br />
          <span className="accent">Duffy</span>
        </h1>
        <p className="hero-desc">
          Desarrollador full-stack de Córdoba, Argentina — construyendo
          productos digitales limpios, escalables y bellamente diseñados.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            Ver proyectos
          </a>
          <a
            href="https://www.linkedin.com/in/maggioniduffy/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        Desplazá para explorar
      </div>
    </section>
  );
}
