import React from 'react'
import styles from "./Header.module.css";
import { CiMenuBurger } from "react-icons/ci";


function LowerHeader() {
  return (
    <div className={styles.lower__container}>
      <ul>
        <li>
          <CiMenuBurger />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Buy Again</li>
        <li>Customer Service</li>
        <li>Gift Cards</li>
        <li>Registry</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader






