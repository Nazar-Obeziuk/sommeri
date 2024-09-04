import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Header.module.css";

const Navbar = () => {
  return (
    <nav className={styles.header__wrapper_nav}>
      <ul className={styles.header__nav_list}>
        <li className={styles.header__list_item}>
          <NavLink to={"/"} className={styles.header__item_link}>
            Services
          </NavLink>
        </li>
        <li className={styles.header__list_item}>
          <NavLink to={"/"} className={styles.header__item_link}>
            About Us
          </NavLink>
        </li>
        <li className={styles.header__list_item}>
          <NavLink to={"/"} className={styles.header__item_link}>
            Technologies
          </NavLink>
        </li>
        <li className={styles.header__list_item}>
          <NavLink to={"/"} className={styles.header__item_link}>
            Projects
          </NavLink>
        </li>
        <li className={styles.header__list_item}>
          <NavLink to={"/"} className={styles.header__item_link}>
            Why Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
