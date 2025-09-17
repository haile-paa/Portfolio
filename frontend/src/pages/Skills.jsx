import React, { useState } from "react";
import { FaReact, FaMobile } from "react-icons/fa";
import { SiMongodb, SiExpo } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../App";

const Skills = () => {
  const [clickedSkill, setClickedSkill] = useState(null);
  const { isDarkMode } = useTheme();

  // Animation variants
  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

  // Function to get color class based on index and theme
  const getColorClass = (index, isDarkMode) => {
    if (isDarkMode) {
      return `${
        index % 6 === 0
          ? "bg-red-500 text-white"
          : index % 6 === 1
          ? "bg-blue-500 text-white"
          : index % 6 === 2
          ? "bg-green-500 text-white"
          : index % 6 === 3
          ? "bg-yellow-500 text-gray-900"
          : index % 6 === 4
          ? "bg-indigo-500 text-white"
          : "bg-purple-500 text-white"
      }`;
    } else {
      return "bg-purple-100 text-purple-800";
    }
  };

  // Skill data for each category
  const skillCategories = [
    {
      id: "frontend",
      icon: <FaReact className='text-blue-500 h-12 w-12' />,
      title: "Frontend",
      skills: ["React", "Tailwind CSS", "Redux", "JavaScript", "TypeScript"],
    },
    {
      id: "backend",
      icon: (
        <FaServer
          className={`h-12 w-12 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        />
      ),
      title: "Backend",
      skills: ["Node.js", "Express.js", "Golang", "REST APIs", "GraphQL"],
    },
    {
      id: "database",
      icon: <SiMongodb className='text-green-500 h-12 w-12' />,
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      id: "mobile",
      icon: <FaMobile className='text-purple-500 h-12 w-12' />,
      title: "Mobile",
      skills: ["React Native", "Expo", "iOS", "Android"],
    },
  ];

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
        className={`text-2xl font-bold text-center ${
          isDarkMode ? "text-blue-400" : "text-blue-600"
        } transition-colors duration-300`}
        variants={slideIn}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h1>

      {/* Skill Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            className={`p-6 rounded-lg shadow-lg ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } ${
              clickedSkill === category.id ? "transform rotate-5" : ""
            } transition-colors duration-300`}
            variants={slideIn}
            transition={{ duration: 0.8, delay: 0.2 * (categoryIndex + 1) }}
            whileHover={cardRotate.whileHover}
            whileTap={cardRotate.whileTap}
            onClick={() => handleCardClick(category.id)}
          >
            <div className='flex items-center justify-center mb-4'>
              {category.icon}
            </div>
            <h2
              className={`text-lg font-bold text-center ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              } transition-colors duration-300`}
            >
              {category.title}
            </h2>

            {/* Colorful skill tags integrated into each card */}
            <div className='flex flex-wrap justify-center gap-2 mt-4'>
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getColorClass(
                    skillIndex,
                    isDarkMode
                  )} transition-colors duration-300`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
