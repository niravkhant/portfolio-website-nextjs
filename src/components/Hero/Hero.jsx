import { siteMeta } from "@/data/portfolioData";
import Button from "@/components/ui/Button/Button";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`section-container-wide ${styles.content}`}>
        <div className={styles.grid}>
          <FadeIn>
            <div className={styles.badge}>
              <span className={styles.dot} aria-hidden="true" />
              Available for Opportunities
            </div>
            <p className={styles.greeting}>Hi, I&apos;m {siteMeta.name.split(" ")[0]}</p>
            <h1 id="hero-heading" className={styles.title}>
              Building
              <span className={styles.highlight}>Digital Experiences</span>
              That Matter.
            </h1>
            <p className={styles.role}>{siteMeta.role}</p>
            <p className={styles.description}>
              Building modern, scalable &amp; high-performance web experiences.
            </p>
            <p className={styles.subtext}>
              I specialize in Next.js, React.js, JavaScript and modern frontend
              architecture.
            </p>
            <div className={styles.actions}>
              <Button
                href={siteMeta.resumeUrl}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={120} className={styles.visual}>
            <div className={styles.decorLine} aria-hidden="true" />
            <div className={styles.glassCard}>
              <p className={styles.cardTitle}>Core Focus</p>
              <div className={styles.stack}>
                <div className={styles.stackItem}>
                  <span className={styles.stackLabel}>Performance</span>
                  <span className={styles.stackValue}>98+</span>
                </div>
                <div className={styles.stackItem}>
                  <span className={styles.stackLabel}>Projects Delivered</span>
                  <span className={styles.stackValue}>20+</span>
                </div>
                <div className={styles.stackItem}>
                  <span className={styles.stackLabel}>Client Satisfaction</span>
                  <span className={styles.stackValue}>100%</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
