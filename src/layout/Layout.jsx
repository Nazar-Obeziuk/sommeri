import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import AboutUs from "../components/about-us/AboutUs";
import OurTechnologies from "../components/our-technologies/OurTechnologies";

const Layout = () => {
  return (
    <div className="box">
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <OurTechnologies />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
