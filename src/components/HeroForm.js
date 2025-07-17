import React from 'react';
import styles from './HeroForm.module.css';

const HeroForm = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}>
        <form className={styles.form}>
          <h2 className={styles.heading}>Get in touch!</h2>
          <p className={styles.subheading}>Apply Now</p>

          <input type="text" placeholder="Name" className={styles.input} />
          <div className={styles.row}>
            <input type="email" placeholder="Email" className={styles.input} />
            <input type="tel" placeholder="Phone" className={styles.input} />
          </div>

          <select className={styles.input}>
            <option>Select Business Type</option>
            <option>Dealer</option>
            <option>Distributor</option>
          </select>

          <select className={styles.input}>
            <option>Investment & Financial Details</option>
            <option>Below ₹5 Lakh</option>
            <option>₹5–10 Lakh</option>
            <option>Above ₹10 Lakh</option>
          </select>

          <div className={styles.row}>
            <input type="text" placeholder="City" className={styles.input} />
            <input type="text" placeholder="State" className={styles.input} />
          </div>

          <button className={styles.button}>Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
