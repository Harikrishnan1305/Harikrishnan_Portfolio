import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      className="relative bg-black/95 backdrop-filter backdrop-blur-lg py-12 md:py-16 lg:py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 md:mb-12">
          <motion.div className="text-purple-300 text-sm md:text-base font-medium mb-4 md:mb-0">
            <span className="font-bold text-white">Harikrishnan S</span>
            <span className="text-purple-200 ml-2">
              © {new Date().getFullYear()}
            </span>
          </motion.div>

          <motion.button
            onClick={handleScrollToTop}
            className="group mt-4 md:mt-0 w-full md:w-auto bg-purple-800 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-lg shadow-purple-500/30 transition-colors duration-200 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back To Top</span>
          </motion.button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-purple-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Quick Navigation */}
          <motion.div className="group">
            <h3 className="text-purple-200 text-lg font-semibold mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex flex-col items-start">
            <h3 className="text-purple-200 text-lg font-semibold mb-4">
              Find Me
            </h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-300 hover:text-white transition-colors duration-200 social-icon"
              >
                <FaLinkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-purple-300 hover:text-white transition-colors duration-200 social-icon"
              >
                <FaGithub className="h-5 w-5 mr-2" />
                GitHub
              </a>
              <a
                href="mailto:harikrishnan@example.com"
                className="flex items-center text-purple-300 hover:text-white transition-colors duration-200 social-icon"
              >
                <FaEnvelope className="h-5 w-5 mr-2" />
                Email
              </a>
            </div>
          </motion.div>

          {/* Built With Section */}
          <motion.div className="flex flex-col items-start">
            <h3 className="text-purple-200 text-lg font-semibold mb-4">
              Built With
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <SiReact className="h-5 w-5 text-purple-400 mr-2" />
                React
              </div>
              <div className="flex items-center">
                <SiTailwindcss className="h-5 w-5 text-purple-400 mr-2" />
                Tailwind CSS
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated Floating Shapes */}
        <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-purple-500/10 mix-blend-multiply animate-bounce">
          <motion.div
            className="absolute w-full h-full rounded-full bg-purple-300/5"
            initial={{ x: -20, y: 20 }}
            animate={{
              x: [20, -20, 20],
              y: [20, -20, 20],
            }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-12 rounded-full bg-purple-500/10 mix-blend-multiply animate-spin">
          <motion.div
            className="absolute w-full h-full rounded-full bg-purple-300/5"
            initial={{ rotate: 0 }}
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
