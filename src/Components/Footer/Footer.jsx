import React from "react";
import styles from "./Footer.module.css";
import FooterRecommendarion from "./FooterRecommendarion";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";

function Footer() {
  return (
    <section>
      <FooterRecommendarion />
      <UpperFooter />
      <LowerFooter />
    </section>
  );
}

export default Footer;
