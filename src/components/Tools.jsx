import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import logos (Make sure you have the images in the specified folder)
import htmlLogo from "../assets/html-logo.svg"; // Path to HTML logo
import cssLogo from "../assets/css-logo.svg"; // Path to CSS logo
import jsLogo from "../assets/js-logo.svg"; // Path to JavaScript logo
import reactLogo from "../assets/react-logo.svg"; // Path to React logo
import tailwindLogo from "../assets/tailwind-logo.svg"; // Path to Tailwind CSS logo
import figmaLogo from "../assets/figma-logo.svg"; // Path to Figma logo

const Tools = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  const tools = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "React", logo: reactLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "Figma", logo: figmaLogo },
  ];

  return (
    <div
      className=" text-white  flex items-center justify-center"
      data-aos="fade-up"
      data-aos-delay="200"
      id="Skills"
    >
      <div className="max-w-4xl text-center p-6">
        <h1 className="text-4xl font-bold mb-20 text-customBlue2">
          Tools I Work With
        </h1>

        <div className="flex flex-wrap justify-center gap-16">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="flex flex-col items-center"
              data-aos="fade-up" // This is the AOS attribute for fade-up animation
            >
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="w-20 h-20 mb-4"
              />
              <p className="text-lg font-semibold text-black">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
