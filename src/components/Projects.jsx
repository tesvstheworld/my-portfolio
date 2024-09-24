import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import portfolio from "../assets/portfolio.jpg";
import twenty1 from "../assets/2107.jpg";
import kuda from "../assets/kuda.jpg";
import kidkind from "../assets/kidkind.jpg";
import Healthspurt from "../assets/healthspurt.jpg";
import Furniture from "../assets/furniture app.png";
import Bank from "../assets/bank app.png";
import Patricia from "../assets/patricia redesign.png";
import Laundry from "../assets/laundry app.png";

const projects = [
  {
    name: "Portfolio Website",
    image: portfolio,
    link: "https://tesvstheworld.netlify.app/",
    tools: ["React", "Tailwind"],
  },
  {
    name: "2107 Atelier",
    image: twenty1,
    link: "https://2107atelier.com/",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Kuda Landing Page",
    image: kuda,
    link: "https://kudabytes.netlify.app",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Healthspurt Blog",
    image: Healthspurt,
    link: "https://healthspurt.netlify.app",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Kindergarten Website",
    image: kidkind,
    link: "https://teskindergarten.netlify.app",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Furniture App",
    image: Furniture,
    link: "https://www.behance.net/gallery/146279033/FURNITURE-APP-UI-DESIGN",
    tools: ["Figma"],
  },
  {
    name: "Mobile Bank App",
    image: Bank,
    link: "https://www.behance.net/gallery/146279615/MOBILE-BANK-APP-UI-DESIGN/modules/826381027",
    tools: ["Figma"],
  },
  {
    name: "Patricia Remake",
    image: Patricia,
    link: "https://www.behance.net/gallery/208652557/Patricia-Remake",
    tools: ["Figma"],
  },
  {
    name: "Laundry App",
    image: Laundry,
    link: "https://www.behance.net/gallery/146279537/MOBILE-LAUNDRY-APP-UI-DESIGN/modules/826380663",
    tools: ["Figma"],
  },
  // Add more projects here
];

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div className="min-h-screen p-8" id="projects">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 ease-in-out"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center bg-gray-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full object-contain"
                />
              </div>
            </a>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-customBlue2">
                {project.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-200 rounded text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
