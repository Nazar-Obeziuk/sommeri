import React from "react";
import styles from "../Header.module.css";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to={"/"} className={styles.header__wrapper_logo}>
      <img
        src="../../images/logo.svg"
        alt="logo"
        className={styles.header__logo_icon}
      />
    </NavLink>
  );
};

export default Logo;
