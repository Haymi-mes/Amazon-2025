import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
function FooterRecommendarion() {
  const scroller = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className={styles.footerRecommendarion}>
      <div className={styles.reco}>
        <h1>See personalized recommendations</h1>
        <button>Sign in</button>
        <p>
          New Customer? <a href="">stay here</a>
        </p>
      </div>
      <div>
        <button className={styles.bactToTop} onClick={scroller}>
          Back to top
        </button>
      </div>
    </section>
  );
}

export default FooterRecommendarion;
