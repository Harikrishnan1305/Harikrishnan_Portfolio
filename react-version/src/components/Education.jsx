import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence and Data Science",
    institution: "Prathyusha Engineering College",
    duration: "2022 – 2026",
    icon: FaGraduationCap,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    field: "Bio-Maths",
    institution: "Sri Ayyan Vidyashram Higher Secondary School",
    duration: "2021 – 2022",
    icon: FaUniversity,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Education
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-purple-200" />

          {educationData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className="relative flex items-start mb-12 pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 border-2 border-purple-400 shadow-md">
                  <Icon className="text-purple-600 text-xl" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-xl shadow-md p-6 w-full border border-purple-50 hover:shadow-lg transition duration-300">
                  <p className="text-gray-800 font-semibold text-lg">
                    {item.degree}
                  </p>
                  <p className="text-purple-700 font-medium mt-1">{item.field}</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                    <FaUniversity className="text-purple-400" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                    <FaCalendarAlt className="text-purple-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
