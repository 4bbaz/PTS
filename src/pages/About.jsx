import style from "./About.module.scss";
import styles from "../components/navbar.module.scss";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/" className={styles.link}>
          <h3 className={styles.name}>Progress Tracker System Adminstractor</h3>
        </Link>
        <div className={styles.links}>
          <Link to="/about" className={styles.logout}>
            About
          </Link>
          <Link to="/contact" className={styles.logout}>
            Contact
          </Link>
        </div>
      </div>

      <div className={style.about_content}>
        <div className={style.details}>
          <h2 className={style.title}>About</h2>
          <p>
            I'm building a web application using React JS to help trainers track
            their students' progress more efficiently. Trainers can log in to
            the platform and easily input daily progress, including demo and
            assessment results, as well as feedback from mock interviews. The
            system will also send alert emails to keep everyone informed,
            including candidates, their parents, and trainers, ensuring seamless
            communication and progress monitoring.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
