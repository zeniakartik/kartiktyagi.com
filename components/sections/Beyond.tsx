import { interests, achievements, education } from "@/content/me";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import styles from "./Beyond.module.css";

export function Beyond() {
  return (
    <Section
      id="beyond"
      index="06"
      kicker="Beyond the code"
      title="Life happens away from the keyboard."
    >
      <div className={styles.interests}>
        {interests.map((it, i) => (
          <article
            key={it.title}
            className={styles.interest}
            data-reveal
            style={{ "--reveal-delay": `${(i % 2) * 70}ms` } as React.CSSProperties}
          >
            <span className={styles.icon}>
              <Icon name={it.icon} size={22} />
            </span>
            <div>
              <h3 className={styles.interestTitle}>{it.title}</h3>
              <p className={styles.interestBody}>{it.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.extra}>
        <div className={styles.block} data-reveal>
          <header className={styles.blockHead}>
            <span className={styles.blockIcon}>
              <Icon name="sparkles" size={18} />
            </span>
            <div>
              <p className={styles.subhead}>Recognition</p>
              <p className={styles.blockLead}>
                A few things I&apos;m proud of.
              </p>
            </div>
          </header>
          <ul className={styles.achList}>
            {achievements.map((a) => (
              <li key={a.title} className={styles.ach}>
                <div className={styles.achBody}>
                  {a.href ? (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.achTitleLink}
                    >
                      {a.title}
                      <Icon name="arrow-up-right" size={14} />
                    </a>
                  ) : (
                    <span className={styles.achTitle}>{a.title}</span>
                  )}
                  <span className={styles.achDetail}>{a.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block} data-reveal>
          <header className={styles.blockHead}>
            <span className={styles.blockIcon}>
              <Icon name="architecture" size={18} />
            </span>
            <div>
              <p className={styles.subhead}>Education</p>
              <p className={styles.blockLead}>
                Where the foundations were laid.
              </p>
            </div>
          </header>
          <ul className={styles.eduList}>
            {education.map((e) => (
              <li key={e.school} className={styles.edu}>
                <h4 className={styles.eduCred}>{e.credential}</h4>
                <span className={styles.eduSchool}>{e.school}</span>
                {e.period ? (
                  <span className={styles.eduMeta}>{e.period}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Beyond;
