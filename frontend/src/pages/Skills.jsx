import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../App"; // Import the useTheme hook

const Skills = () => {
  const [clickedSkill, setClickedSkill] = useState(null);
  const { isDarkMode } = useTheme(); // Get the current theme

  // Animation variants
  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const cardRotate = {
    whileHover: {
      rotate: 5,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
    whileTap: {
      rotate: 5,
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  // Handle click to toggle the clicked state for mobile
  const handleCardClick = (skill) => {
    if (clickedSkill === skill) {
      setClickedSkill(null);
    } else {
      setClickedSkill(skill);
    }
  };

  return (
    <motion.div
      className={`p-8 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
      initial='hidden'
      animate='visible'
      variants={slideIn}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h1
        className={`text-xl font-bold ${
          isDarkMode ? "text-blue-400" : "text-blue-600"
        } transition-colors duration-300`}
        variants={slideIn}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>

      {/* Skill Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
        {/* Frontend Developer */}
        <motion.div
          className={`p-6 rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } ${
            clickedSkill === "frontend" ? "transform rotate-5" : ""
          } transition-colors duration-300`}
          variants={slideIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={cardRotate.whileHover}
          whileTap={cardRotate.whileTap}
          onClick={() => handleCardClick("frontend")}
        >
          <div className='flex items-center justify-center mb-4'>
            <FaReact className='text-blue-500 h-16 w-16' />
          </div>
          <h2
            className={`text-lg font-bold ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            } transition-colors duration-300`}
          >
            Frontend
          </h2>
          <p
            className={`text-sm mt-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } transition-colors duration-300`}
          >
            React.js, Tailwind CSS
          </p>
        </motion.div>

        {/* Backend Developer */}
        <motion.div
          className={`p-6 rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } ${
            clickedSkill === "backend" ? "transform rotate-5" : ""
          } transition-colors duration-300`}
          variants={slideIn}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={cardRotate.whileHover}
          whileTap={cardRotate.whileTap}
          onClick={() => handleCardClick("backend")}
        >
          <div className='flex items-center justify-center mb-4'>
            <FaServer
              className={`h-16 w-16 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } transition-colors duration-300`}
            />
          </div>
          <h2
            className={`text-lg font-bold ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            } transition-colors duration-300`}
          >
            Backend
          </h2>
          <p
            className={`text-sm mt-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } transition-colors duration-300`}
          >
            Node.js, Express.js, Golang
          </p>
        </motion.div>

        {/* Database */}
        <motion.div
          className={`p-6 rounded-lg shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } ${
            clickedSkill === "database" ? "transform rotate-5" : ""
          } transition-colors duration-300`}
          variants={slideIn}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={cardRotate.whileHover}
          whileTap={cardRotate.whileTap}
          onClick={() => handleCardClick("database")}
        >
          <div className='flex items-center justify-center mb-4'>
            <SiMongodb className='text-green-500 h-16 w-16' />
          </div>
          <h2
            className={`text-lg font-bold ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            } transition-colors duration-300`}
          >
            Database
          </h2>
          <p
            className={`text-sm mt-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } transition-colors duration-300`}
          >
            MongoDB
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
