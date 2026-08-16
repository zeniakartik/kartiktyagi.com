import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  index?: string;
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  /** Render the heading visually hidden (e.g. hero). */
  hideHeading?: boolean;
};

/**
 * Consistent section shell: anchor id, monospace eyebrow, H2 heading and lead.
 * Server component — no client JS.
 */
export function Section({
  id,
  index,
  kicker,
  title,
  lead,
  children,
  hideHeading,
}: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <header
        className={hideHeading ? "sr-only" : styles.head}
        data-reveal={hideHeading ? undefined : ""}
      >
        <p className={styles.eyebrow}>
          {index ? <span className={styles.index}>{index}</span> : null}
          <span className="mono-label">{kicker}</span>
        </p>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </header>
      {children}
    </section>
  );
}

export default Section;
