import { engineering } from "@/content/me";
import { Section } from "@/components/ui/Section";
import { TechIcon } from "@/components/ui/TechIcon";
import styles from "./Engineering.module.css";

export function Engineering() {
  return (
    <Section
      id="engineering"
      index="05"
      kicker="Engineering × AI"
      title="How AI fits into my engineering."
      lead={engineering.intro}
    >
      <div className={styles.panel} data-reveal>
        <div className={styles.panelBar}>
          <span className={styles.dots} aria-hidden>
            <span />
            <span />
            <span />
          </span>
          <span className={styles.panelTitle}>ai-native-workflow</span>
        </div>

        <div className={styles.practices}>
          {engineering.practices.map((p, i) => (
            <div key={p.title} className={styles.practice}>
              <span className={styles.pIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={styles.pTitle}>{p.title}</h3>
                <p className={styles.pBody}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.toolkit} data-reveal>
        {engineering.toolkit.map((g) => (
          <div key={g.label} className={styles.toolGroup}>
            <span className={styles.toolLabel}>{g.label}</span>
            <ul className={styles.chips}>
              {g.items.map((item) => (
                <li key={item} className="pill">
                  <TechIcon label={item} className="pill-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <blockquote className={styles.note} data-reveal>
        {engineering.note}
      </blockquote>
    </Section>
  );
}

export default Engineering;
