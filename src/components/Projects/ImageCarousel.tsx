"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  contain?: boolean;
  onImageClick?: () => void;
}

export default function ImageCarousel({ images, alt, contain, onImageClick }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const totalImages = images.length;

  // Auto-scroll logic
  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 3000);
  }, [totalImages]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  // Handle hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    startAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    stopAutoScroll();
    setCurrentIndex(0); // Reset to first image
  };

  // Handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startX) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % totalImages);
      } else {
        setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
      }
      setStartX(0);
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      stopAutoScroll();
    };
  }, [stopAutoScroll]);

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onClick={onImageClick}
    >
      <div
        ref={carouselRef}
        className={`${styles.carousel} ${isDragging ? styles.dragging : ""}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isHovered && !isDragging ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {images.map((src, index) => (
          <div key={index} className={styles.carouselItem}>
            <Image
              src={src}
              alt={`${alt} - Image ${index + 1}`}
              width={270}
              height={180}
              className={`${styles.carouselImage} ${contain ? styles.contain : ""}`}
            />
          </div>
        ))}
      </div>

      {totalImages > 1 && (
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(index);
              }}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
