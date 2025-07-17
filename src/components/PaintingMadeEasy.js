import React from 'react';
import styles from './PaintingMadeEasy.module.css';

const services = [
  {
    title: 'Painting services',
    img: 'https://opusbirlafranchise.com/media/upload/painting-service-aditya-birla-paints-desk.webp',
  },
  {
    title: 'Planning your paint project',
    img: 'https://opusbirlafranchise.com/media/upload/colour-consultation.webp',
  },
  {
    title: 'Learn some paint lingo',
    img: 'https://opusbirlafranchise.com/media/upload/recreate-colors.webp',
  },
];

const PaintingMadeEasy = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Painting Made Easy</h2>
      <p className={styles.subtext}>
        Discover our comprehensive services and resources for all your painting needs.
      </p>
      <div className={styles.cardContainer}>
        {services.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.img} alt={item.title} className={styles.image} />
            <div className={styles.caption}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaintingMadeEasy;
