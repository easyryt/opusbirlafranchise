import React, { useRef } from 'react';
import styles from './PopularColorSlider.module.css';

const colors = [
  {
    name: "Spring foreste",
    code: "YG 8083",
    bgColor: "#E8D958"
  },
  {
    name: "NN 8194 Strawberry shortcake",
    code: "RR 3076",
    bgColor: "#C46D66"
  },
  {
    name: "Nectarine",
    code: "YR 2027",
    bgColor: "#FBA34B"
  },
  {
    name: "Blissful Aqua",
    code: "BG 2024",
    bgColor: "#A3D8D8"
  },
  {
    name: "Lime Spark",
    code: "YL 9010",
    bgColor: "#D7E77A"
  }
];

const PopularColorSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Popular colours</h2>
      <p className={styles.subheading}>
        Explore the popular shades! With the reputation of elevating any space, these colours can be used as combinations or by themselves.
      </p>

      <div className={styles.sliderContainer}>
        <button className={styles.arrow} onClick={() => scroll('left')}>‹</button>
        <div className={styles.slider} ref={scrollRef}>
          {colors.map((color, index) => (
            <div className={styles.card} key={index}>
              <div
                className={styles.circle}
                style={{ backgroundColor: color.bgColor }}
              />
              <h4 className={styles.colorName}>{color.name}</h4>
              <p className={styles.colorCode}>{color.code}</p>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={() => scroll('right')}>›</button>
      </div>
    </section>
  );
};

export default PopularColorSlider;
