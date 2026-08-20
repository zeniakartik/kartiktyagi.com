import { expertise, skills } from "@/content/me";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { TechIcon } from "@/components/ui/TechIcon";
import styles from "./Expertise.module.css";

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="02"
      kicker="Expertise"
      title="What I do best."
    >
      <div className={styles.grid}>
        {expertise.map((d, i) => (
          <article
            key={d.title}
            className={styles.domain}
            data-reveal
            style={{ "--reveal-delay": `${(i % 3) * 70}ms` } as React.CSSProperties}
          >
            <span className={styles.icon}>
              <Icon name={d.icon} size={22} />
            </span>
            <h3 className={styles.domainTitle}>{d.title}</h3>
            <p className={styles.domainSummary}>{d.summary}</p>
            <ul className={styles.tags}>
              {d.keywords.map((k) => (
                <li key={k} className={styles.tag}>
                  {k}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className={styles.skills}>
        <p className={styles.subhead} data-reveal>
          The toolbox
        </p>
        <div className={styles.skillGroups}>
          {skills.map((g, i) => (
            <div
              key={g.label}
              className={styles.group}
              data-reveal
              style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
            >
              <div className={styles.groupHead}>
                <Icon name={g.icon} size={17} />
                <span>{g.label}</span>
              </div>
              <ul className={styles.chips}>
                {g.items.map((item) => (
                  <li key={item} className="pill">
                    <TechIcon label={item} className="pill-icon"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Expertise;
