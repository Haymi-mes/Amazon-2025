import React from "react";
import styles from "./Category.module.css";

function CategoryCard(data, key) {
  return (
    <div className={styles.category} key={key}>
      <a href="#">
        <span>
          <h2>{data.data.title}</h2>
        </span>
        <img src={data.data.img} alt="" />
        <p>Shop Now!</p>
      </a>
    </div>
  );
}

export default CategoryCard;
