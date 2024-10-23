import styles from "./NavBar.module.css";
import Logo from "../../assets/Logo.jpg";
import ResumePdf from "../../assets/DAVID_FRANKLIN_D_resume_BioIT_Software_developer.pdf"

import TopBanner from "../../assets/sea_beach.jpg";

export default function NavBarTop() {
  return (
    <nav className="w-full h-32 top-0 fixed z-2 bg-whitw bg-opacity-10 backdrop-blur-lg flex flex-row">
      
      <div className="w-1/2 flex flex-row">
        <div className="relative top-6 h-14 flex bg-opacity-70 bg-dba39a">
          <img className="w-14 h-14 rounded-full object-cover" src={Logo} />
        </div>
        <div className={styles.NavText}>
          <span className={styles.NavName}>David Franklin D</span>
          <br></br>
          
            <span className={styles.Navinfo}>Portifolio</span>
          
        </div>
      </div>

      <div className={styles.NavTopContainer2}>
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
      </div>
    </nav>
  );
}
