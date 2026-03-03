import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  return (
    <div
      className="text-white flex items-center justify-center"
      id="About"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="max-w-4xl p-6 md:p-10 text-center text-black">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>

        <p className="text-lg md:text-xl leading-relaxed">
          I’m a{" "}
          <span className="text-gray-800 font-bold">
            Computer Science graduate
          </span>{" "}
          with a strong foundation in
          <span className="text-gray-800 font-bold">
            {" "}
            software engineering
          </span>{" "}
          and
          <span className="text-gray-800 font-bold"> product strategy</span>. I
          specialize in building responsive, high-performance web applications
          using modern frontend technologies.
        </p>

        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          With experience in{" "}
          <span className="text-gray-800 font-bold">product management</span>{" "}
          and
          <span className="text-gray-800 font-bold"> UI/UX design</span>, I
          approach development with a user-first mindset, ensuring that every
          interface not only looks modern but drives
          <span className="text-gray-800 font-bold"> measurable impact</span>.
        </p>

        <p className="mt-6 text-lg md:text-xl leading-relaxed italic">
          I’m always eager to learn new technologies and push the boundaries of
          what can be achieved in web development. Let’s create something
          amazing!
        </p>
      </div>
    </div>
  );
};

export default About;
