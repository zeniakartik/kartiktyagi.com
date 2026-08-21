"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/me";
import type { Project, ProjectCategory } from "@/content/me/types";
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

/**
 * Hero order on the "All" filter — each hero project sits full-width with two
 * regular project tiles in a 2-column row directly below it, repeating.
 */
const HERO_ORDER = ["cobol2java", "privilegezero", "copconnect", "ethixfirst"];

interface RowGroup {
  hero: Project;
  pair: Project[];
}

/**
 * Split a project list into row-groups: each group is one hero + up to two
 * side tiles. Non-hero projects fill the pairs in their original order.
 */
function buildRows(list: Project[]): RowGroup[] {
  const heroBySlug = new Map<string, Project>();
  const rest: Project[] = [];
  for (const p of list) {
    if (HERO_ORDER.includes(p.slug)) {
      heroBySlug.set(p.slug, p);
    } else {
      rest.push(p);
    }
  }

  const rows: RowGroup[] = [];
  for (const slug of HERO_ORDER) {
    const hero = heroBySlug.get(slug);
    if (!hero) continue;
    rows.push({ hero, pair: rest.splice(0, 2) });
  }
  // Any trailing non-hero projects become an extra flat row.
  if (rest.length) {
    rows.push({ hero: rest[0], pair: rest.slice(1, 3) });
  }
  return rows;
}

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

  const rows = useMemo(
    () => (filter === "All" ? buildRows(visible) : null),
    [filter, visible],
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

      {rows ? (
        <div key={filter} className={styles.rows}>
          {rows.map((row, ri) => (
            <div key={row.hero.slug} className={styles.rowGroup}>
              <ProjectCard project={row.hero} hero index={ri * 3} />
              {row.pair.length > 0 ? (
                <div className={styles.rowPair}>
                  {row.pair.map((p, pi) => (
                    <ProjectCard
                      key={p.slug}
                      project={p}
                      index={ri * 3 + pi + 1}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div key={filter} className={styles.grid}>
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      )}
    </>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  hero?: boolean;
}

function ProjectCard({ project: p, index, hero = false }: ProjectCardProps) {
  return (
    <article
      className={styles.card}
      data-featured={p.featured || undefined}
      data-hero={hero || undefined}
      style={{ "--i": index } as React.CSSProperties}
    >
      <div className={styles.cardTop}>
        <span className={styles.cardIcon}>
          <Icon name={p.icon} size={hero ? 24 : 20} />
        </span>
        <span className={styles.category}>{p.category}</span>
      </div>

      <h3 className={styles.name}>{p.name}</h3>
      <p className={styles.tagline}>{p.tagline}</p>

      {hero && p.highlights?.length ? (
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
  );
}

export default ProjectsClient;
