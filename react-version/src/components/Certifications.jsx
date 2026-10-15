import React from "react";
import { FaCertificate, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

class Certifications extends React.Component {
  certifications = [
    {
      name: "Java Full Stack Development",
      organization: "TAP Academy",
      date: "June 2026",
      credentialUrl: "#",
    },
    {
      name: "Machine Learning with Python",
      organization: "Virtual Tech Services",
      date: "July 2024",
      credentialUrl: "#",
    },
    {
      name: "Python for Data Science",
      organization: "NPTEL",
      date: "April 2024",
      credentialUrl: "#",
    },
    {
      name: "SQL and Relational Databases",
      organization: "IBM SkillsBuild",
      date: "January 2024",
      credentialUrl: "#",
    },
    {
      name: "React – The Complete Guide",
      organization: "Udemy",
      date: "March 2025",
      credentialUrl: "#",
    },
    {
      name: "Foundations of AI & ML",
      organization: "Google (Coursera)",
      date: "September 2023",
      credentialUrl: "#",
    },
  ];


  render() {
    return (
      <section id="certifications" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {this.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl hover:shadow-xl transition duration-300 ease-in-out"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <FaCertificate className="text-purple-600 text-2xl mr-3" />
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-lg font-semibold text-purple-700"
                  >
                    {cert.name}
                  </motion.h3>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-600 text-sm font-medium"
                >
                  {cert.organization}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-500 text-sm mt-2"
                >
                  {cert.date}
                </motion.p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-purple-600 text-sm hover:text-purple-800 transition duration-200"
                >
                  <FaStar className="mr-1" /> View Credential
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Certifications;
