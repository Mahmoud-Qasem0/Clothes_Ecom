import React, { JSX } from "react";
import Logo from "../../../assets/svg/cart.svg?react";
import styles from "./style.module.css";

const { basketContainer, basketQuantity } = styles;

const HeaderBasket: React.FC = (): JSX.Element => {
  return (
    <div className={basketContainer}>
      <Logo title="Bastek icon" />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;
