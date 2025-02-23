import React from "react";
import styles from "./Category.module.css";
import { categoryData } from "./categoryData";
import CategoryCard from "./CategoryCard";
function Category() {
  return (
    <section className={styles.Category__container}>
      {categoryData.map((infos, index) => {
        return <CategoryCard data={infos} key={index} />;
      })}
    </section>
  );
}

export default Category;
