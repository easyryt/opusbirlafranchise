import React from 'react';
import styles from './AssuranceBanner.module.css';

const AssuranceBanner = () => {
  return (
    <div className={styles.banner}>
      <img
        src="https://opusbirlafranchise.com/images/assurance-component-desktop.webp"
        alt="Assurance Banner"
        className={styles.image}
      />
    </div>
  );
};

export default AssuranceBanner;
