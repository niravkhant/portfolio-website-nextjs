import { services } from "@/data/portfolioData";
import Card from "@/components/ui/Card/Card";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import styles from "./Services.module.scss";

const icons = {
  code: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m8 8 4 4-4 4M16 8l-4 4 4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  layers: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 18l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  layout: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 10h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  zap: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="What I Do"
            subtitle="End-to-end frontend capabilities — from architecture and implementation to polish and performance."
            center
          />
        </FadeIn>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 70}>
              <Card interactive padding="xl" className={styles.card}>
                <div className={styles.iconWrap}>{icons[service.icon]}</div>
                <p className={styles.eyebrow}>{service.eyebrow}</p>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
