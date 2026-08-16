import { profile, socials } from "@/content/me";
import { Icon } from "@/components/ui/Icon";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.colophon}>
          <p className={styles.built}>
            Designed &amp; built by {profile.name}.
          </p>
          <p className={styles.note}>
            Next.js · TypeScript · a hand-built neumorphic design system. No
            page builders, no templates.
          </p>
          <p className={styles.copy}>
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className={styles.right}>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className={styles.social}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  title={s.label}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
          <a href="#top" className={styles.top}>
            Back to top
            <span className={styles.topIcon}>
              <Icon name="arrow-up-right" size={15} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
