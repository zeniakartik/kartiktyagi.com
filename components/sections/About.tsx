import { profile, principles } from "@/content/me";
import { Section } from "@/components/ui/Section";
import styles from "./About.module.css";

export function About() {
  return (
    <Section
      id="about"
      index="01"
      kicker="About"
      title="Engineer, architect, and perpetual builder."
    >
      <div className={styles.prose}>
        {profile.about.map((para, i) => (
          <p
            key={i}
            className={styles.para}
            data-reveal
            style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
          >
            {para}
          </p>
        ))}
      </div>

      <blockquote className={styles.ethos} data-reveal>
        {profile.ethos}
      </blockquote>

      <div className={styles.principles}>
        <p className={styles.subhead} data-reveal>
          How I think
        </p>
        <ol className={styles.list}>
          {principles.map((p, i) => (
            <li
              key={p.index}
              className={styles.item}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
            >
              <span className={styles.index}>{p.index}</span>
              <div className={styles.itemBody}>
                <h3 className={styles.itemTitle}>{p.title}</h3>
                <p className={styles.itemText}>{p.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export default About;
