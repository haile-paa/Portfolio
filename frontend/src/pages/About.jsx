import React from "react";

const About = () => {
  return (
    <section
      className='py-20 bg-gray-50'
      id='about'
      style={{ textAlign: "center" }}
    >
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold mb-4 text-gray-800'>About Me</h2>
        <p className='text-lg text-gray-600'>
          My Name is Haileyesus Eyasu .I'm a Full-Stack Developer specializing
          in MERN <br /> (MongoDB, Express.js, React.js, Node.js) and Golang.
          <br /> Passionate about building scalable web applications and solving
          complex problems.
        </p>
      </div>
    </section>
  );
};

export default About;
