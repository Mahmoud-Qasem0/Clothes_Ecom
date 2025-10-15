import React, { JSX } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { TCategory } from "@customTypes/category";

const { category, categoryImg, categoryTitle } = styles;


const Category: React.FC<TCategory> = ({ title, prefix, img }): JSX.Element => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
      <div className={categoryImg}>
        <img src={img} alt={title} />
      </div>
      <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
