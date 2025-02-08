import React from "react";
import { motion } from "framer-motion";
import cryptoplace from "../assets/cryptoPlace.png";
import jersey from "../assets/jersey-shop.png";
import pa_ai from "../assets/pa-ai.png";
import { FaServer, FaGithub } from "react-icons/fa"; // Importing the server and GitHub icons
import { SiGo } from "react-icons/si"; // Import the Go icon

const projects = [
  {
    id: 1,
    title: "Jersey Shop",
    img: jersey,
    link: "https://pa-jersey-shop.vercel.app",
  },

  {
    id: 2,
    title: "Go Ecommerce Backend",
    img: <SiGo className='w-12 h-12 text-blue-600' />, // Use Go icon for "Go" projects
    link: "https://github.com/haile-paa/ecommerce-backend",
  },
  {
    id: 3,
    title: "Crypto Parket Place",
    img: cryptoplace,
    link: "https://pa-crypto.vercel.app",
  },
  {
    id: 4,
    title: "AI Article Summarizer",
    img: pa_ai,
    link: "https://haile-paa.github.io/PA-AI",
  },
];

const Projects = () => {
  // Animation variants for fading in and sliding up
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className='px-8 py-16 bg-gray-50'
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-bold text-gray-900'>My Recent Work</h2>
        <p className='text-gray-600 mt-4'>
          Here are a few past projects I've worked on. Want to see more?{" "}
          <a
            href='mailto:haileyesuseyasu@gmail.com'
            className='text-blue-600 hover:underline'
          >
            Email me.
          </a>
        </p>
      </div>

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className='group relative rounded-lg overflow-hidden shadow-lg'
          >
            <div
              className={`w-full h-48 ${
                project.id === 2
                  ? "flex justify-center items-center bg-gray-200"
                  : ""
              }`}
            >
              {project.id === 2 ? (
                project.img // Render the Go icon if the project contains "Go"
              ) : (
                <img
                  src={project.img}
                  alt={project.title}
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
              )}
            </div>

            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            >
              <span className='text-white text-lg font-semibold'>
                {project.id === 2 ? (
                  <div className='flex items-center space-x-2'>
                    <FaGithub className='text-white' />
                    <span>Visit Code</span>
                  </div>
                ) : (
                  "Visit Site"
                )}
              </span>
            </a>

            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
