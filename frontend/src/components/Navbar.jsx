import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets"; // Ensure assets is imported correctly

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null); // Create a ref to track the mobile menu

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

  return (
    <div className='flex justify-between items-center px-8 py-4 bg-white'>
      {/* Logo / Home Link */}
      <div className='text-purple-500 font-bold text-2xl'>
        <Link to='/'>
          <img src={assets.logo} alt='Logo' className='h-20 w-auto' />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className='hidden md:flex items-center space-x-8'>
        <Link to='/' className='text-gray-600 hover:text-gray-900'>
          Home
        </Link>
        <Link to='/about' className='text-gray-600 hover:text-gray-900'>
          About
        </Link>
        <Link to='/projects' className='text-gray-600 hover:text-gray-900'>
          Projects
        </Link>
        <Link
          to='/contact'
          className='border border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'
        >
          Say Hello
        </Link>
      </div>

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
        <div
          ref={mobileMenuRef} // Attach the ref here
          className='md:hidden absolute top-0 left-0 right-0 bg-white shadow-lg p-4'
        >
          <Link
            to='/'
            className='block text-gray-600 hover:text-gray-900 py-2'
            onClick={() => setIsMobileMenuOpen(false)} // Close menu when link is clicked
          >
            Home
          </Link>
          <Link
            to='/about'
            className='block text-gray-600 hover:text-gray-900 py-2'
            onClick={() => setIsMobileMenuOpen(false)} // Close menu when link is clicked
          >
            About
          </Link>
          <Link
            to='/projects'
            className='block text-gray-600 hover:text-gray-900 py-2'
            onClick={() => setIsMobileMenuOpen(false)} // Close menu when link is clicked
          >
            Projects
          </Link>
          <Link
            to='/contact'
            className='block text-gray-600 hover:text-gray-900 py-2 border-t border-gray-200'
            onClick={() => setIsMobileMenuOpen(false)} // Close menu when link is clicked
          >
            Say Hello
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
