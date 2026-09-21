import { statistics, statisticsFootnotes } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import styles from "./Stats.module.scss";

export default function Stats() {
  return (
    <section id="stats" className={styles.section} aria-labelledby="stats-title">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Highlights"
            title="By the Numbers"
            subtitle="Metrics that reflect consistency, scale, and craft across projects and teams."
            center
          />
        </FadeIn>

        <FadeIn delay={80}>
          <div className={styles.band}>
            <div className={styles.grid}>
              {statistics.map((stat) => (
                <div key={stat.label} className={styles.item}>
                  <p className={styles.value}>{stat.value}</p>
                  <p className={styles.label}>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className={styles.divider} aria-hidden="true" />
            <p className={styles.footnote}>
              {statisticsFootnotes.map((line) => (
                <span key={line} className={styles.footnoteItem}>
                  <span className={styles.footnoteDot} aria-hidden="true">
                    •
                  </span>
                  {line}
                </span>
              ))}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
