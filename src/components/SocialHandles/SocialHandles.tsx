import styles from './SocialHandles.module.scss';
import { socialLinks } from '@/data/content';

export default function SocialHandles() {
  return (
    <div className={styles.socialHandles}>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              <svg className={link.iconId === 'icon-github' ? styles.github : undefined}>
                <use href={`/sprite.svg#${link.iconId}`} />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
