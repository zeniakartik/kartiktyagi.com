import Image from "next/image";
import { profile, stats } from "@/content/me";
import { Icon } from "@/components/ui/Icon";
import { RoleRotator } from "./RoleRotator";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="intro" className={styles.hero} aria-label="Introduction">
      <div className={styles.avatarWrap} data-reveal>
        <span className={styles.avatarRing}>
          <Image
            src={profile.photo.src}
            alt={profile.photo.alt}
            width={92}
            height={92}
            priority
            className={styles.avatar}
          />
        </span>
        <span className={styles.status}>
          <span className={styles.dot} aria-hidden />
          {profile.availability}
        </span>
      </div>

      <p className={styles.eyebrow} data-reveal style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
        <Icon name="spark" size={14} />
        <RoleRotator roles={profile.roles} />
      </p>

      <h1 className={styles.title} data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
        <span className={styles.name}>{profile.name}</span>
        <span className={styles.statement}>{profile.headline}</span>
      </h1>

      <p className={styles.intro} data-reveal style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
        {profile.intro}
      </p>

      <div className={styles.ctas} data-reveal style={{ "--reveal-delay": "240ms" } as React.CSSProperties}>
        <a href="#projects" className={styles.primary}>
          Explore my work
          <Icon name="arrow-right" size={17} />
        </a>
        <a href="#contact" className={styles.ghost}>
          Let&apos;s talk
        </a>
      </div>

      <ul className={styles.stats} data-reveal style={{ "--reveal-delay": "300ms" } as React.CSSProperties}>
        {stats.map((s) => (
          <li key={s.label} className={styles.stat}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
            {s.detail ? (
              <span className={styles.statDetail}>{s.detail}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Hero;
