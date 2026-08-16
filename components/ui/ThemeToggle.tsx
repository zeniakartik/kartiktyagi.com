"use client";

import { Icon } from "./Icon";
import styles from "./ThemeToggle.module.css";

const STORAGE_KEY = "kt-theme";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable; ignore */
    }
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span className={styles.sun}>
        <Icon name="sun" size={18} />
      </span>
      <span className={styles.moon}>
        <Icon name="moon" size={18} />
      </span>
    </button>
  );
}

export default ThemeToggle;
