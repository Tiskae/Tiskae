import styles from './Experience.module.scss';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/content';

export default function Experience() {
  return (
    <section className={styles.sectionExperiences} id="experience" data-section="experience">
      <h2 className="mono">Work Experience</h2>
      <div className={styles.experiences}>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} />
        ))}
      </div>
    </section>
  );
}
