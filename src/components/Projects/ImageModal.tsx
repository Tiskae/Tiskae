"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./ImageModal.module.scss";

interface ImageModalProps {
  images: string[];
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function ImageModal({ images, alt, isOpen, onClose, title, githubUrl, liveUrl }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line
      setCurrentIndex(0);
    }
  }, [isOpen]);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  }, [images.length]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        case "Escape":
          onClose();
          break;
      }
    },
    [isOpen, onClose, handleNext, handlePrev],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ×
        </button>

        <div className={styles.imageContainer}>
          <button
            className={`${styles.navBtn} ${styles.prev} ${!hasPrev ? styles.disabled : ""}`}
            onClick={handlePrev}
            aria-label="Previous image"
            disabled={!hasPrev}
          >
            <svg>
              <use href="/sprite.svg#icon-chevron-left" />
            </svg>
          </button>

          <div className={styles.imageWrapper}>
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Image ${currentIndex + 1}`}
              fill
              className={styles.modalImage}
            />
          </div>

          <button
            className={`${styles.navBtn} ${styles.next} ${!hasNext ? styles.disabled : ""}`}
            onClick={handleNext}
            aria-label="Next image"
            disabled={!hasNext}
          >
            <svg>
              <use href="/sprite.svg#icon-chevron-right" />
            </svg>
          </button>
        </div>

        <div className={styles.indicator}>
          {currentIndex + 1} / {images.length}
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.actions}>
            {githubUrl && (
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
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn--live-preview ${styles.btnLivePreview}`}
              >
                <svg>
                  <use href="/sprite.svg#icon-eye" />
                </svg>
                Live preview
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
