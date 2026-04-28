import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <section className={styles.sectionFooter} id="footer" data-section="footer">
      <div className={styles.footerTexts}>
        <p>
          <span>Let&rsquo;s Connect</span>
          <br />
          Whether you&rsquo;re working on a new project, need a reliable frontend developer/engineer, or just want to
          chat about ideas, feel free to reach out. I&rsquo;m always open to conversations and great collaborations. You
          can start by using any of my contacts in the left sidebar or by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=2349120448767&text=Hello%20Tiskae,%20I%20just%20viewed%20your%20portfolio.%20I%20want%20to%20tell%20you..."
            className={styles.sayHi}
          >
            Saying HI
          </a>{" "}
          on WhatsApp.
        </p>
        <br />
        <p className={styles.footerQuote}>
          &rdquo;Always remember, you have within you the strength, the patience, and the passion to reach for the stars
          to change the world&ldquo;
          <br />
          <strong>- Harriet Tubman</strong>
        </p>
      </div>

      <div className={styles.footerIconBox}>
        <svg>
          <use href="/sprite.svg#icon-embed2" />
        </svg>
      </div>

      <div className={styles.footerFinals}>
        <div className={styles.footerAuthor}>
          <p>
            Designed and coded by<span>&nbsp;Tiskae&nbsp;</span>in
          </p>
          <div className={styles.nigeriaFlag}>
            <div className={styles.flagPart} />
            <div className={`${styles.flagPart} ${styles.flagPartWhite}`} />
            <div className={styles.flagPart} />
          </div>
        </div>
        <p className={styles.copyright}>&copy;Copyright 2026</p>
      </div>
    </section>
  );
}
