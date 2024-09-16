import styles from './Skill.module.css'
import SkillAnalyst from './SkillAnalyst.jsx'
import SkillSoftDev from './SkillSoftDev.jsx'

export default function Skill(){

    

    return(
        <section id="SkillSection" className={styles.Skill}>
            <div className={styles.SkillContainer1}>
                <div className={styles.title}>BioInfo Analysit</div>
                <div className={styles.title}>Software Developer</div>
            </div>
            <div className={styles.SkillContainer2}>
                <SkillAnalyst />
                <SkillSoftDev />
            </div>
        </section>
    )
}