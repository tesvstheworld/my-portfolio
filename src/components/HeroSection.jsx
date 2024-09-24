import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  return (
    <section
      className="text-black min-h-fit lg:min-h-screen flex items-center justify-center py-12"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="container mb-14 px-6 lg:px-12 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
          Hi, I'm{" "}
          <span className="text-customBlue2 whitespace-nowrap">[ Teslim ]</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-light mb-8 sm:mb-12 max-w-3xl mx-auto">
          A passionate web developer with expertise in creating modern,
          responsive websites and web apps using the latest technologies like
          React, Tailwind CSS, and more, with experience in UI design to ensure
          intuitive and user-friendly interfaces.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-customBlue2 text-black-600 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-transparent border border-customBlue2 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-customBlue2 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium text-customBlue2 hover:bg-customBlue2 hover:text-black transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
