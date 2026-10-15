import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Swiper from "swiper";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    title: "Stroke Prediction System",
    description:
      "Machine learning model to predict stroke risk using patient health data. Built with Python, Scikit-learn, and Flask REST API.",
    tech: ["Python", "Scikit-learn", "Flask", "Pandas"],
    github: "https://github.com",
    demo: "https://example.com",
    // Drop your screenshot at: src/assets/project-stroke.png
    image: null,
    color: "from-purple-500 to-indigo-600",
    initials: "SP",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React 19, Tailwind CSS, Framer Motion, and deployed on Vercel.",
    tech: ["React 19", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com",
    demo: "https://example.com",
    // Drop your screenshot at: src/assets/project-portfolio.png
    image: null,
    color: "from-pink-500 to-rose-600",
    initials: "PW",
  },
  {
    title: "Java Full Stack App",
    description:
      "Full stack web application using Java Servlets, JDBC, HTML/CSS/JS, and MySQL built during TAP Academy internship.",
    tech: ["Java", "Servlets", "JDBC", "MySQL"],
    github: "https://github.com",
    demo: "https://example.com",
    // Drop your screenshot at: src/assets/project-java.png
    image: null,
    color: "from-amber-500 to-orange-600",
    initials: "JFS",
  },
];

class Projects extends React.Component {
  componentDidMount() {
    this.slider = new Swiper(".projects-slider", {
      modules: [Pagination, FreeMode],
      slidesPerView: "auto",
      spaceBetween: 30,
      freeMode: true,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      on: {
        init: () => {
          if (this.slider) this.slider.update();
        },
      },
    });
  }

  componentWillUnmount() {
    if (this.slider) {
      this.slider.destroy();
    }
  }

  render() {
    return (
      <section
        id="projects"
        className="projects-section py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A selection of projects built during my studies and internships.
            </p>
          </div>

          {/* Swiper requires .swiper > .swiper-wrapper > .swiper-slide */}
          <div className="projects-slider swiper">
            <div className="swiper-wrapper">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="swiper-slide"
                  style={{ width: "320px" }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
                    {/* Project image or gradient fallback */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-48"
                      />
                    ) : (
                      <div
                        className={`w-full h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                      >
                        <span className="text-white text-4xl font-extrabold opacity-80">
                          {project.initials}
                        </span>
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub /> GitHub
                        </a>
                        <a
                          href={project.demo}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLink /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination mt-6" />
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
