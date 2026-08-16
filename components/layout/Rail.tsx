"use client";

import { useCallback, useEffect, useState } from "react";
import { navigation, profile, socials } from "@/content/me";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import styles from "./Rail.module.css";

export function Rail() {
  const [active, setActive] = useState<string>(navigation[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  // Track the section currently in view for the active nav indicator.
  useEffect(() => {
    const sections = navigation
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const primarySocials = socials.filter((s) => s.primary);

  return (
    <header className={styles.rail} data-open={open || undefined}>
      <div className={styles.bar}>
        <a href="#top" className={styles.brand} onClick={close}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.role}>
            {profile.roles[0]} · {profile.roles[1]}
          </span>
        </a>

        <div className={styles.barControls}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.hamburger}
            aria-expanded={open}
            aria-controls="rail-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div className={styles.panel} id="rail-panel">
        <div className={styles.lede}>
          <p className={styles.tagline}>{profile.headline}</p>
          <p className={styles.location}>
            <Icon name="map-pin" size={15} />
            {profile.location}
          </p>
        </div>

        <nav className={styles.nav} aria-label="Section navigation">
          <ul>
            {navigation.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={styles.navLink}
                    data-active={isActive || undefined}
                    aria-current={isActive ? "true" : undefined}
                    onClick={close}
                  >
                    <span className={styles.navLine} aria-hidden />
                    <span className={styles.navIndex}>{item.index}</span>
                    <span className={styles.navLabel}>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.footer}>
          <ul className={styles.socials}>
            {primarySocials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className={styles.social}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  title={s.label}
                  onClick={close}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.resume.href}
            className={styles.resume}
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            <Icon name="download" size={16} />
            {profile.resume.label}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Rail;
