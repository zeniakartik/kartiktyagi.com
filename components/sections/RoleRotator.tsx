"use client";

import { useEffect, useState } from "react";
import styles from "./RoleRotator.module.css";

export function RoleRotator({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce || roles.length < 2) return;

    const id = setInterval(
      () => setI((v) => (v + 1) % roles.length),
      2600,
    );
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className={styles.wrap}>
      {/* Static, screen-reader friendly list; the animated label is decorative. */}
      <span className="sr-only">{roles.join(", ")}</span>
      <span key={i} className={styles.role} aria-hidden>
        {roles[i]}
      </span>
    </span>
  );
}

export default RoleRotator;
