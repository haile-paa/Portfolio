import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fade-in animation variant
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  // Hover animation variant (scale, rotate, and opacity)
  const hoverAnimation = {
    scale: 1.1,
    rotate: 10,
    opacity: 0.8,
    transition: { duration: 0.3 },
  };

  return (
    <motion.div
      className='flex justify-between items-center px-8 py-4 bg-white'
      initial='hidden'
      animate='visible'
      variants={fadeIn}
    >
      {/* Logo / Home Link with Hover Animation */}
      <motion.div
        className='text-purple-500 font-bold text-2xl'
        variants={fadeIn}
      >
        <Link to='/'>
          <motion.img
            src={assets.logo}
            alt='Logo'
            className='h-20 w-auto'
            whileHover={hoverAnimation} // Trigger animation on hover
            initial={{ scale: 1, rotate: 0, opacity: 1 }} // Initial state (before hover)
          />
        </Link>
      </motion.div>

      {/* Desktop Links */}
      <motion.div
        className='hidden md:flex items-center space-x-8'
        variants={fadeIn}
      >
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? "text-gray-600 hover:text-gray-900 border-b-2 border-blue-500 pb-1"
              : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? "text-gray-600 hover:text-gray-900 border-b-2 border-blue-500 pb-1"
              : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive
              ? "text-gray-600 hover:text-gray-900 border-b-2 border-blue-500 pb-1"
              : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
          }
        >
          Projects
        </NavLink>
      </motion.div>

      {/* Say Hello Button (always visible, centered) */}
      <motion.div className='flex justify-center items-center w-full md:w-auto'>
        <NavLink
          to='/contact'
          className='border border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'
        >
          Say Hello
        </NavLink>
      </motion.div>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button
          className='text-gray-600 hover:text-gray-900'
          onClick={toggleMobileMenu}
        >
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          className='md:hidden absolute top-0 left-0 right-0 bg-white shadow-lg p-4'
          initial='hidden'
          animate='visible'
          variants={fadeIn}
        >
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? "block text-gray-600 hover:text-gray-900 py-2 border-b-2 border-blue-500 pb-1"
                : "block text-gray-600 hover:text-gray-900 py-2 border-b-2 border-transparent"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? "block text-gray-600 hover:text-gray-900 py-2 border-b-2 border-blue-500 pb-1"
                : "block text-gray-600 hover:text-gray-900 py-2 border-b-2 border-transparent"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive
                ? "block text-gray-600 hover:text-gray-900 py-2 border-b-2 border-blue-500 pb-1"
                : "block text-gray-600 hover:text-gray-900 py-2 border-b-2 border-transparent"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </NavLink>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
