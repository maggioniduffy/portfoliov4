"use client";
import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const clamp = (v: number) => Math.max(0, Math.min(1, v));

// One rAF loop drives every scroll-linked effect on the page. Elements opt in
// through data-* attributes, so sections stay plain markup. Re-collected when
// the language changes because the word spans and list items are re-rendered.
export default function ScrollFx() {
  const { lang } = useLanguage();

  useEffect(() => {
    const q = <T extends Element = HTMLElement>(s: string) =>
      document.querySelector<T & HTMLElement>(s);
    const qa = (s: string) => [...document.querySelectorAll<HTMLElement>(s)];

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const k = reduced ? 0 : 1;

    const E = {
      hero: q("[data-hero]"),
      img: q("[data-hero-img]"),
      txt: q("[data-hero-txt]"),
      h1: q("[data-h1]"),
      h2: q("[data-h2]"),
      contour: q("[data-contour]"),
      cue: q("[data-cue]"),
      words: q("[data-words]"),
      w: qa("[data-w]"),
      stage: q("[data-stage]"),
      ring: q("[data-ring]"),
      pin: q("[data-pin]"),
      track: q("[data-track]"),
      pbar: q("[data-pbar]"),
      count: q("[data-count]"),
      exp: q("[data-exp]"),
      line: q("[data-line]"),
      items: qa("[data-item]"),
      marq: q("[data-marq]"),
      c2: q("[data-contour2]"),
      reveals: qa("[data-reveal]"),
    };
    const cards = E.track ? E.track.querySelectorAll("article").length : 0;

    let raf = 0;
    const tick = (t: number) => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;

      if (E.hero && E.img && E.h1 && E.h2 && E.txt) {
        const p = clamp(-E.hero.getBoundingClientRect().top / vh);
        E.img.style.transform = `translateY(${p * 30 * k}%) scale(${1 + p * 0.2 * k})`;
        E.h1.style.transform = `translateX(${-p * 22 * k}vw)`;
        E.h2.style.transform = `translateX(${p * 22 * k}vw)`;
        E.txt.style.opacity = String(1 - p * 1.4);
        if (E.contour)
          E.contour.style.transform = `rotate(${p * 12 * k}deg) scale(${1 + p * 0.3 * k})`;
      }
      if (E.cue && k) E.cue.style.transform = `translateY(${((t / 18) % 74) - 18}px)`;

      if (E.words) {
        const rc = E.words.getBoundingClientRect();
        const p = reduced ? 1 : clamp((vh * 0.85 - rc.top) / (rc.height + vh * 0.35));
        const n = E.w.length;
        E.w.forEach((w, i) => {
          w.style.opacity = i / n < p ? "1" : "0.14";
        });
      }

      if (E.ring && E.stage) {
        const rc = E.stage.getBoundingClientRect();
        E.ring.style.transform = `rotateX(-14deg) rotateY(${(t * 0.012 + rc.top * 0.25) * k}deg)`;
      }

      if (E.pin && E.track) {
        const rc = E.pin.getBoundingClientRect();
        const p = clamp(-rc.top / (rc.height - vh));
        const max = Math.max(0, E.track.scrollWidth - vw);
        E.track.style.transform = `translateX(${-p * max}px)`;
        if (E.pbar) E.pbar.style.transform = `scaleX(${p})`;
        if (E.count && cards)
          E.count.textContent =
            "0" + Math.min(cards, Math.max(1, Math.ceil(p * (cards + 0.2))));
      }

      if (E.exp && E.line) {
        const rc = E.exp.getBoundingClientRect();
        E.line.style.transform = `scaleY(${clamp((vh * 0.6 - rc.top) / rc.height)})`;
        E.items.forEach((it) => {
          it.toggleAttribute("data-on", it.getBoundingClientRect().top < vh * 0.6);
        });
      }

      if (E.marq) {
        const rc = E.marq.getBoundingClientRect();
        E.marq.style.transform = `translateX(${(rc.top - vh) * 0.6 * k}px)`;
      }

      if (E.c2) {
        const svg = E.c2.closest("svg");
        if (svg) {
          const rc = svg.getBoundingClientRect();
          E.c2.style.transform = `rotate(${(rc.top / vh) * -20 * k}deg)`;
        }
      }

      E.reveals.forEach((e) => {
        if (!e.hasAttribute("data-in") && e.getBoundingClientRect().top < vh * 0.9)
          e.setAttribute("data-in", "");
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [lang]);

  return null;
}
