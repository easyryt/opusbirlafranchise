import React, { useState } from "react";
import styles from "./ConnectFormSection.module.css";
import { getDatabase, ref, push } from "firebase/database";
import { app } from "../firebase"; // Adjust path as needed
import { useNavigate } from "react-router-dom";

const ConnectFormSection = () => {
  const db = getDatabase(app);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    investment: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Required field validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in Name, Email, and Phone fields");
      return;
    }

    try {
      // Push data to Firebase
      const applicationsRef = ref(db, "applications");

      // Add timestamp
      const formDataWithTimestamp = {
        ...formData,
        timestamp: new Date().toISOString(), // or Date.now() for Unix time
      };

      await push(applicationsRef, formDataWithTimestamp);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        investment: "",
        city: "",
        state: "",
      });

      navigate("/thankyou");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className={styles.banner}>
      <div className={styles.formContainer}>
        <div className={styles.leftContent}>
          <img
            src="https://opusbirlafranchise.com/assets/img/birla-opus-logo-v1.svg"
            alt="Logo"
            className={styles.logo}
          />
          <h2>Let's connect</h2>
          <p>Fill the form and our expert will reach out to you</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <div className={styles.row}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
          >
            <option value="">Select Business Type</option>
            <option value="Retail">Retail</option>
            <option value="Wholesale">Wholesale</option>
          </select>

          <select
            name="investment"
            value={formData.investment}
            onChange={handleChange}
          >
            <option value="">Investment & Financial Details</option>
            <option value="Below ₹5L">Below ₹5L</option>
            <option value="Above ₹5L">Above ₹5L</option>
          </select>

          <div className={styles.row}>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
};

export default ConnectFormSection;
