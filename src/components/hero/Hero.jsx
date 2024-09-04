import React, { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import SecondaryButton from "../UI/secondary-button/SecondaryButton";
import HeroBrand from "./components/HeroBrand";
import PrimaryButtonArrow from "../UI/primary-button-arrow/PrimaryButtonArrow";
import gsap from "gsap";

const Hero = () => {
  const [brands, setBrands] = useState([
    { image_path: "company-1" },
    { image_path: "company-2" },
    { image_path: "company-3" },
    { image_path: "company-4" },
    { image_path: "company-5" },
    { image_path: "company-6" },
  ]);

  const svgRef = useRef(null);

  useEffect(() => {
    const lines = svgRef.current.querySelectorAll(".animated-line");

    lines.forEach((line, index) => {
      gsap.set(line, { strokeDashoffset: 20000 });

      gsap.to(line, {
        duration: 10,
        strokeDashoffset: 4000,
        ease: "none",
        repeat: -1,
        delay: index * (Math.random() * 10),
      });
    });
  }, []);

  return (
    <section className={styles.hero__section}>
      <div className="container">
        <div className={styles.hero__wrapper}>
          <div className={styles.hero__wrapper_heading}>
            <h1 className={styles.hero__heading_title}>
              <span className={styles.hero__title_special}>
                One step ahead with
              </span>{" "}
              <br />
              our solutions
            </h1>
            <p className={styles.hero__heading_text}>
              We focus on understanding your needs to achieve the best results.
            </p>
          </div>
          <div className={styles.hero__wrapper_actions}>
            <PrimaryButtonArrow arrowColor={"#fff"} type={"button"}>
              Contact Us
            </PrimaryButtonArrow>
            <SecondaryButton type={"button"}>Our Projects</SecondaryButton>
          </div>
          <div className={styles.hero__wrapper_brands}>
            <p className={styles.hero__brands_subtitle}>
              Trusted by the world's biggest brands
            </p>
            <ul className={styles.hero__brands_list}>
              {brands.map((brand, index) => (
                <HeroBrand key={index} brand={brand} />
              ))}
            </ul>
          </div>
          <div className={styles.hero__wrapper_code}>
            <img
              src="../../images/code-icon.svg"
              alt="code icon"
              className={styles.hero__code_icon}
            />
          </div>
        </div>
      </div>
      <div className={styles.hero__bottom_blur}></div>
      <div className={styles.hero__animation}>
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          width="2606"
          height="1726"
          viewBox="0 0 2606 1726"
          fill="none"
        >
          <defs>
            <linearGradient
              id="gray-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "rgba(82, 182, 154, 0.1)" }}
              />
              <stop
                offset="49.5%"
                style={{ stopColor: "rgba(38, 150, 168, 0.1)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgba(22, 138, 173, 0.1)" }}
              />
            </linearGradient>
            <linearGradient
              id="green-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" style={{ stopColor: "#52b69a8b" }} />
              <stop offset="49.5%" style={{ stopColor: "#2697a883" }} />
              <stop offset="100%" style={{ stopColor: "#168aadbd" }} />
            </linearGradient>
          </defs>

          <path
            d="M101.5 1C162.5 942 187 1201.5 1 1368"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M276.5 1C345.5 1152.5 356 1281 7 1529.5"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M446.5 1C503.5 1372.5 552 1268 9 1714"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M621.5 1C642.5 1373 754.5 1174.5 270.5 1724.5"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M793.5 1C793.5 1373 898 1181.5 535.5 1717"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M966.5 1C969 1368 1043.5 1145.5 798 1723.5"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M1139.5 1C1142 1368 1170.5 1198.5 1060.5 1724"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M1312.5 1C1315 1368 1306.5 1197.5 1324 1722"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M1485.5 1C1481.5 1376.5 1449 1231 1586 1717"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M1658.53 1C1646.5 1378.5 1591.5 1193.5 1846.53 1717"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M1831.53 1C1815.5 1369 1731.5 1196 2110.5 1719"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M2004.52 1C1977 1364 1886.5 1219 2374.5 1719"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M2177.52 1C2136.5 1333 2050.5 1239 2601.5 1691.5"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M2349.52 1C2275.5 1312.5 2297.5 1263 2605 1509.5"
            stroke="url(#gray-gradient)"
            className="static-line"
          />
          <path
            d="M2522.51 1C2438.5 1298.5 2494 1152 2599 1344.5"
            stroke="url(#gray-gradient)"
            className="static-line"
          />

          <line
            x1="0"
            y1="150"
            x2="2606"
            y2="150"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="300"
            x2="2606"
            y2="300"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="450"
            x2="2606"
            y2="450"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="600"
            x2="2606"
            y2="600"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="750"
            x2="2606"
            y2="750"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="900"
            x2="2606"
            y2="900"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="1050"
            x2="2606"
            y2="1050"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="1200"
            x2="2606"
            y2="1200"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="1350"
            x2="2606"
            y2="1350"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="1500"
            x2="2606"
            y2="1500"
            stroke="#111"
            className="static-line"
          />
          <line
            x1="0"
            y1="1650"
            x2="2606"
            y2="1650"
            stroke="#111"
            className="static-line"
          />

          <path
            d="M101.5 1C162.5 942 187 1201.5 1 1368"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M276.5 1C345.5 1152.5 356 1281 7 1529.5"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M446.5 1C503.5 1372.5 552 1268 9 1714"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M621.5 1C642.5 1373 754.5 1174.5 270.5 1724.5"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M793.5 1C793.5 1373 898 1181.5 535.5 1717"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M966.5 1C969 1368 1043.5 1145.5 798 1723.5"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M1139.5 1C1142 1368 1170.5 1198.5 1060.5 1724"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M1312.5 1C1315 1368 1306.5 1197.5 1324 1722"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M1485.5 1C1481.5 1376.5 1449 1231 1586 1717"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M1658.53 1C1646.5 1378.5 1591.5 1193.5 1846.53 1717"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M1831.53 1C1815.5 1369 1731.5 1196 2110.5 1719"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M2004.52 1C1977 1364 1886.5 1219 2374.5 1719"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M2177.52 1C2136.5 1333 2050.5 1239 2601.5 1691.5"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M2349.52 1C2275.5 1312.5 2297.5 1263 2605 1509.5"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
          <path
            d="M2522.51 1C2438.5 1298.5 2494 1152 2599 1344.5"
            stroke="url(#green-gradient)"
            className="animated-line"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
