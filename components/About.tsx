"use client";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

const CORE = ["TypeScript", "React", "Next.js", "NestJS", "Node.js", "Python", "CSS"];
const ALSO = ["Java", "Postgres", "AWS", "Docker", "Pandas", "Playwright", "SQL"];

// Chip styles cycle around the ring, as in the design.
const RING_STYLES = ["serif", "chip-solid", "serif-acc", "chip-line", "serif", "chip-acc"];

// Split text into short phrases so the scroll reveal lights up a few words at a time.
function phrases(text: string, size = 4) {
  const words = text.split(/(\s+)/).filter(Boolean);
  const out: string[] = [];
  let buf = "";
  let n = 0;
  for (const w of words) {
    buf += w;
    if (w.trim()) n++;
    if (n === size) {
      out.push(buf);
      buf = "";
      n = 0;
    }
  }
  if (buf) out.push(buf);
  return out;
}

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const ring = [...CORE, ...ALSO];

  return (
    <>
      <section id="about" className="about">
        <div className="label">(01) {t.label}</div>
        <div className="about-statement" data-words>
          {t.paragraphs.map((segments, i) => (
            <p key={i}>
              {segments.flatMap((s, j) =>
                phrases(s.text).map((ph, k) => (
                  <span key={`${j}-${k}`} data-w className={s.strong ? "em" : undefined}>
                    {ph}
                  </span>
                ))
              )}
            </p>
          ))}
        </div>
      </section>

      <section className="skills">
        <div className="skills-stage" data-stage aria-hidden>
          <div className="skills-ring" data-ring>
            <div className="globe">
              {[0, 30, 60, 90, 120, 150].map((d) => (
                <div
                  key={d}
                  className={d === 90 ? "acc" : undefined}
                  style={{ transform: `rotateY(${d}deg)` }}
                />
              ))}
              <div style={{ transform: "rotateX(90deg)" }} />
              <div className="inner" style={{ transform: "rotateX(90deg) translateZ(60px)" }} />
              <div className="inner" style={{ transform: "rotateX(90deg) translateZ(-60px)" }} />
            </div>
            {ring.map((s, i) => (
              <div
                key={s}
                className={`ring-item ${RING_STYLES[i % RING_STYLES.length]}`}
                style={{
                  transform: `translate(-50%,-50%) rotateY(${(360 / ring.length) * i}deg) translateZ(min(34vw,300px))`,
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="skills-list">
          <div data-reveal>
            <div className="label acc">{t.coreStack}</div>
            <div className="skills-main">{CORE.join(", ")}</div>
          </div>
          <div data-reveal>
            <div className="label muted">{t.alsoExperienced}</div>
            <div className="skills-sub">
              {[...ALSO.slice(0, 5), t.mlLibraries, ...ALSO.slice(5)].join(", ")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
