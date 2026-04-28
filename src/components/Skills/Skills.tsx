import styles from './Skills.module.scss';
import { skills } from '@/data/content';

export default function Skills() {
  return (
    <section className={styles.sectionSkills} id="skills" data-section="skills">
      <h2 className="mono">Tools I work with</h2>
      <div className={styles.skillBoxes}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillBox}>
            <div>
              <svg>
                <use href={`/sprite.svg#${skill.iconId}`} />
              </svg>
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
