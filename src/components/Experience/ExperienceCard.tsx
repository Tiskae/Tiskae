import Image from "next/image";
import type { Experience } from "@/types";
import styles from "./Experience.module.scss";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className={styles.experience}>
      <a href="#" className={styles.logoLink} target="_blank" rel="noopener noreferrer" aria-label={experience.company}>
        <Image src={experience.logoSrc} alt={experience.logoAlt} width={40} height={40} className={styles.logo} />
      </a>
      <div className={styles.headings}>
        <h3 className={styles.company}>{experience.company}</h3>
        <p className={styles.title}>{experience.role}</p>
        <p className={styles.duration}>{experience.duration}</p>
      </div>
      <ul className={styles.details}>
        {experience.details.map((detail, i) => (
          <li key={i}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
