import React from "react";
import styles from "./button.module.scss";

const Button = ({ className, ...rest }) => {
  let actualClass = styles.button;

  if (className) {
    actualClass = `${styles.button} ${className}`;
  }

  return (
    <button className={actualClass} {...rest}>
      Add to cart
    </button>
  );
};

export default Button;
