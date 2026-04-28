'use client';

import { useState, useEffect } from 'react';
import { headerSkills } from '@/data/content';
import styles from './Header.module.scss';

export default function SkillCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headerSkills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {headerSkills.map((skill, i) => (
        <div
          key={skill.name}
          className={`${styles.carouselItem} ${i === activeIndex ? styles.carouselItemActive : ''}`}
        >
          <div>
            <svg>
              <use href={`/sprite.svg#${skill.iconId}`} />
            </svg>
          </div>
          <h3>{skill.name}</h3>
        </div>
      ))}
    </>
  );
}
