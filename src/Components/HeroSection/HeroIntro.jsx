import styles from './Hero.module.css'


export default function HeroIntro(){
    return(
        <div id="HeroSection" className={`${styles.HeroIntro} ${styles.HeroCommon}`}>
            <div className={styles.introContent}>
                <span className={styles.hello}>Hello</span>
                <span className={styles.introText}>I'm David !</span>
            </div>
        </div>
    )
}