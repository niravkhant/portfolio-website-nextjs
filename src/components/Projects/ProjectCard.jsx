import Card from "@/components/ui/Card/Card";
import Button from "@/components/ui/Button/Button";
import styles from "./Projects.module.scss";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <Card padding="none" className={styles.card}>
      <div className={styles.preview}>
        <div
          className={styles.previewInner}
          style={{ background: project.gradient }}
          role="img"
          aria-label={`${project.title} preview`}
        >
          {project.image ? <Image src={project.image} alt={`${project.title} preview`} fill className={styles.previewImage} /> : null}
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{project.category}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.actions}>
          <Button href={project.liveUrl} variant="primary" size="sm">
            Live Demo
          </Button>
          <Button href={project.githubUrl} variant="outline" size="sm">
            GitHub
          </Button>
        </div>
      </div>
    </Card>
  );
}
