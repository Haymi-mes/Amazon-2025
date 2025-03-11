import React, {useContext}from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormatter/CurrencyFormatter";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard(props) {
  const { product, flex, renderDesc, renderAdd } = props;
  // console.log(flex);
  const flexClass = flex ? styles.product__flexed : "";
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };
  return (
    <div key={id} className={`${styles.card__container} ${flexClass}`}>
      <Link to={`/Product/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "500px" }}>{description}</div>}
        <div className={styles.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />

          {/* rating count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button onClick={addToCart} className={styles.button}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
