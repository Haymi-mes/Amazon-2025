import React, {useContext} from "react";
import styles from "./Header.module.css";
import { FaSearch, FaSortAmountDown } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";

MdOutlineShoppingCart;
function Header() {
  
  const [{basket}, dispatch]=useContext(DataContext)
  const totalitems=basket.reduce((amount, item)=>{
    return item.amount + amount
  },0)
  console.log(basket);
  
  return (
    <section className={styles.fixed}>
      <section className={styles.header__container}>
        <div className={styles.logo__container}>
          {/* Logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="amazon logo"
            />
          </Link>
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
            <Link to="" className={styles.language}>
              <img
                src="https://pngimg.com/uploads/flags/small/flags_PNG14580.png"
                alt="english language logo"
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="/auth">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={styles.cart}>
              {/* icon */}
              {<FiShoppingCart />}
              <span>{totalitems}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
