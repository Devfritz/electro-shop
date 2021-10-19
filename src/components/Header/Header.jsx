import React from "react";
import Container from "@components/Container";
import { FaShoppingCart } from "react-icons/fa";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>Electro Shop</p>
        <div className={styles.headerCart}>
          <button className="snipcart-checkout">
            <FaShoppingCart size={30} />
            <span className="snipcart-total-price"></span>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
