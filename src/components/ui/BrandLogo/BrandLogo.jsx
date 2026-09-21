import { siteMeta } from "@/data/portfolioData";
import styles from "./BrandLogo.module.scss";

export default function BrandLogo({
  className = "",
  size = "md",
  href,
  onClick,
}) {
  const firstName = siteMeta.name.split(" ")[0];
  const sizeClass = size === "sm" ? styles.sm : styles.md;

  const content = (
    <>
      <span className={styles.mark} aria-hidden="true">
        <span className={styles.monogram}>
          <span className={styles.brace}>{"{"}</span>
          <span className={styles.letter}>N</span>
          <span className={styles.brace}>{"}"}</span>
        </span>
      </span>
      <span className={styles.wordmark}>
        {firstName}
        <span className={styles.dot}>.</span>
      </span>
    </>
  );

  const classes = `${styles.brand} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return <span className={classes}>{content}</span>;
}
