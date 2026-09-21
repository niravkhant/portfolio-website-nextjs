"use client";

import { projects } from "@/data/portfolioData";
import CarouselSwiper, {
  CarouselSlide,
  DESKTOP_THREE_BREAKPOINTS,
} from "@/components/ui/CarouselSwiper/CarouselSwiper";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.scss";

export default function ProjectsCarousel() {
  return (
    <CarouselSwiper
      className={styles.slider}
      breakpoints={DESKTOP_THREE_BREAKPOINTS}
      slidesPerView={1}
      spaceBetween={16}
      slidesPerGroup={1}
      autoplay
      showHeaderNav
      showPagination
    >
      {projects.map((project) => (
        <CarouselSlide key={project.title}>
          <ProjectCard project={project} />
        </CarouselSlide>
      ))}
    </CarouselSwiper>
  );
}
