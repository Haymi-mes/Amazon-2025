import React, { useEffect, useState } from "react";
import LayOut from '../../Components/Layout/LayOut'
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../Api/endPoint";
import ProductCard from "../../Components/product/ProductCard";
import styles from "./Results.module.css";
// import Loader from "../../Components/Loader/Loader";
function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // setIsLoading(true)
    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
      
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  console.log(results);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 style={{ padding: "30px" }}>Results </h1>
          <p style={{ padding: "30px" }}>Category </p>
          <div className={styles.products__container}>
            {results.map((result, index) => {
              return <ProductCard key={result.id} product={result} renderAdd={true}/>;
            })}
          </div>
        </div>
      )}
      
    </LayOut>
  );
}
export default Results;