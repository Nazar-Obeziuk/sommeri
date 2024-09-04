import React from "react";
import styles from "./PrimaryButtonArrow.module.css";

const PrimaryButtonArrow = ({ children, type, arrowColor }) => {
  return (
    <button className={styles.primary__button_arrow} type={type}>
      {children}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style={{ stroke: arrowColor }}
          d="M14.1248 5.87519L5.87522 14.1248M14.1248 5.87519L14.1248 12.9463M14.1248 5.87519L7.05373 5.87519"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default PrimaryButtonArrow;
