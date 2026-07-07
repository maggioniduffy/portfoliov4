"use client";
import { useLanguage } from "./LanguageContext";
import { translations, type Lang } from "@/lib/translations";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  companyAccent: string;
  quote: string;
  video: string;
};

const getTestimonials = (lang: Lang): Testimonial[] => {
  const t = translations[lang].testimonials;
  return [
    {
      name: t.clientName,
      role: t.clientRole,
      company: "KKApp",
      companyAccent: "#00e5a0",
      quote: t.quote,
      video: "/videos/testimonial-kkapp.mp4",
    },
  ];
};

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
  const { lang } = useLanguage();
  const t = translations[lang].testimonials;
  const testimonials = getTestimonials(lang);

  return (
    <section id="testimonials">
      <div className="testimonials-inner">
        <div className="reveal">
          <div className="section-label">{t.label}</div>
          <h2 className="section-title">
            {t.title.pre}
            <em>{t.title.em}</em>
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
