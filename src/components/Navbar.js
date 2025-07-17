import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="https://opusbirlafranchise.com/assets/img/birla-opus-logo-v1.svg"
          alt="Birla Opus"
        />
      </div>

      <div className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <a href="#home" onClick={closeMenu}>HOME</a>
        <a href="#about" onClick={closeMenu}>ABOUT US</a>
        <a href="#apply" onClick={closeMenu}>APPLY NOW</a>
        <a href="#franchise" onClick={closeMenu}>FRANCHISE OPPORTUNITY</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
      </nav>
    </header>
  );
};

export default Navbar;
