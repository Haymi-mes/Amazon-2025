import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  // console.log(products);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.products__container}>
          {products.map((singleprodct) => {
            return <ProductCard product={singleprodct} renderAdd={true} />;
          })}
        </div>
      )}
    </>
  );
}

export default Product;
