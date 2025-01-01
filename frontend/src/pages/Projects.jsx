import React from "react";
import jersey from "../assets/jersey-shop.png";
import pa_ai from "../assets/pa-ai.png";
import { FaServer } from "react-icons/fa"; // Importing the server icon

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
    img: <FaServer className='w-full h-full text-blue-600' />, // Using the icon as an image
    link: "https://github.com/haile-paa/ecommerce-backend",
  },
  {
    id: 3,
    title: "AI Article Summarizer",
    img: pa_ai,
    link: "https://haile-paa.github.io/PA-AI",
  },
];

const Projects = () => {
  return (
    <section className='px-8 py-16 bg-gray-50'>
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

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
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
                project.img // Render the icon directly
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
                {project.id === 2 ? "Visit Code" : "Visit Site"}
              </span>
            </a>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
