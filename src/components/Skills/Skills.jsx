import { skillCategories } from "@/data/portfolioData";
import Card from "@/components/ui/Card/Card";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-title">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Expertise"
            title="Skills & Tech Stack"
            subtitle="Technologies and tools I use to build reliable, maintainable products."
            center
          />
        </FadeIn>

        <div className={styles.categories}>
          {skillCategories.map((category, catIndex) => (
            <FadeIn key={category.title} delay={catIndex * 60}>
              <div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <div className={styles.grid}>
                  {category.items.map((item) => (
                    <Card
                      key={item.name}
                      interactive
                      padding="lg"
                      className={styles.skillCard}
                    >
                      <span className={styles.icon} aria-hidden="true">
                        {item.name.slice(0, 2).toUpperCase()}
                      </span>
                      <span className={styles.skillName}>{item.name}</span>
                      <span className={styles.skillDesc}>{item.desc}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
