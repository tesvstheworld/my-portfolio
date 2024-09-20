import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className=" bg-customWhite">
      <Navbar />
      <HeroSection />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
