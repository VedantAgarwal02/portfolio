import React, {useState} from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'
var viewIcon = require('../../assets/nav/menuIcon.png')
var closeIcon = require('../../assets/nav/closeBtn.png')

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
         Portfolio
      </a>
      <div className={styles.menu}>
      <img className={styles.menuBtn} src={menuOpen?closeIcon:viewIcon} onClick={()=> setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
            <a href="#projects">Projects</a>
            </li>
            <li>
            <a href="#socials">Socials</a>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
