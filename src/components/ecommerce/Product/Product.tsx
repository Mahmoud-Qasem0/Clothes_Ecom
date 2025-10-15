import React, { JSX } from "react";
import styles from "./styles.module.css";
import { Button } from "react-bootstrap";
import { TProduct } from "@customTypes/product";

const { product, productImg } = styles;



const Product: React.FC<TProduct> = ({ title, price }): JSX.Element => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
        // src={img}
          src="https://picsum.photos/400/300?blur=10"
          alt={title}
        />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "#fff" }}>
        Add To Cart
      </Button>
    </div>
  );
};

export default Product;
