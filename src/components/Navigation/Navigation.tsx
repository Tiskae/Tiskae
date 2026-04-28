'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.scss';
import { navTabs } from '@/data/content';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.55 }
    );

    navTabs.forEach(({ sectionId }) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.navigation}>
      <ul>
        {navTabs.map((tab) => (
          <li key={tab.sectionId}>
            <a
              href={`#${tab.sectionId}`}
              className={activeSection === tab.sectionId ? styles.active : undefined}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
