import React from "react";
import { AiOutlineMail } from "react-icons/ai"; // Gmail icon
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon

const Socials = () => {
  return (
    <footer className='bg-gray-800 py-6 text-white'>
      <div className='container mx-auto text-center'>
        <p className='text-lg font-semibold mb-4'>Connect with me:</p>
        <div className='flex justify-center space-x-8'>
          {/* Gmail */}
          <a
            href='mailto:haileyesuseyasu@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <AiOutlineMail className='h-8 w-8 text-red-500 hover:opacity-80 transition-opacity' />
            <span className='sr-only'>Gmail</span>
          </a>
          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/haileyesus-eyasu-404795264'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
          >
            <FaLinkedin className='h-8 w-8 text-blue-500 hover:opacity-80 transition-opacity' />
            <span className='sr-only'>LinkedIn</span>
          </a>
        </div>
        <p className='mt-6 text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} PA developments. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Socials;
