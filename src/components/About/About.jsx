import { aboutStats } from "@/data/portfolioData";
import Card from "@/components/ui/Card/Card";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className="section-container">
        <div className={styles.layout}>
          <FadeIn className={styles.stickyTitle}>
            <h2 id="about-title" className={styles.title}>
              About Me
            </h2>
          </FadeIn>
          <FadeIn delay={80}>
            <p className={styles.body}>
              I&apos;m a frontend developer passionate about crafting polished,
              accessible web experiences. I combine design sensibility with solid
              engineering — from component architecture and performance tuning to
              pixel-perfect UI implementation. I thrive in collaborative environments
              where quality, clarity, and user experience come first.
            </p>
            <div className={styles.stats}>
              {aboutStats.map((stat) => (
                <Card
                  key={stat.label}
                  interactive
                  tight
                  className={styles.statCard}
                >
                  <p className={styles.statLabel}>{stat.label}</p>
                  <p className={styles.statValue}>{stat.value}</p>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
