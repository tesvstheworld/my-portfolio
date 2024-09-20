import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      // once: false, // Whether animation should happen only once while scrolling down
    });
  }, []);
  return (
    <div
      className=" text-white min-h-screen flex items-center justify-center"
      id="About"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="max-w-4xl p-6 md:p-10 text-center text-black">
        <h1 className="text-4xl font-bold mb-4 text-customBlue2">About Me</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Hi! I'm a passionate web developer based in Abuja, Nigeria & currently
          pursuing a degree in Computer Science. My expertise lies in{" "}
          <span className="text-customBlue2 font-bold">UI design</span> and
          building responsive, user-friendly web applications using{" "}
          <span className="text-customBlue2 font-bold">React</span> and{" "}
          <span className="text-customBlue2 font-bold">Tailwind CSS</span>.
        </p>

        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          I have ventured into{" "}
          <span className="text-customBlue2 font-bold">graphics design</span>,{" "}
          <span className="text-customBlue2 font-bold">UI/UX</span>, and{" "}
          <span className="text-customBlue2 font-bold">product management</span>
          , which have enhanced my understanding of creating user-centric
          digital experiences. Currently, I'm interning at{" "}
          <span className="text-customBlue2 font-bold">Leadway Assurance</span>,
          where I'm learning and growing as a developer.
        </p>

        <p className="mt-4 text-lg md:text-xl leading-relaxed">
          I’m always eager to learn new technologies and push the boundaries of
          what can be achieved in web development. Let’s create something
          amazing!
        </p>
      </div>
    </div>
  );
};

export default About;
