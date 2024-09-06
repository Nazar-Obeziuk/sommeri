import React from "react";
import styles from "./OurTechnologies.module.css";
import { technologies } from "../../utils/data/data";
import PrimaryButtonArrow from "../UI/primary-button-arrow/PrimaryButtonArrow";

const OurTechnologies = () => {
  return (
    <div className={styles.technologies__section}>
      <div className="container">
        <div className={styles.technologies__wrapper}>
          <h2 className={styles.technologies__wrapper_title}>
            Our technologies
          </h2>
          <div className={styles.technologies__wrapper_main}>
            <div className={styles.technologies__main_dashboard}>
              <h2 className={styles.technologies__dashboard_title}>
                Consistent code from browser to backend
              </h2>
              <div className={styles.technologies__dashboard_banner}>
                <img
                  src="../../images/dashboard-image.png"
                  alt="dashboard img"
                  className={styles.technologies__banner_image}
                />
                <div className={styles.technologies__dashboard_circle}></div>
              </div>
              <div className={styles.technologies__dashboard_footer}>
                <p className={styles.technologies__footer_text}>
                  Maintain uniform code across both browser and backend
                  environments. Sommeri implements web standard APIs wherever
                  feasible, enhancing code reusability between the server and
                  browser while ensuring your code remains adaptable for the
                  future.
                </p>
                <PrimaryButtonArrow type={"button"}>
                  Contact Us
                </PrimaryButtonArrow>
              </div>
              <div className={styles.technologies__dashboard_bamboo}>
                <img
                  src="../../images/sommeri-vector.svg"
                  alt="bamboo vector"
                  className={styles.technologies__bamboo_vector}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.technologies__sliders}>
        {technologies.map((technologyBlocks, index) => (
          <div key={index} className={styles.technologies__slider_block}>
            {technologyBlocks.map((technologyBlock, index) => (
              <div key={index} className={styles.technologies__slider_item}>
                <img
                  src={technologyBlock.image_url}
                  alt="technology logo"
                  className={styles.technologies__item_logo}
                />
                <span className={styles.technologies__item_text}>
                  {technologyBlock.technology_name}
                </span>
              </div>
            ))}
          </div>
        ))}
        <div className={styles.technologies__sliders_shadow}></div>
      </div>
    </div>
  );
};

export default OurTechnologies;
