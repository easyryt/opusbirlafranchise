import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroForm from "./components/HeroForm";
import PopularColorSlider from "./components/PopularColorSlider";
import AssuranceBanner from "./components/AssuranceBanner";
import IdeasSection from "./components/IdeasSection";
import PaintProducts from "./components/PaintProducts";
import ColorfulStoreSection from "./components/ColorfulStoreSection";
import PaintingMadeEasy from "./components/PaintingMadeEasy";
import ConnectFormSection from "./components/ConnectFormSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > window.innerHeight);
      setIsScrolled(scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.stickyNavbar} ${isScrolled ? styles.scrolled : ''}`}>
        <Navbar />
      </div>

      <HeroForm />
      <PopularColorSlider />
      <AssuranceBanner />
      <IdeasSection />
      <PaintProducts />
      <ColorfulStoreSection />
      <PaintingMadeEasy />
      <ConnectFormSection />
      <FAQSection />
      <Footer />

      {showScrollTop && (
        <div className={styles.scrollTop} onClick={scrollToTop}>
          <span>↑</span>
        </div>
      )}
    </div>
  );
}

export default App;