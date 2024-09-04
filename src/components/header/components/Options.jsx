import React from "react";
import styles from "../Header.module.css";
import PrimaryButton from "../../UI/primary-button/PrimaryButton";

const Options = () => {
  return (
    <div className={styles.header__wrapper_options}>
      <div className={styles.header__options_languages}></div>
      <PrimaryButton arrowColor={"#0c0c0c"} type={"button"}>
        Contact Us
      </PrimaryButton>
    </div>
  );
};

export default Options;
