import portfolio from "../assets/portfolio.jpeg";
import twenty1 from "../assets/2107.jpg";
import kuda from "../assets/kuda.jpg";
import kidkind from "../assets/kidkind.jpg";
import Healthspurt from "../assets/healthspurt.jpg";

const projects = [
  {
    name: "Portfolio Website",
    image: portfolio,
    link: "https://yourliveproject.com",
    tools: ["React", "Tailwind"],
  },
  {
    name: "2107 Atelier",
    image: twenty1,
    link: "https://yourliveproject.com",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Kuda Landing Page",
    image: kuda,
    link: "https://yourliveproject.com",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Kindergarten  Website",
    image: kidkind,
    link: "https://yourliveproject.com",
    tools: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Healthspurt  Blog",
    image: Healthspurt,
    link: "https://yourliveproject.com",
    tools: ["HTML", "CSS", "Javascript"],
  },
  // Add more projects here
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8" id="projects">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 ease-in-out"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-top object-contain"
              />
            </a>
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
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
