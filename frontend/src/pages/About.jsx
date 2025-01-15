import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants for fading in
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className='py-20 bg-gray-50'
      id='about'
      style={{ textAlign: "center" }}
      initial='hidden'
      animate='visible'
      variants={fadeIn}
    >
      <div className='container mx-auto'>
        {/* Animated Title */}
        <motion.h2
          className='text-4xl font-bold mb-4 text-gray-800'
          variants={fadeIn}
        >
          About Me
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p className='text-lg text-gray-600' variants={fadeIn}>
          My Name is Haileyesus Eyasu. I'm a Full-Stack Developer specializing
          in MERN <br /> (MongoDB, Express.js, React.js, Node.js) and Golang.
          <br /> Passionate about building scalable web applications and solving
          complex problems.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
