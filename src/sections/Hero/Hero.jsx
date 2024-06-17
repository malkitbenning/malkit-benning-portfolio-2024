import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import linkedInIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.Hero} src={heroImg} alt="Profile Picture of Malkit Benning" />
        <img className={styles.ColorMode} src={themeIcon} alt="Color Mode Icon" />
      </div>
      <div className={styles.info}>
        <h1>
          Malkit
          <br />
          Benning
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/malkit-benning" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn icon" />
          </a>
          <a href="https://github.com/malkitbenning" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
        </span>
        <p>Versatile software developer with a passion for developing I.T solutions.</p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
