import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import styles from "./Cart.module.css";
import CurrencyFormat from "../../Components/CurrencyFormatter/CurrencyFormatter";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  console.log(basket);

  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Basket is empty</h2>
              <p>
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              {basket.map((item, i) => {
                return (
                  <section className={styles.cart__product} key={i}>
                    <ProductCard
                      product={item}
                      renderDesc={true}
                      flex={true}
                      key={i}
                      renderAdd={false}
                    />
                    <div className={styles.btn__container}>
                      <button onClick={() => increment(item)}>
                        <TiArrowSortedUp size={35} />
                      </button>
                      <p>{item.amount}</p>
                      <button onClick={() => decrement(item.id)}>
                        <TiArrowSortedDown size={35} />
                      </button>
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div>
              <p>Subtotal ({basket?.length}) items</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" name="" id="" />
              <small>this order contains gift!</small>
            </span>
            <Link to="/payment"> Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
