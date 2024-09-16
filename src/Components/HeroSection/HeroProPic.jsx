import styles from './Hero.module.css'
import ProPic from '../../assets/David_coat.png'

export default function HeroProPic(){
    return(
            <img className={`${styles.HeroPic} ${styles.HeroCommon}`} src={ProPic} alt='Profile_Pic_David'></img>
    )
}