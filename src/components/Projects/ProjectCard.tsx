"use client";

import { useState } from "react";
import type { Project } from "@/types";
import ImageCarousel from "./ImageCarousel";
import ImageModal from "./ImageModal";
import styles from "./Projects.module.scss";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    title,
    description,
    note,
    imageSrc,
    images = [imageSrc],
    imageAlt,
    imageContain,
    githubUrl,
    liveUrl,
    tags,
  } = project;

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={styles.project}>
        <div className={styles.projectStacks}>
          <ul className={styles.stackList}>
            {tags.map((tag) => (
              <li key={tag} className={`${styles.stackItem}${tag.length > 6 ? ` ${styles.stackItemLong}` : ""}`}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <ImageCarousel images={images} alt={imageAlt} contain={imageContain} onImageClick={handleImageClick} />

        <div className={styles.projectInfos}>
          <h3 className={styles.projectHeading}>{title}</h3>
          <p className={styles.projectDescription}>
            {description}
            {note && (
              <>
                {" "}
                <span>
                  <em>{note}</em>
                </span>
              </>
            )}
          </p>

          <div className={styles.projectBtns}>
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn--view-code ${styles.btnViewCode}`}
              >
                <svg>
                  <use href="/sprite.svg#icon-github" />
                </svg>
                View code
              </a>
            ) : null}

            <a
              href={liveUrl || "#"}
              {...(liveUrl && { target: "_blank", rel: "noopener noreferrer" })}
              className={`btn btn--live-preview${!liveUrl ? " btn--disabled" : ""} ${styles.btnLivePreview}`}
              aria-disabled={!liveUrl}
            >
              <svg>
                <use href="/sprite.svg#icon-eye" />
              </svg>
              Live preview
            </a>
          </div>
        </div>
      </div>

      <ImageModal
        images={images}
        alt={imageAlt}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        githubUrl={githubUrl}
        liveUrl={liveUrl}
      />
    </>
  );
}
