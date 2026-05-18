"use client";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  companyAccent: string;
  quote: string;
  video: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Nombre del cliente",
    role: "Cargo",
    company: "KKApp",
    companyAccent: "#00e5a0",
    quote:
      "Trabajar con Faustino fue una experiencia excelente. Entendió nuestras necesidades desde el primer momento y el resultado superó nuestras expectativas.",
    video: "/videos/testimonial-kkapp.mp4",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="testimonial-card reveal"
      style={{ "--t-accent": t.companyAccent } as React.CSSProperties}
    >
      <video
        src={t.video}
        controls
        playsInline
        preload="metadata"
        className="testimonial-video"
      />
      <div className="testimonial-body">
        <div className="testimonial-quote-icon">"</div>
        <p className="testimonial-quote">{t.quote}</p>
        <div className="testimonial-author">
          <div className="testimonial-name">{t.name}</div>
          <div className="testimonial-role">
            {t.role} ·{" "}
            <span style={{ color: t.companyAccent }}>{t.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="testimonials-inner">
        <div className="reveal">
          <div className="section-label">Lo que dicen</div>
          <h2 className="section-title">
            Clientes que <em>confían</em>
          </h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.company} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
