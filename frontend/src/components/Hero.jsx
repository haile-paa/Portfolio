import React from "react";
import { motion } from "framer-motion";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { assets } from "../assets/assets";
import { useTheme } from "../App"; // Import the useTheme hook

const Hero = () => {
  const { isDarkMode } = useTheme(); // Get the current theme

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`text-center py-16 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      {/* Title */}
      <motion.h1
        className={`text-4xl font-bold ${
          isDarkMode ? "text-white" : "text-gray-800"
        } transition-colors duration-300`}
        variants={fadeIn}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Full-Stack Web Developer
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className={`text-lg mt-4 ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        } transition-colors duration-300`}
        variants={fadeIn}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        I design and code beautiful Web apps with amazing functionality, and I
        love what I do.
      </motion.p>

      {/* Illustration */}
      <motion.div
        className='mt-8 flex justify-center'
        variants={fadeIn}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <motion.img
          src={assets.picture}
          alt='Avatar'
          className='w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg object-cover'
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
      </motion.div>

      {/* Sections */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      >
        <Projects />
      </motion.div>
    </div>
  );
};

export default Hero;
