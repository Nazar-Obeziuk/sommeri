import React from "react";
import styles from "./AboutUs.module.css";
import SecondaryButton from "../UI/secondary-button/SecondaryButton";

const AboutUs = () => {
  return (
    <section className={styles.about__section}>
      <div className="container">
        <div className={styles.about__wrapper}>
          <h2 className={styles.about__wrapper_title}>About us</h2>
          <div className={styles.about__wrapper_main}>
            <div className={styles.about__main_info}>
              <h3 className={styles.about__info_subtitle}>
                Welcome to Sommeri, where beautiful design meets seamless
                functionality.
              </h3>
              <p className={styles.about__info_text}>
                We are the team that will create a customized solution for your
                business. From the very beginning, we made a decision to focus
                on our strengths and constantly improve them. This approach
                allows us not only to become experts in our field, but also to
                provide our clients with the exceptional experience they
                deserve. We are committed to innovation and quality, as every
                step we take is aimed at exceeding expectations and creating a
                truly valuable product.
              </p>
              <SecondaryButton>Reviews</SecondaryButton>
            </div>
            <div className={styles.about__main_banner}>
              <img
                src="../../images/about-us-vector.svg"
                alt="about us vector"
                className={styles.about__banner_vector}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
