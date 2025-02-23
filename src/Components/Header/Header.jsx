import React from "react";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import LowerHeader from "./LowerHeader";

MdOutlineShoppingCart;
function Header() {
  return (
    <>
      <section className={styles.header__container}>
        <div className={styles.logo__container}>
          {/* Logo */}
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="amazon logo"
            />
          </a>
          {/* delivery */}
          <span>
            {/* icon */}
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </span>
        </div>
        <div className={styles.search}>
          {/* Search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          {/* search icon */}
          {<FaSearch />}
        </div>
        <div>
          {/* right side link */}
          <div className={styles.order__container}>
            {/* Language */}
            <a href="" className={styles.language}>
              <img
                src="https://pngimg.com/uploads/flags/small/flags_PNG14580.png"
                alt="english language logo"
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a className={styles.cart}>
              {/* icon */}
              {<FiShoppingCart />}
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
