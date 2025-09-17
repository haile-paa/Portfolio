import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../App";

const About = () => {
  const { isDarkMode } = useTheme();

  // Animation variants for fading in
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Colorful text for dark mode
  const colorfulTitle = isDarkMode
    ? "text-4xl font-bold mb-6 colorful-heading"
    : "text-4xl font-bold mb-6 text-gray-800";

  return (
    <motion.section
      className={`py-20 ${
        isDarkMode ? "bg-black animated-bg" : "bg-gray-50"
      } transition-colors duration-300`}
      id='about'
      style={{ textAlign: "center" }}
      initial='hidden'
      animate='visible'
      variants={fadeIn}
    >
      <div className='container mx-auto px-4'>
        {/* Animated Title */}
        <motion.h2 className={colorfulTitle} variants={fadeIn}>
          About Me
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.div
          className={`max-w-3xl mx-auto text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } transition-colors duration-300`}
          variants={fadeIn}
        >
          <p className='mb-4'>
            Hi, I'm{" "}
            <span
              className={
                isDarkMode
                  ? "text-blue-400 font-medium"
                  : "text-blue-600 font-medium"
              }
            >
              Haileyesus Eyasu
            </span>
            , a passionate Full-Stack Developer with expertise in both web and
            mobile technologies.
          </p>

          <p className='mb-4'>
            I specialize in the{" "}
            <span
              className={
                isDarkMode
                  ? "text-green-400 font-medium"
                  : "text-green-600 font-medium"
              }
            >
              MERN stack
            </span>{" "}
            (MongoDB, Express.js, React.js, Node.js),
            <span
              className={
                isDarkMode
                  ? "text-blue-400 font-medium"
                  : "text-blue-600 font-medium"
              }
            >
              {" "}
              Golang
            </span>
            , and
            <span
              className={
                isDarkMode
                  ? "text-purple-400 font-medium"
                  : "text-purple-600 font-medium"
              }
            >
              {" "}
              React Native
            </span>{" "}
            for cross-platform mobile development.
          </p>

          <p className='mb-6'>
            I'm passionate about building{" "}
            <span
              className={
                isDarkMode
                  ? "text-yellow-400 font-medium"
                  : "text-yellow-600 font-medium"
              }
            >
              scalable applications
            </span>{" "}
            that solve complex problems and deliver exceptional user experiences
            across all platforms.
          </p>

          <div
            className={`inline-flex flex-wrap justify-center gap-3 p-4 rounded-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white shadow-md"
            }`}
          >
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              Web Development
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-purple-500 text-white"
                  : "bg-purple-100 text-purple-800"
              }`}
            >
              Mobile Apps
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-green-500 text-white"
                  : "bg-green-100 text-green-800"
              }`}
            >
              API Design
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode ? "bg-red-500 text-white" : "bg-red-100 text-red-800"
              }`}
            >
              Problem Solving
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
