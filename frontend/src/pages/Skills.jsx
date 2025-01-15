import React, { useState } from "react";
import { FaReact } from "react-icons/fa"; // React icon
import { SiMongodb } from "react-icons/si"; // MongoDB icon
import { FaServer } from "react-icons/fa"; // Server/Backend icon
import { motion } from "framer-motion";

const Skills = () => {
  const [clickedSkill, setClickedSkill] = useState(null); // Track clicked skill

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
      rotate: 5, // Apply rotation when clicked (on mobile)
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  // Handle click to toggle the clicked state for mobile
  const handleCardClick = (skill) => {
    if (clickedSkill === skill) {
      setClickedSkill(null); // Deselect if the same card is clicked again
    } else {
      setClickedSkill(skill);
    }
  };

  return (
    <motion.div
      className='p-8 text-gray-800'
      initial='hidden'
      animate='visible'
      variants={slideIn}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h1
        className='text-xl font-bold text-blue-600'
        variants={slideIn}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h1>

      {/* Skill Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
        {/* Frontend Developer */}
        <motion.div
          className={`bg-white p-6 rounded-lg shadow-lg ${
            clickedSkill === "frontend" ? "transform rotate-5" : ""
          }`}
          variants={slideIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={cardRotate.whileHover}
          whileTap={cardRotate.whileTap} // Apply rotation on click (tap)
          onClick={() => handleCardClick("frontend")} // Click handler
        >
          <div className='flex items-center justify-center mb-4'>
            <FaReact className='text-blue-500 h-16 w-16' />
          </div>
          <h2 className='text-lg font-bold text-blue-600'>Frontend</h2>
          <p className='text-sm text-gray-600 mt-2'>React.js, Tailwind CSS</p>
        </motion.div>

        {/* Backend Developer */}
        <motion.div
          className={`bg-white p-6 rounded-lg shadow-lg ${
            clickedSkill === "backend" ? "transform rotate-5" : ""
          }`}
          variants={slideIn}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={cardRotate.whileHover}
          whileTap={cardRotate.whileTap} // Apply rotation on click (tap)
          onClick={() => handleCardClick("backend")} // Click handler
        >
          <div className='flex items-center justify-center mb-4'>
            <FaServer className='text-gray-600 h-16 w-16' />
          </div>
          <h2 className='text-lg font-bold text-blue-600'>Backend</h2>
          <p className='text-sm text-gray-600 mt-2'>
            Node.js, Express.js, Golang
          </p>
        </motion.div>

        {/* Database */}
        <motion.div
          className={`bg-white p-6 rounded-lg shadow-lg ${
            clickedSkill === "database" ? "transform rotate-5" : ""
          }`}
          variants={slideIn}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={cardRotate.whileHover}
          whileTap={cardRotate.whileTap} // Apply rotation on click (tap)
          onClick={() => handleCardClick("database")} // Click handler
        >
          <div className='flex items-center justify-center mb-4'>
            <SiMongodb className='text-green-500 h-16 w-16' />
          </div>
          <h2 className='text-lg font-bold text-blue-600'>Database</h2>
          <p className='text-sm text-gray-600 mt-2'>MongoDB</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
