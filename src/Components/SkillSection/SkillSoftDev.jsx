import styles from './Skill.module.css'

export default function SkillSoftDev(){

    const topics = {
        "Front End": ["HTML", "CSS", "JavaScript", "ReactJS", "Flask", "Django"],
        "Back End": ["Python",],
        "Database": ["PSQL"]
      };
    
      // List of colors to apply to skill boxes
      const colors = ["#ff9999", "#99ccff", "#ccff99", "#ffcc99", "#ffccff", "#ccccff"];

    return(
        <div className={styles.SkillSet}>
             {/* Loop through the topics dictionary */}
             {Object.entries(topics).map(([topic, skills], index) => (
                            <div key={index} className={styles.topic_column}>
                                <h2 className={styles.topic_title}>{topic}</h2>
                                <div className={styles.skills_box}>
                                    {/* Loop through the skills and assign random colors */}
                                    {skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className={styles.skill_box}
                                        style={{ backgroundColor: colors[skillIndex % colors.length] }}
                                    >
                                        {skill}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        ))}
        </div>
    )
}