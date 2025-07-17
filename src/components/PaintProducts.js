import React from 'react';
import styles from './PaintProducts.module.css';

const products = [
  {
    title: 'One True Life',
    desc: 'Discover unmatched protection and enduring elegance with Birla Opus One True Life...',
    price: 'Product starts from ₹<s>728</s> ₹555',
  },
  {
    title: 'One True Vision',
    desc: 'Introducing Birla Opus One True Vision, a revolutionary paint that sets new standards...',
    price: 'Product starts from ₹<s>1028</s> ₹673',
  },
  {
    title: 'One True Flex',
    desc: 'Experience the transformative power of Birla Opus One True Flex exterior paint. This...',
    price: 'Product starts from ₹<s>640</s> ₹474',
  },
];

const PaintProducts = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Paint Products</h2>

      <div className={styles.cardContainer}>
        {products.map((item, index) => (
          <div className={styles.card} key={index}>
            <img
              src="https://opusbirlafranchise.com/media/upload/birla-opus-one-true-life-website-mock.webp"
              alt={item.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
            <p className={styles.pack}>Available in 1, 4, 10, 20 Ltr pack sizes</p>
            <p className={styles.price} dangerouslySetInnerHTML={{ __html: item.price }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaintProducts;
