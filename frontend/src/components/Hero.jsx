import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { assets } from "../assets/assets";
import { useTheme } from "../App";

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Full-Stack Developer";

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className={`text-center py-16 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      {/* Title with Typewriter and Rainbow Effect */}
      <motion.div
        className='typewriter-container mb-4'
        variants={fadeIn}
        initial='hidden'
        animate='visible'
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className={`text-4xl font-bold rainbow-text typewriter ${
            isTyping ? "typing" : ""
          }`}
        >
          {text}
          <span className='cursor'>|</span>
        </h1>
      </motion.div>

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
        I design and code beautiful Websites & Mobile Apps with amazing
        functionality, and I love what I do.
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

      {/* Add CSS for rainbow text and typewriter effect */}
      <style jsx>{`
        .rainbow-text {
          background: linear-gradient(
            to right,
            #ef4444,
            #f97316,
            #eab308,
            #22c55e,
            #3b82f6,
            #6366f1,
            #8b5cf6
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rainbow 2s linear infinite;
          display: inline-block;
        }

        @keyframes rainbow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .typewriter-container {
          display: inline-block;
        }

        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          margin: 0 auto;
        }

        .typing {
          animation: typing 1.5s steps(22, end);
        }

        .cursor {
          animation: blink 1s infinite;
          color: ${isDarkMode ? "#fff" : "#000"};
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
