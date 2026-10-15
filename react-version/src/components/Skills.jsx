import React from "react";
import { motion } from "framer-motion";


const Skills = () => {
  const skills = {
    "Programming Languages": [
      { name: "Java", level: 85 },
      { name: "Python", level: 90 },
      { name: "SQL", level: 75 },
    ],
    Frontend: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
    Backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
    ],
    Database: [
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
    "Machine Learning": [
      { name: "TensorFlow", level: 70 },
      { name: "Scikit-learn", level: 75 },
    ],
    "Developer Tools": [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
    ],
    "Data Analytics": [
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 75 },
    ],
  };

  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.keys(skills).map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-white rounded-xl shadow-md p-6 glass-card"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skills[category].map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="relative group p-4 border border-purple-100 rounded-lg hover:shadow-lg transition duration-300"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-medium text-gray-800">
                        {skill.name}
                      </h4>
                      <span className="text-purple-600">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-purple-100 rounded-lg">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="h-full bg-purple-500 rounded-lg transition-all duration-500"
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
