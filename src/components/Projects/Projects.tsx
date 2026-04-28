import styles from "./Projects.module.scss";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section className={styles.sectionProjects} id="projects" data-section="projects">
      <h2 className="mono">Some Featured Projects</h2>

      <div className={styles.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* <a
        href="https://github.com/Tiskae?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn btn--view-all ${styles.viewAll}`}
      >
        <svg>
          <use href="/sprite.svg#icon-github-green" />
        </svg>
        View all
      </a> */}
    </section>
  );
}
