import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useTheme } from "../App"; // Import the useTheme hook

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const { isDarkMode, toggleTheme } = useTheme(); // Get theme state and toggle function

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
      className='flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300'
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
            whileHover={hoverAnimation}
            initial={{ scale: 1, rotate: 0, opacity: 1 }}
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
              ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border-b-2 border-blue-500 pb-1 transition-colors duration-300"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border-b-2 border-transparent transition-colors duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border-b-2 border-blue-500 pb-1 transition-colors duration-300"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border-b-2 border-transparent transition-colors duration-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive
              ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border-b-2 border-blue-500 pb-1 transition-colors duration-300"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border-b-2 border-transparent transition-colors duration-300"
          }
        >
          Projects
        </NavLink>
      </motion.div>

      {/* Right side buttons (Say Hello and Dark Mode Toggle) */}
      <div className='flex items-center space-x-4'>
        {/* Say Hello Button (always visible, centered) */}
        <motion.div className='flex justify-center items-center w-full md:w-auto'>
          <NavLink
            to='/contact'
            className='border border-purple-500 text-purple-500 dark:border-purple-400 dark:text-purple-400 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white dark:hover:bg-purple-600 transition-colors duration-300'
          >
            Say Hello
          </NavLink>
        </motion.div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300'
          aria-label='Toggle dark mode'
        >
          {isDarkMode ? (
            <svg
              className='h-6 w-6 text-yellow-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          ) : (
            <svg
              className='h-6 w-6 text-gray-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            className='text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          ref={mobileMenuRef}
          className='md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg p-4 z-50 transition-colors duration-300'
          initial='hidden'
          animate='visible'
          variants={fadeIn}
        >
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? "block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 border-b-2 border-blue-500 transition-colors duration-300"
                : "block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 border-b-2 border-transparent transition-colors duration-300"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? "block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 border-b-2 border-blue-500 transition-colors duration-300"
                : "block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 border-b-2 border-transparent transition-colors duration-300"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive
                ? "block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 border-b-2 border-blue-500 transition-colors duration-300"
                : "block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2 border-b-2 border-transparent transition-colors duration-300"
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </NavLink>

          {/* Dark mode toggle in mobile menu */}
          <div className='pt-4 mt-4 border-t border-gray-200 dark:border-gray-700'>
            <button
              onClick={toggleTheme}
              className='flex items-center space-x-2 text-gray-600 dark:text-gray-300'
            >
              {isDarkMode ? (
                <>
                  <svg
                    className='h-5 w-5 text-yellow-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <svg
                    className='h-5 w-5 text-gray-700'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                    />
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
