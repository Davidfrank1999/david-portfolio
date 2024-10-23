import styles from "./NavBar.module.css";
import Logo from "../../assets/Logo.jpg";
import ResumePdf from "../../assets/DAVID_FRANKLIN_D_resume_BioIT_Software_developer.pdf"

import TopBanner from "../../assets/sea_beach.jpg";

export default function NavBarTop() {
  return (
    <nav className={styles.Navbartop}>
      <div className={styles.NavTopContainer1}>
        <img className={styles.LogoImg} src={Logo} />
        <div>
          <span className={styles.NavName}>David Franklin D</span>
          <br/>
          <span className={styles.Navinfo}>Portifolio</span>
        </div>
      </div>

      {/* <div className={styles.NavTopContainer2}>
        <a href={ResumePdf} target="_blank" className={styles.ResumeLink}>
        <div className={`${styles.Rectangle1} ${styles.NavtopCommon}`}>
          
          <span>Resume</span>
          
        </div>
        </a>
        <div className={`${styles.Rectangle2} ${styles.NavtopCommon}`}>
          <img
            className={`${styles.Rectangle2} ${styles.Banner}`}
            src={TopBanner}
          />
        </div>
      </div> */}
    </nav>
  );
}
