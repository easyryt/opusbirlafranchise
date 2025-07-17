import React from 'react';
import styles from './IdeasSection.module.css';

const ideas = [
  {
    title: 'Decor Nook',
    image: 'https://opusbirlafranchise.com/admin/uploads/how-tos-aditya-birla-paint-desk.jpg',
  },
  {
    title: 'Lifestyle',
    image: 'https://opusbirlafranchise.com/admin/uploads/lifestyle-aditya-birla-paints-desk.jpg',
  },
  {
    title: 'Homes',
    image: 'https://opusbirlafranchise.com/admin/uploads/homes-birla-opus-desk.jpg',
  },
];

const IdeasSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Ideas</h2>
      <p className={styles.subheading}>
        Discover inspiring interior design ideas for your home, the latest trends in home decor, and so much more.
      </p>

      <div className={styles.cardContainer}>
        {ideas.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.caption}>{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IdeasSection;
