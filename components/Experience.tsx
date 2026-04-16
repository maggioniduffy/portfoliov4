const jobs = [
  {
    period: "Mayo 2023 — Marzo 2024",
    role: "Desarrollador de Software para Entrenamiento de IA",
    company: "Scale AI",
    desc: "Evaluación, corrección y mejora de fragmentos de código en Python, SQL, Java, Go, HTML y más. Los criterios de evaluación incluían velocidad, legibilidad y completitud.",
  },
  {
    period: "Ago 2022 — Feb 2023 · Argentina",
    role: "Ayudante de Cátedra, Base de Datos",
    company: "Universidad Nacional del Comahue",
    desc: "Asistí a estudiantes en temas de álgebra relacional, SQL básico y SGBD. Corregí exámenes y brindé retroalimentación estructurada.",
  },
  {
    period: "Junio 2022 — Ago 2022",
    role: "Desarrollador de Software Trainee",
    company: "Ensolvers",
    desc: "Desarrollo backend en Java y desarrollo de funcionalidades frontend con React.js.",
  },
  {
    period: "Nov 2021 — Ene 2022",
    role: "Desarrollador de Software — Programa NEST",
    company: "Patagonian Tech",
    desc: "Automatización de QA para un sitio del BID con Playwright y Cucumber JS. Construcción de módulos backend compartidos y reutilizables con NestJS, Postgres, AWS y Docker.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience-inner">
        <div className="reveal">
          <div className="section-label">Carrera</div>
          <h2 className="section-title">
            Dónde <em>trabajé</em>
          </h2>
        </div>
        <div className="timeline">
          {jobs.map((job, i) => (
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
