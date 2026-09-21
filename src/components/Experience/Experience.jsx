import { experiences } from "@/data/portfolioData";
import Card from "@/components/ui/Card/Card";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-title"
    >
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Career"
            title="Experience"
            subtitle="Roles where I've shipped products, mentored teams, and raised the bar for frontend quality."
            center
          />
        </FadeIn>

        <div className={styles.timeline}>
          {experiences.map((job, index) => (
            <FadeIn key={job.company + job.duration} delay={index * 80}>
              <article className={styles.item}>
                <Card padding="xl" interactive>
                  <p className={styles.company}>{job.company}</p>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.duration}>{job.duration}</p>
                  <p className={styles.description}>{job.description}</p>
                  <p className={styles.techLabel}>Technologies:</p>
                  <p className={styles.techList}>{job.technologies.join(" • ")}</p>
                </Card>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
