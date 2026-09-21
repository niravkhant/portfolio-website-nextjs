import { testimonials } from "@/data/portfolioData";
import Card from "@/components/ui/Card/Card";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import styles from "./Testimonials.module.scss";

function StarIcon() {
  return (
    <svg className={styles.star} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.26 6.8.56-5.15 4.46 1.55 6.64L12 16.9l-6.1 3.02 1.55-6.64-5.15-4.46 6.8-.56L12 2Z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className={styles.section}
      aria-labelledby="testimonials-title"
    >
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Clients Say"
            subtitle="Feedback from teams and founders I've partnered with on web products."
            center
          />
        </FadeIn>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <FadeIn key={item.name} delay={index * 80}>
              <Card padding="xl" interactive className={styles.card}>
                <div className={styles.stars} aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className={styles.quote}>&ldquo;{item.quote}&rdquo;</blockquote>
                <footer className={styles.author}>
                  <span className={styles.avatar} aria-hidden="true">
                    {item.name.charAt(0)}
                  </span>
                  <div className={styles.meta}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.role}>{item.role}</p>
                  </div>
                </footer>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
