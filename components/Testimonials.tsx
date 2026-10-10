"use client";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export default function Testimonials() {
  const { lang } = useLanguage();
  const t = translations[lang].testimonials;

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-head">
        <div className="label">(03) {t.label}</div>
        <h2 className="display" data-reveal>
          {t.title.pre}
          <em>{t.title.em}</em>
        </h2>
      </div>
      <figure className="testimonial" data-reveal>
        <video
          src="/videos/testimonial-kkapp.mp4"
          controls
          playsInline
          preload="metadata"
        />
        <div className="testimonial-body">
          <blockquote>
            <span className="quote-mark" aria-hidden>
              “
            </span>
            {t.quote}
          </blockquote>
          <figcaption className="label muted">
            {t.clientName} · {t.clientRole} · <span className="acc">KKApp</span>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
