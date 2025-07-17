import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
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
import BirlaOpusPaintOverview from "./components/BirlaOpusPaintOverview";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // show scroll to top after 100vh
      const showAfter = window.innerHeight;
      setShowScrollTop(currentY > showAfter);

      // hide topbar when scrolling down
      if (currentY > lastScrollY && currentY > 100) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      {!hideTopBar && <TopBar />}
      <div className={styles.stickyNavbar}>
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
      {/* <BirlaOpusPaintOverview /> */}
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
