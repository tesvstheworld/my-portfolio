import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  return (
    <section
      className="text-black h-full py-12  flex items-center justify-center sm:min-h-screen"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
          Hi, I'm{" "}
          <span className="text-customBlue2 whitespace-nowrap">[ Teslim ]</span>
        </h1>
        <p className="text-lg lg:text-xl font-light mb-12 max-w-3xl mx-auto">
          A passionate web developer with expertise in creating modern,
          responsive websites and web apps using the latest technologies like
          React, Tailwind CSS, and more, with experience in UI design to ensure
          intuitive and user-friendly interfaces.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-customBlue2 text-black-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-transparent border border-customBlue2 transition-all"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-customBlue2 px-8 py-3 rounded-full text-lg font-medium text-customBlue2 hover:bg-customBlue2 hover:text-black transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
