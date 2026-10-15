import React, { useState } from "react";
import {
  FaRegUser,
  FaEnvelope,
  FaPenSquare,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          subject,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then((result) => {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-xl shadow-xl w-full max-w-md"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-6">
                Get In Touch
              </h3>
              <form onSubmit={handleSend} className="space-y-4">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="shadow-lg focus:ring-purple-500 focus:border-purple-700 border-gray-300 rounded-md p-3 w-full transition duration-200 ease-in-out"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="shadow-lg focus:ring-purple-500 focus:border-purple-700 border-gray-300 rounded-md p-3 w-full transition duration-200 ease-in-out"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="shadow-lg focus:ring-purple-500 focus:border-purple-700 border-gray-300 rounded-md p-3 w-full transition duration-200 ease-in-out"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows="5"
                    className="shadow-lg focus:ring-purple-500 focus:border-purple-700 border-gray-300 rounded-md p-3 w-full transition duration-200 ease-in-out"
                  />
                </div>
                <div className="flex gap-4 justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition duration-200 ease-in-out"
                  >
                    {loading ? (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center"
                      >
                        Sending...
                        <span className="ml-2 animate-spin h-5 w-5">●</span>
                      </motion.span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-green-600 mt-4"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-red-600 mt-4"
                  >
                    Error sending message. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
          <div className="contact-info">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 rounded-xl mb-8"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-purple-600 text-xl mr-3">📧</span>
                  <p className="text-gray-700">harikrishnan@email.com</p>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 text-xl mr-3">📞</span>
                  <p className="text-gray-700">+91 98765 43210</p>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 text-xl mr-3">📍</span>
                  <p className="text-gray-700">Chennai, India</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card p-6 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-6">
                Follow Me
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com"
                  className="text-purple-600 text-xl hover:text-purple-800 transition duration-200"
                >
                  🔗 LinkedIn
                </a>
                <a
                  href="https://github.com"
                  className="text-purple-600 text-xl hover:text-purple-800 transition duration-200"
                >
                  🔗 GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
