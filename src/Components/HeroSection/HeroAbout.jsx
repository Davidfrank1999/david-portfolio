
import styles from './Hero.module.css'

export default function HeroAbout(){
    return(
        <div id="AboutSection" className={`${styles.HeroCommon} ${styles.HeroAbt}`}>
            <p className={styles.introPara}>A Passionate computational biologist, Software developer, and microbiologist dedicated to advancing datadriven
                insights in the life sciences. Adept at leveraging bioinformatics tools and programming languages to analyze complex
                biological data and develop innovative solutions.</p>
        </div>
    )
}