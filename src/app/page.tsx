import styles from "./page.module.scss";
import Loader from "@/components/Loader/Loader";
import SocialHandles from "@/components/SocialHandles/SocialHandles";
import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.bodyContainer}>
      <Loader />
      <SocialHandles />
      <main className={styles.mainContainer}>
        <Header />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </main>
      <Navigation />
    </div>
  );
}
