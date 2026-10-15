import React from "react";


const About = () => {
  const professionalSummary =
    "Final-year B.Tech student in Artificial Intelligence and Data Science with a strong foundation in Java, Python, SQL, web development, machine learning, and data analytics. Passionate about building scalable software solutions and AI-driven applications. Seeking an entry-level Software Engineer role where I can apply my technical skills, problem-solving ability, and continuously learn new technologies.";

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-6">{professionalSummary}</p>
          </div>
          {/* Skills section will be added later */}
        </div>
      </div>
    </section>
  );
};

export default About;
