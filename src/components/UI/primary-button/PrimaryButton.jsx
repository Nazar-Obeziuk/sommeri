import React from "react";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, type }) => {
  return (
    <button className={styles.primary__button} type={type}>
      {children}
      <img
        src="../../images/button-arrow.svg"
        alt="button arrow"
        className={styles.primary__button_arrow}
      />
    </button>
  );
};

export default PrimaryButton;
