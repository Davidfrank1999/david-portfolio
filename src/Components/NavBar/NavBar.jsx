
import NavBarLeft from './NavBarLeft';
import NavBarTop from './NavBarTop';

import styles from './NavBar.module.css'

export default function NavBar(){

    return (
      <nav className={styles.Nav}>
        <NavBarTop />
        <NavBarLeft />
      </nav>
      );
    
    
}