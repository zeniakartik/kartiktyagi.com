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
      title="Life happens away from the keyboard, too."
      lead="I think in systems, but I recharge in the open air. A few things that keep me curious and balanced."
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
          <p className={styles.subhead}>Recognition</p>
          <ul className={styles.achList}>
            {achievements.map((a) => (
              <li key={a.title} className={styles.ach}>
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
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block} data-reveal>
          <p className={styles.subhead}>Education</p>
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
