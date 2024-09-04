import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services__section}>
      <div className="container">
        <div className={styles.services__wrapper}>
          <div className={styles.services__wrapper_heading}>
            <div className={styles.services__heading_info}>
              <h2 className={styles.services__info_title}>
                Innovative web design and expert development services.
              </h2>
              <p className={styles.services__info_subtext}>
                At Sommeri, we transform concepts into tailored online
                identities
              </p>
            </div>
            <div className={styles.services__heading_vector}>
              <img
                src="../../images/services-vector.svg"
                alt="heading vector"
                className={styles.services__vector_icon}
              />
            </div>
          </div>
          <div className={styles.services__wrapper_main}>
            <div
              className={`${styles.services__main_card} ${styles.services__card_secondary}`}
            >
              <div className={styles.services__card_info}>
                <span className={styles.services__info_count}>01</span>
                <div className={styles.services__info_inner}>
                  <h3 className={styles.services__inner_title}>Chatbots</h3>
                  <p className={styles.services__inner_text}>
                    Automate communication with customers, our chatbots provide
                    fast and convenient service.
                  </p>
                </div>
              </div>
              <img
                src="../../images/services-card-1.svg"
                alt="card vector"
                className={styles.services__card_image}
              />
            </div>
            <div
              className={`${styles.services__main_card} ${styles.services__card_primary}`}
            >
              <div className={styles.services__card_info}>
                <span className={styles.services__info_count}>02</span>
                <div className={styles.services__info_inner}>
                  <h3 className={styles.services__inner_title}>
                    API-solutions
                  </h3>
                  <p className={styles.services__inner_text}>
                    We develop and integrate API solutions that ensure seamless
                    data exchange between your systems and applications,
                    increasing the efficiency of business processes.
                  </p>
                </div>
              </div>
              <img
                src="../../images/services-card-2.svg"
                alt="card vector"
                className={styles.services__card_image}
              />
            </div>
            <div
              className={`${styles.services__main_card} ${styles.services__card_primary}`}
            >
              <div className={styles.services__card_info}>
                <span className={styles.services__info_count}>03</span>
                <div className={styles.services__info_inner}>
                  <h3 className={styles.services__inner_title}>
                    Web design & dev.
                  </h3>
                  <p className={styles.services__inner_text}>
                    Our original design emphasizes excellent functionality and
                    high performance, ensuring that your website meets your
                    unique needs and provides an unrivaled.
                  </p>
                </div>
              </div>
              <img
                src="../../images/services-card-3.svg"
                alt="card vector"
                className={styles.services__card_image}
              />
            </div>
            <div
              className={`${styles.services__main_card} ${styles.services__card_secondary}`}
            >
              <div className={styles.services__card_info}>
                <span className={styles.services__info_count}>04</span>
                <div className={styles.services__info_inner}>
                  <h3 className={styles.services__inner_title}>
                    Web applications
                  </h3>
                  <p className={styles.services__inner_text}>
                    We create functional and intuitive web applications that
                    increase the efficiency of your business.
                  </p>
                </div>
              </div>
              <img
                src="../../images/services-card-4.svg"
                alt="card vector"
                className={styles.services__card_image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
