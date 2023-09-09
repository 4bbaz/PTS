import { Link } from "react-router-dom";
import style from "./Contact.module.scss";
import styles from "../components/navbar.module.scss";
const Contact = () => {
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
      <div className={style.contact_content}>
        <div className={style.details}>
          <h2 className={style.title}>Contact US</h2>
          <p>Name : Althaf Hassan C </p>
          <p>Email : althafhassan979@gmail.com</p>
          <p> Phone : 8606572687</p>
        <div className={style.social}>
          <a href={`mailto:althafhassan979@gmail.com`}>
            <span className={style.gmail}></span>
          </a>
          <a
            href={`https://wa.me/8606572687`}
            target="_blank"
            rel="noopener noreferrer"
            >
            <span className={style.whatsapp}></span>
          </a>
        </div>
              </div>
      </div>
    </>
  );
};

export default Contact;
