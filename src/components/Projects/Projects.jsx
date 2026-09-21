import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import FadeIn from "@/components/ui/FadeIn/FadeIn";
import ProjectsCarousel from "./ProjectsCarousel";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className="section-container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Projects"
            subtitle="A snapshot of products and interfaces I've designed and built for clients and teams."
            center
          />
        </FadeIn>

        <div className={styles.sliderWrap}>
          <ProjectsCarousel />
        </div>
      </div>
    </section>
  );
}
