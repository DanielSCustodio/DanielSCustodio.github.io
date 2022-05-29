import React from "react";
import AboutMe from "../sections/AboutMe";
import Banner from "../sections/Banner";
import Header from "../sections/Header";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Sections = () => {
  return (
    <section>
      <Header />
      <Banner />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
      <Footer />
    </section>
  );
};

export default Sections;
