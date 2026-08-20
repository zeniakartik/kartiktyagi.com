"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/me";
import type { ProjectCategory } from "@/content/me/types";
import { Icon } from "@/components/ui/Icon";
import { TechIcon } from "@/components/ui/TechIcon";
import styles from "./Projects.module.css";

const FILTERS: Array<"All" | ProjectCategory> = [
  "All",
  "Product",
  "Professional",
  "Security",
  "Open Source",
  "Experiment",
];

export function ProjectsClient() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter projects by category">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={styles.filter}
            data-active={filter === f || undefined}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
            <span className={styles.count}>{counts[f] ?? 0}</span>
          </button>
        ))}
      </div>

      <div key={filter} className={styles.grid}>
        {visible.map((p, i) => (
          <article
            key={p.slug}
            className={styles.card}
            data-featured={p.featured || undefined}
            style={{ "--i": i } as React.CSSProperties}
          >
            <div className={styles.cardTop}>
              <span className={styles.cardIcon}>
                <Icon name={p.icon} size={20} />
              </span>
              <span className={styles.category}>{p.category}</span>
            </div>

            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.tagline}>{p.tagline}</p>

            {p.featured && p.highlights?.length ? (
              <ul className={styles.highlights}>
                {p.highlights.map((h, hi) => (
                  <li key={hi} className={styles.highlight}>
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}

            <ul className={styles.stack}>
              {p.stack.map((s) => (
                <li key={s} className={styles.chip}>
                  <TechIcon label={s} size={12} className={styles.chipIcon} />
                  {s}
                </li>
              ))}
            </ul>

            <div className={styles.cardFoot}>
              <span className={styles.meta}>
                {p.role}
                {p.timeframe ? ` · ${p.timeframe}` : ""}
              </span>
              {p.links?.length ? (
                <div className={styles.links}>
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                      aria-label={`${p.name} — ${l.label}`}
                    >
                      <Icon name={l.icon ?? "arrow-up-right"} size={16} />
                    </a>
                  ))}
                </div>
              ) : p.status ? (
                <span className={styles.status}>{p.status}</span>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default ProjectsClient;
