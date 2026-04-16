export default function About() {
  return (
    <section id="about">
      <div className="about reveal">
        <div>
          <div className="section-label">Sobre mí</div>
          <h2 className="section-title">
            Construyendo <em>software</em>
            <br />
            con propósito
          </h2>
          <div className="about-text">
            <p>
              Soy un desarrollador full-stack apasionado, creativo y curioso,
              con{" "}
              <strong>sólidos fundamentos y un ojo agudo para el diseño</strong>
              . Me enfoco en producir software escalable que sigue las mejores
              prácticas — desde la arquitectura hasta el último píxel.
            </p>
            <p>
              Con formación universitaria y autodidacta, me adapto rápidamente a
              distintos requisitos gracias a la amplitud de mi preparación. He
              desarrollado desde <strong>plataformas de e-commerce</strong> y{" "}
              <strong>herramientas financieras</strong> hasta{" "}
              <strong>sistemas de entrenamiento de IA</strong>.
            </p>
            <p>
              Basado en <strong>Córdoba, Argentina</strong>. Disponible para
              trabajo remoto en cualquier parte del mundo.
            </p>
          </div>
        </div>
        <div className="skills-grid">
          <div>
            <div className="skill-group-label">Stack principal</div>
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
            <div className="skill-group-label">También con experiencia en</div>
            <div className="skill-tags">
              {[
                "Java",
                "Postgres",
                "AWS",
                "Docker",
                "Pandas",
                "Librerías ML",
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
            <div className="skill-group-label">Educación</div>
            <div className="skill-tags">
              <span className="skill-tag">
                Lic. en Ciencias de la Computación - UNCO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
