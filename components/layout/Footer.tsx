import { profile } from "@/content/me";
import { Icon } from "@/components/ui/Icon";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {profile.name}. All rights reserved.
        </p>

        <a href="#top" className={styles.top}>
          Back to top
          <span className={styles.topIcon}>
            <Icon name="arrow-up-right" size={15} />
          </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
