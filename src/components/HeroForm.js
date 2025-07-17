import React, { useState } from 'react';
import styles from './HeroForm.module.css';
import { getDatabase, ref, push } from "firebase/database";
import { app } from "../firebase";

const HeroForm = () => {
  // Initialize database
  const db = getDatabase(app);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    investment: '',
    city: '',
    state: ''
  });
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in required fields: Name, Email, and Phone');
      return;
    }

    try {
      // Push data to Firebase
      const applicationsRef = ref(db, 'applications');
      await push(applicationsRef, formData);
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        investment: '',
        city: '',
        state: ''
      });
      
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.overlay}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.heading}>Get in touch!</h2>
          <p className={styles.subheading}>Apply Now</p>

          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            className={styles.input} 
            value={formData.name}
            onChange={handleChange}
            required
          />
          
          <div className={styles.row}>
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              className={styles.input} 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone" 
              className={styles.input} 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <select 
            name="businessType"
            className={styles.input}
            value={formData.businessType}
            onChange={handleChange}
          >
            <option value="">Select Business Type</option>
            <option value="Dealer">Dealer</option>
            <option value="Distributor">Distributor</option>
          </select>

          <select 
            name="investment"
            className={styles.input}
            value={formData.investment}
            onChange={handleChange}
          >
            <option value="">Investment & Financial Details</option>
            <option value="Below ₹5 Lakh">Below ₹5 Lakh</option>
            <option value="₹5–10 Lakh">₹5–10 Lakh</option>
            <option value="Above ₹10 Lakh">Above ₹10 Lakh</option>
          </select>

          <div className={styles.row}>
            <input 
              type="text" 
              name="city"
              placeholder="City" 
              className={styles.input} 
              value={formData.city}
              onChange={handleChange}
            />
            <input 
              type="text" 
              name="state"
              placeholder="State" 
              className={styles.input} 
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.button}>
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;