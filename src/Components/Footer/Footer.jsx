import styles from './Footer.module.css'
import boatImg from '../../assets/boat_sea.png'
import boy_computor from '../../assets/boy_computor.png'

export default function Footer(){
    return(
        <footer id="FooterSection" className={styles.FooterSection}>
            <img className={styles.BoatImg} src={boatImg} ></img>
            <div className={styles.FooterContact}>
                <h3>Contact</h3>
                <ul>
                    <li>Email - davidfranklin1999@gmail.com</li>
                    <li>Phone - 7339695655</li>
                
                <hr></hr>
                    <li>Built using ReactJS</li>
                </ul>
            </div>
            <img className={styles.BoatImg} src={boy_computor} alt="boy computor" />


        </footer>
    )
}