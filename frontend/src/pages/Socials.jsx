import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../App";

const Socials = () => {
  const { isDarkMode } = useTheme();

  const iconHover = {
    whileHover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.footer
      className={`py-8 ${
        isDarkMode ? "bg-gray-900 animated-bg" : "bg-gray-800"
      } transition-colors duration-300`}
      initial='hidden'
      animate='visible'
      variants={fadeIn}
    >
      <div className='container mx-auto text-center'>
        <p
          className={`text-lg font-semibold mb-6 ${
            isDarkMode ? "text-white" : "text-white"
          }`}
        >
          Connect with me:
        </p>
        <div className='flex justify-center space-x-8'>
          {/* Gmail */}
          <motion.a
            href='mailto:haileyesuseyasu@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center group'
            variants={iconHover}
            whileHover='whileHover'
          >
            <AiOutlineMail
              className={`h-8 w-8 ${
                isDarkMode
                  ? "text-red-400 group-hover:text-red-300"
                  : "text-red-500"
              } transition-colors duration-300`}
            />
            <span className='sr-only'>Gmail</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href='https://www.linkedin.com/in/haileyesus-eyasu-404795264'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center group'
            variants={iconHover}
            whileHover='whileHover'
          >
            <FaLinkedin
              className={`h-8 w-8 ${
                isDarkMode
                  ? "text-blue-400 group-hover:text-blue-300"
                  : "text-blue-500"
              } transition-colors duration-300`}
            />
            <span className='sr-only'>LinkedIn</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href='https://github.com/haile-paa'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center group'
            variants={iconHover}
            whileHover='whileHover'
          >
            <FaGithub
              className={`h-8 w-8 ${
                isDarkMode
                  ? "text-purple-400 group-hover:text-purple-300"
                  : "text-purple-500"
              } transition-colors duration-300`}
            />
            <span className='sr-only'>GitHub</span>
          </motion.a>
        </div>
        <p
          className={`mt-6 text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-300"
          } transition-colors duration-300`}
        >
          &copy; {new Date().getFullYear()} PA developments. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Socials;
