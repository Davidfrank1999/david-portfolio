import styles from './NavBar.module.css'
import { Link } from 'react-scroll';

import HomeIcon from '../../assets/home_7509544.png'
import AboutIcon from '../../assets/web-programming_7509599.png'
import SkillIcon from '../../assets/various_7509541.png'
import ProjectIcon from '../../assets/search_7509583.png'

import BookmarkIcon from '../../assets/folder_7509503.png'
import DownIcon from '../../assets/ascending-sort_7509511.png'

import ContactIcon from '../../assets/arroba_7509510.png'
import UserAvatarsIcon from '../../assets/User_avatars_(Sketch_file).jpg'



export default function NavBarLeft() {
  return (
    <div className={styles.Navbarleft}>
        <div className={`${styles.NavleftUpper} ${styles.NavleftCommon}`}>
          <Link className={`${styles.NavIcon}`} activeClass='active' to="HeroSection" spy={true} smooth={true} offset={-200} duration={500}><img className={`${styles.IconSet}`} src={HomeIcon}/></Link>

          <Link className={`${styles.NavIcon}`} activeClass='active' to="AboutSection" spy={true} smooth={true} offset={-200} duration={500}><img className={`${styles.IconSet}`} src={AboutIcon}/></Link>
          <Link className={`${styles.NavIcon}`} activeClass='active' to="SkillSection" spy={true} smooth={true} offset={-200} duration={500}><img className={`${styles.IconSet}`} src={SkillIcon}/></Link>
          <Link className={`${styles.NavIcon}`} activeClass='active' to="ProjectSection" spy={true} smooth={true} offset={-200} duration={500}><img className={`${styles.IconSet}`} src={ProjectIcon}/></Link>
        </div>
        <div className={`${styles.NavleftMiddle} ${styles.NavleftCommon}`}>
          <Link className={`${styles.NavIcon}`}q ><img className={`${styles.IconSet}`} src={BookmarkIcon}/></Link>
          <Link className={`${styles.NavIcon}`} activeClass='active' to="FooterSection" spy={true} smooth={true} offset={-200} duration={500}><img className={`${styles.IconSet}`} src={DownIcon}/></Link>
        </div>
        <div className={`${styles.NavleftBottom} ${styles.NavleftCommon}`}>
          <Link className={`${styles.NavIcon}`} activeClass='active' to="ContactSection" spy={true} smooth={true} offset={-200} duration={500}><img className={`${styles.IconSet}`} src={ContactIcon}/></Link>
          <div className={`${styles.NavIcon}`}><img className={`${styles.NavIcon}`} src={UserAvatarsIcon}/></div>
        </div>
    </div>
  );
}
