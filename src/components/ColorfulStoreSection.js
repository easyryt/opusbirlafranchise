import React from 'react';
import styles from './ColorfulStoreSection.module.css';

const ColorfulStoreSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textBox}>
        <h2 className={styles.heading}>Our stores: Step into our colourful world</h2>
        <p className={styles.subtext}>
          Visit our stores and explore a spectrum of colours and designs to inspire your next paint project.<br />
          Connect with our experts for an interactive colour consultation.
        </p>
      </div>
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://opusbirlafranchise.com/assets/img/product-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default ColorfulStoreSection;
