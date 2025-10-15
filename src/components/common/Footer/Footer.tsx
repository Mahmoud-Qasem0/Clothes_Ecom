import React, { JSX } from "react";
import styles from "./style.module.css";

const { footerContainer } = styles;

const Footer: React.FC = (): JSX.Element => {
  return <div className={footerContainer}>&copyright; Our Ecom All rights reserved.</div>;
};

export default Footer;
