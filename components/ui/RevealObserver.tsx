"use client";

import { useEffect } from "react";

/**
 * Progressive enhancement: adds `js` to <html> so reveal styles engage only when
 * JS is available, then reveals `[data-reveal]` elements as they enter view.
 * Content is fully visible without JS and when reduced-motion is preferred.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}

export default RevealObserver;
