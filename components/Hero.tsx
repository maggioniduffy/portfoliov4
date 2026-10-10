"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";
import Contours from "./Contours";

const NIGHT = "#15130E";
const CREAM = "236,231,220";

function noise(x: number, y: number) {
  const h = (i: number, j: number) => {
    const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
    return s - Math.floor(s);
  };
  const xi = Math.floor(x),
    yi = Math.floor(y),
    xf = x - xi,
    yf = y - yi;
  const u = xf * xf * (3 - 2 * xf),
    v = yf * yf * (3 - 2 * yf);
  const a = h(xi, yi),
    b = h(xi + 1, yi),
    c = h(xi, yi + 1),
    d = h(xi + 1, yi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x: number, y: number) {
  let s = 0,
    a = 0.5,
    f = 1;
  for (let i = 0; i < 4; i++) {
    s += a * noise(x * f, y * f);
    f *= 2;
    a *= 0.5;
  }
  return s;
}

// Ridge-line terrain with a sun and one accent "river" line — a nod to the
// Limay–Neuquén basin work.
function drawTerrain(
  cv: HTMLCanvasElement,
  t: number,
  acc: string,
  figure: string,
  motion: number
) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const W = cv.clientWidth,
    H = cv.clientHeight;
  if (!W || !H) return;
  if (cv.width !== Math.round(W * dpr) || cv.height !== Math.round(H * dpr)) {
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
  }
  const ctx = cv.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.fillStyle = NIGHT;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = `rgba(${CREAM},.07)`;
  for (let x = 16; x < W; x += 28)
    for (let y = 16; y < H * 0.5; y += 28) ctx.fillRect(x, y, 1, 1);

  const rows = 56,
    top = H * 0.16,
    bot = H * 1.02,
    step = Math.max(6, W / 180),
    time = t * 0.00006 * motion;

  const sun = { x: W * 0.74, y: H * 0.3, r: Math.min(W, H) * 0.13 };
  ctx.fillStyle = acc;
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, sun.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = NIGHT;
  for (let i = 0; i < 7; i++) {
    const yy = sun.y + sun.r * (0.15 + i * 0.13);
    ctx.fillRect(sun.x - sun.r, yy, sun.r * 2, 2 + i * 1.6);
  }

  const riverRow = Math.round(rows * 0.62);
  for (let r = 0; r < rows; r++) {
    const p = r / (rows - 1),
      y0 = top + (bot - top) * Math.pow(p, 1.35);
    const amp = H * (0.05 + 0.2 * (1 - p) * (1 - p) + 0.04);
    const pts: [number, number][] = [];
    ctx.beginPath();
    ctx.moveTo(-10, H + 10);
    for (let x = -10; x <= W + 10; x += step) {
      const nx = x / W;
      const ridge = Math.exp(-Math.pow((nx - 0.32 - 0.15 * Math.sin(p * 3)) / 0.28, 2));
      const n = fbm(nx * 4 + time * 2, r * 0.22 - time * 3);
      const y = y0 - Math.pow(n, 1.6) * amp * (0.35 + ridge * 1.4);
      pts.push([x, y]);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W + 10, H + 10);
    ctx.closePath();
    ctx.fillStyle = NIGHT;
    ctx.fill();

    ctx.beginPath();
    pts.forEach(([x, y], j) => (j ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    if (r === riverRow) {
      ctx.strokeStyle = acc;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 1;
    } else {
      ctx.strokeStyle = `rgb(${CREAM})`;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.18 + 0.55 * (1 - p);
    }
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  ctx.font = "500 11px 'JetBrains Mono', monospace";
  ctx.fillStyle = `rgba(${CREAM},.55)`;
  ctx.fillText(figure, 32, H * 0.16 - 18);
}

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const hero = heroRef.current;
    if (!cv || !hero) return;
    const acc =
      getComputedStyle(document.documentElement).getPropertyValue("--acc").trim() ||
      "#3873b3";
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      const draw = () => drawTerrain(cv, 0, acc, t.figure, 0);
      draw();
      window.addEventListener("resize", draw);
      return () => window.removeEventListener("resize", draw);
    }

    // Only animate while the hero is on screen.
    let raf = 0;
    let visible = true;
    const loop = (ts: number) => {
      drawTerrain(cv, ts, acc, t.figure, 1);
      raf = requestAnimationFrame(loop);
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !visible) raf = requestAnimationFrame(loop);
      if (!e.isIntersecting) cancelAnimationFrame(raf);
      visible = e.isIntersecting;
    });
    io.observe(hero);
    raf = requestAnimationFrame(loop);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [t.figure]);

  return (
    <section id="top" className="hero" data-hero ref={heroRef}>
      <div className="hero-img" data-hero-img>
        <canvas ref={canvasRef} aria-hidden />
      </div>
      <div className="hero-shade" />
      <svg
        className="hero-contour"
        data-contour
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g fill="none" stroke="#ECE7DC" strokeOpacity=".28" strokeWidth="1">
          <Contours
            cx={74}
            cy={34}
            rings={[
              [0.25, 4],
              [0.5, 9],
              [0.78, 14],
              [1.08, 20],
              [1.4, 27],
              [1.75, 33],
              [2.15, 40],
              [2.6, 46],
            ]}
          />
        </g>
        <circle cx="74" cy="34" r=".6" fill="var(--acc)" />
      </svg>

      <div className="hero-txt" data-hero-txt>
        <div className="hero-meta intro-1">
          <span className="hero-avail">
            <span className="dot" />
            {t.tag}
          </span>
          <span>{t.role} — Córdoba, AR</span>
        </div>
        <h1 className="hero-name">
          <span className="sr-only">Faustino Maggioni Duffy — </span>
          <span className="hero-line line-1" data-h1 aria-hidden>
            Faustino
          </span>
          <span className="hero-line line-2" data-h2 aria-hidden>
            Maggioni <span className="acc">Duffy</span>
          </span>
        </h1>
        <div className="hero-foot intro-2">
          <p>{t.desc}</p>
          <div className="hero-scroll">
            <span className="cue-track">
              <span className="cue" data-cue />
            </span>
            {t.scroll}
          </div>
        </div>
      </div>
    </section>
  );
}
