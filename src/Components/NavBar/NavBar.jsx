
import NavBarLeft from './NavBarLeft';
import NavBarTop from './NavBarTop';

import styles from './NavBar.module.css'

export default function NavBar(){

    return (
      <nav className="flex flex-col z-2">
        <NavBarTop />
        <NavBarLeft />
      </nav>
      );
    
    
}