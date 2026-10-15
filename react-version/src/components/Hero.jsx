import React from "react";
import "./Hero.css";

const Hero = () => {
  const handleContactScroll = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="animated-bg"></div>
      </div>

      <div className="z-10 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Harikrishnan{" "}
          <span className="block sm:inline text-purple-400">
            | Full Stack Developer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10">
          Creating premium digital experiences with{" "}
          <span className="text-purple-300 font-semibold">React</span>,{" "}
          <span className="text-purple-300 font-semibold">Tailwind</span>, and{" "}
          <span className="text-purple-300 font-semibold">AI</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Resume button — links to PDF in /public */}
          <a
            id="hero-resume-btn"
            href="/Harikrishnan_1resume.pdf"
            download="Harikrishnan_Resume.pdf"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105"
          >
            📄 Download Resume
          </a>

          {/* Contact button — smooth scrolls to #contact */}
          <button
            id="hero-contact-btn"
            onClick={handleContactScroll}
            className="px-8 py-3 border-2 border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105"
          >
            ✉️ Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
