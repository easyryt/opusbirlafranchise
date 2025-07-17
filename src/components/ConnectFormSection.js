import React from 'react';
import styles from './ConnectFormSection.module.css';

const ConnectFormSection = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.formContainer}>
        <div className={styles.leftContent}>
          <img
            src="https://opusbirlafranchise.com/assets/img/birla-opus-logo-v1.svg"
            alt="Logo"
            className={styles.logo}
          />
          <h2>Let’s connect</h2>
          <p>Fill the form and our expert will reach out to you</p>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <div className={styles.row}>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
          </div>
          <select>
            <option>Select Business Type</option>
            <option>Retail</option>
            <option>Wholesale</option>
          </select>
          <select>
            <option>Investment & Financial Details</option>
            <option>Below ₹5L</option>
            <option>Above ₹5L</option>
          </select>
          <div className={styles.row}>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default ConnectFormSection;
