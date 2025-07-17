import React from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.contactInfo}>
        <span className={styles.bullet}>▪</span>
        <span>Email: business@opusbirlafranchise.com</span>
        <span className={styles.bullet}>▪</span>
        <span>Call Us: +91 8653421800</span>
      </div>
      <button className={styles.applyBtn}>APPLY NOW</button>
    </div>
  );
};

export default TopBar;
