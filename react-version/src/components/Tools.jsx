import React from "react";
import { FaTools, FaCertificate } from "react-icons/fa";

class Tools extends React.Component {

  render() {
    return (
      <section
        id="tools"
        className="tools-section bg-base-300 text-base-content"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up"
            >
              Development Tools
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tool Card 1 */}
            <div
              className="tool-card glass bg-glass-100 hover:bg-glass-200 transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="tool-card-icon">
                <FaTools className="text-4xl text-neonPurple-500" />
              </div>
              <h3 className="text-xl font-bold mt-4">Frontend Tools</h3>
              <ul className="list-disc mt-3 space-y-2">
                <li>React 19</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>AOS Animation</li>
                <li>React Icons</li>
              </ul>
            </div>

            {/* Tool Card 2 */}
            <div
              className="tool-card glass bg-glass-100 hover:bg-glass-200 transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="tool-card-icon">
                <FaCertificate className="text-4xl text-neonPurple-500" />
              </div>
              <h3 className="text-xl font-bold mt-4">Backend Tools</h3>
              <ul className="list-disc mt-3 space-y-2">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
                <li>REST APIs</li>
              </ul>
            </div>

            {/* Tool Card 3 */}
            <div
              className="tool-card glass bg-glass-100 hover:bg-glass-200 transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="tool-card-icon">
                <FaTools className="text-4xl text-neonPurple-500" />
              </div>
              <h3 className="text-xl font-bold mt-4">Deployment Tools</h3>
              <ul className="list-disc mt-3 space-y-2">
                <li>Vercel</li>
                <li>Docker</li>
                <li>GitHub Actions</li>
                <li>Netlify</li>
                <li>Cloudflare</li>
              </ul>
            </div>

            {/* Tool Card 4 */}
            <div
              className="tool-card glass bg-glass-100 hover:bg-glass-200 transition duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="tool-card-icon">
                <FaCertificate className="text-4xl text-neonPurple-500" />
              </div>
              <h3 className="text-xl font-bold mt-4">Testing Tools</h3>
              <ul className="list-disc mt-3 space-y-2">
                <li>Jest</li>
                <li>React Testing Library</li>
                <li>Cypress</li>
                <li>Storybook</li>
                <li>Lighthouse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tools;
