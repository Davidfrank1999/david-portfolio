import HeroIntro from './HeroIntro.jsx'
import styles from './Hero.module.css'
import HeroProPic from './HeroProPic.jsx';
import HeroAbout from './HeroAbout.jsx';


export default function Hero() {
  return (
    <div className={styles.HeroContainer}>
      <HeroIntro />
      <HeroProPic />
      <HeroAbout />
    </div>
  );
}
