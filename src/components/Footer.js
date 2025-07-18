import React from "react";
import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"; // Import WhatsApp icon

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // Scroll to top after navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3>Sign up for our colour letter</h3>
          <div className={styles.logos}>
            <img
              src="https://opusbirlafranchise.com/assets/img/birla-opus-logo-v1.svg"
              alt="Birla Opus"
            />
            <img
              src="https://opusbirlafranchise.com/images/footer-aditya-birla.svg"
              alt="Aditya Birla"
            />
          </div>
          <p>
            Get vibrant ideas, expert decor tips, and colour trends to keep you
            updated
          </p>
        </div>

        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Franchise Opportunity</li>
            <li>Apply Now</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Policy</h3>
          <ul>
            <li onClick={() => handleNavigation("/privacy-policy")}>
              - Privacy Policy
            </li>
            <li onClick={() => handleNavigation("/terms-and-conditions")}>
              - Terms & Conditions
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p>
            Birla Opus Paints (Grasim Industries Ltd.) 9th Floor, Birla
            Centurion, Worli, Mumbai – 400030, Maharashtra, India
          </p>
          <p className={styles.email}>business@opusbirlafranchise.com</p>
          <p className={styles.whatsapp}>
            <a
              href="https://wa.me/918653421800"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              <WhatsAppIcon className={styles.whatsappIcon} />
              +91 8653421800
            </a>
          </p>
        </div>
      </div>

      <div className={styles.copyRight}>
        Copyright © 2025. Birla Opus all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
