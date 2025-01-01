import React from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className='text-center py-16 bg-gray-50'>
      {/* Title */}
      <h1 className='text-4xl font-bold text-gray-800'>
        Full-Stack Web Developer
      </h1>

      {/* Subtitle */}
      <p className='text-gray-600 text-lg mt-4'>
        I design and code beautiful Web apps with amazing functionality, and I
        love what I do.
      </p>

      {/* Illustration */}
      <div className='mt-8 flex justify-center'>
        <img
          src={assets.picture}
          alt='Avatar'
          className='w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg object-cover'
        />
      </div>
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Hero;
