import React from "react";
import { AiOutlineMail } from "react-icons/ai"; // Gmail icon
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon
import { motion } from "framer-motion";

const Socials = () => {
  const iconHover = {
    whileHover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.footer
      className='bg-gray-800 py-6 text-white'
      initial='hidden'
      animate='visible'
      variants={fadeIn}
    >
      <div className='container mx-auto text-center'>
        <p className='text-lg font-semibold mb-4'>Connect with me:</p>
        <div className='flex justify-center space-x-8'>
          {/* Gmail */}
          <motion.a
            href='mailto:haileyesuseyasu@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
            variants={iconHover}
            whileHover='whileHover'
          >
            <AiOutlineMail className='h-8 w-8 text-red-500' />
            <span className='sr-only'>Gmail</span>
          </motion.a>
          {/* LinkedIn */}
          <motion.a
            href='https://www.linkedin.com/in/haileyesus-eyasu-404795264'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center'
            variants={iconHover}
            whileHover='whileHover'
          >
            <FaLinkedin className='h-8 w-8 text-blue-500' />
            <span className='sr-only'>LinkedIn</span>
          </motion.a>
        </div>
        <p className='mt-6 text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} PA developments. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Socials;
