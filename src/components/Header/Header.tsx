import Image from "next/image";
import styles from "./Header.module.scss";
import SkillCarousel from "./SkillCarousel";

export default function Header() {
  return (
    <section className={styles.sectionHeader} id="intro" data-section="intro">
      {/* Skills carousel — col 1, row 1 */}
      <div className={`${styles.headerComponent} ${styles.componentSkills}`}>
        <SkillCarousel />
      </div>

      {/* Profile pic — col 2, row 1 */}
      <div className={`${styles.headerComponent} ${styles.componentProfilePic}`}>
        <Image src="/img/profile-img.jpeg" alt="My profile picture" width={250} height={250} priority />
      </div>

      {/* Name — col 1–2, row 2 */}
      <div className={`${styles.headerComponent} ${styles.componentName}`}>
        <div className={styles.componentNameInner}>
          <span className={styles.iAm}>I&apos;m</span>
          <h1>Tiskae</h1>
          <p className={styles.tagline}>&#x2329;Software Developer /&#x232a;</p>
        </div>
      </div>

      {/* About me — col 3, row 1–2 */}
      <div className={`${styles.headerComponent} ${styles.componentAboutMe}`}>
        <div className={styles.componentAboutMeInner}>
          <div className={styles.aboutMe}>
            <h3 className="mono">
              <svg>
                <use href="/sprite.svg#icon-info" />
              </svg>
              About me
            </h3>
            <p>
              I am Ibrahim Adedokun (Tiskae), a Software Engineer with 5 years of experience building high-performance
              web applications for global startups using Next.js, TypeScript, Node.js, and Golang.
              <br />
              <br />
              Alongside my engineering roles, I also act as a technical partner for high-ticket brands, specifically
              automobile dealerships and luxury real estate. I build premium digital storefronts that close the trust
              gap and convert high-net-worth traffic into verified leads.
              <br />
              <br />I am open to remote global engineering roles and hybrid/onsite roles in Lagos, Nigeria. Whether you
              are a tech company looking to scale your engineering team or a premium brand ready to upgrade your digital
              presence, feel free to reach out via{" "}
              <a
                className={styles.highlighted}
                href={"https://api.whatsapp.com/send?phone=2349120448767"}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>{" "}
              or any of my contacts in the left sidebar to discuss execution.
            </p>

            <div className={styles.btnRow}>
              {/* <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Download CV
              </a> */}
              <a
                href="https://api.whatsapp.com/send?phone=2349120448767"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
