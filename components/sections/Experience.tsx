import { experience } from "@/content/me";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { TechIcon } from "@/components/ui/TechIcon";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      kicker="Experience"
      title="Where I've done the work."
    >
      <ol className={styles.list}>
        {experience.map((role, i) => (
          <li
            key={role.company + i}
            className={styles.item}
            data-reveal
            style={{ "--reveal-delay": `${(i % 3) * 60}ms` } as React.CSSProperties}
          >
            <span className={styles.marker} aria-hidden />
            <div className={styles.period}>{role.period}</div>

            <div className={styles.content}>
              <div className={styles.head}>
                <h3 className={styles.company}>
                  {role.href ? (
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.companyLink}
                    >
                      {role.company}
                      <Icon name="arrow-up-right" size={15} />
                    </a>
                  ) : (
                    role.company
                  )}
                </h3>
                {role.type ? (
                  <span className={styles.type}>{role.type}</span>
                ) : null}
                {role.location ? (
                  <span className={styles.location}>{role.location}</span>
                ) : null}
              </div>

              <ul className={styles.positions}>
                {role.positions.map((p) => (
                  <li key={p.title} className={styles.position}>
                    <span className={styles.posTitle}>{p.title}</span>
                    <span className={styles.posPeriod}>{p.period}</span>
                  </li>
                ))}
              </ul>

              <ul className={styles.highlights}>
                {role.highlights.map((h, hi) => (
                  <li key={hi} className={styles.highlight}>
                    {h}
                  </li>
                ))}
              </ul>

              <ul className={styles.stack}>
                {role.stack.map((s) => (
                  <li key={s} className="pill">
                    <TechIcon label={s} className="pill-icon" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
