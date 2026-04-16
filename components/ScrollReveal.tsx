"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    document
      .querySelectorAll(".reveal, .timeline-item")
      .forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = (i % 3) * 0.1 + "s";
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return null;
}
