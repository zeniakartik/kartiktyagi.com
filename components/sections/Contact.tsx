import { profile, socials } from "@/content/me";
import { Icon } from "@/components/ui/Icon";
import styles from "./Contact.module.css";

export function Contact() {
  const email = socials.find((s) => s.icon === "mail");
  const secondary = socials.filter(
    (s) => s.icon === "linkedin" || s.icon === "github",
  );

  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <p className={styles.kicker} data-reveal>
        <span className="mono-label">What&apos;s next</span>
      </p>

      <h2 id="contact-title" className={styles.title} data-reveal>
        Let&apos;s build something that lasts.
      </h2>

      <p className={styles.lead} data-reveal>
        Whether it&apos;s an architecture you&apos;re shaping, a hard
        modernization problem, or a product still on the whiteboard — I&apos;d
        genuinely like to hear about it.
      </p>

      <div className={styles.actions} data-reveal>
        {email ? (
          <a href={email.href} className={styles.primary}>
            <Icon name="mail" size={18} />
            {email.handle}
          </a>
        ) : null}

        <div className={styles.secondary}>
          {secondary.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className={styles.ghost}
            >
              <Icon name={s.icon} size={17} />
              {s.label}
            </a>
          ))}
          <a
            href={profile.resume.href}
            target="_blank"
            rel="noreferrer"
            className={styles.ghost}
          >
            <Icon name="download" size={16} />
            {profile.resume.label}
          </a>
        </div>
      </div>

      <p className={styles.availability} data-reveal>
        <Icon name="map-pin" size={15} />
        {profile.location} · {profile.availability}
      </p>
    </section>
  );
}

export default Contact;
