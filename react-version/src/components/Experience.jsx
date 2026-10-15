import React from "react";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

class Experience extends React.Component {

  render() {
    return (
      <section
        id="experience"
        className="experience-section bg-base-100 text-base-content"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
            >
              Professional Experience
            </h2>
          </div>

          <div className="timeline">
            {/* Experience Item 1 */}
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="timeline-icon">
                <FaBriefcase className="text-3xl text-neonPurple-500" />
              </div>
              <div className="timeline-content">
                <h3 className="font-bold text-xl">
                  Senior Full Stack Developer
                </h3>
                <p className="text-sm text-muted">2021 - Present</p>
                <p className="mt-3">
                  Led development of enterprise web applications using React,
                  Node.js, and MongoDB. Implemented CI/CD pipelines using GitHub
                  Actions, reducing deployment time by 40%.
                </p>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="timeline-icon">
                <FaUniversity className="text-3xl text-neonPurple-500" />
              </div>
              <div className="timeline-content">
                <h3 className="font-bold text-xl">
                  Web Development Internship
                </h3>
                <p className="text-sm text-muted">2020 - 2021</p>
                <p className="mt-3">
                  Contributed to front-end development using React and Redux,
                  implementing responsive designs that increased mobile user
                  engagement by 25%.
                </p>
              </div>
            </div>
          </div>

          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                Experience
              </h2>
              <div className="timeline max-w-4xl mx-auto">
                {[
                  {
                    company: "TAP Academy",
                    role: "Java Full Stack Developer Intern",
                    duration: "January 2026 – June 2026",
                    responsibilities: [
                      "Developed Java Full Stack applications using Java, HTML, CSS, JavaScript and SQL.",
                      "Worked with Servlets, JDBC and REST APIs.",
                      "Completed hands-on assignments and mini projects.",
                      "Used Git and GitHub for version control.",
                    ],
                  },
                  {
                    company: "Virtual Tech Services",
                    role: "Machine Learning Intern",
                    duration: "July 2024 (15 Days)",
                    responsibilities: [
                      "Worked on Machine Learning concepts and model development.",
                      "Performed data preprocessing and visualization.",
                      "Built and evaluated ML models using Python libraries.",
                      "Gained practical experience in AI and Machine Learning.",
                    ],
                  },
                ].map((experience, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                    className="flex flex-col lg:flex-row lg:items-center mb-12 p-6 bg-white rounded-xl shadow-md glass-card"
                  >
                    <div className="lg:w-1/3 mb-6 lg:mb-0">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl font-semibold text-purple-700"
                      >
                        {experience.company}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-600 mt-1"
                      >
                        {experience.role}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-gray-500 text-sm mt-2"
                      >
                        {experience.duration}
                      </motion.p>
                    </div>
                    <div className="lg:w-2/3 lg:pl-10">
                      {experience.responsibilities.map((resp, idx) => (
                        <motion.p
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 + 0.5 }}
                          className="text-gray-700 mb-3"
                        >
                          • {resp}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Experience;
