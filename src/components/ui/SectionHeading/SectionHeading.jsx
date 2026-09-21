import styles from "./SectionHeading.module.scss";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  className = "",
  titleId,
}) {
  return (
    <header
      className={`${styles.headingWrap} ${center ? styles.center : ""} ${className}`}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 id={titleId} className={styles.title}>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
  );
}
