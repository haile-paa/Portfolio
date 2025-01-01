import React from "react";
import { FaReact } from "react-icons/fa"; // React icon
import { SiMongodb } from "react-icons/si"; // MongoDB icon
import { FaServer } from "react-icons/fa"; // Server/Backend icon

const Skills = () => {
  return (
    <div className='p-8 prose dark:prose-invert text-gray-800'>
      <h1 className='text-xl font-bold text-blue-600'>MY Skills :</h1>

      <div className='flex flex-col items-center justify-center p-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
          {/* Frontend Developer */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <div className='flex items-center justify-center mb-4'>
              <FaReact className='text-blue-500 h-16 w-16' /> {/* React Icon */}
            </div>
            <h2 className='text-xl font-bold text-blue-600'>
              Frontend Developer
            </h2>
            <p>
              Passionate about building interactive and user-friendly web
              applications using **React.js**, **Tailwind CSS**, and **Chakra
              UI**. I prioritize a seamless user experience, combining **CSS3**
              and **Toast Notifications** to enhance the UI and make it visually
              appealing and intuitive.
            </p>
            <h3 className='mt-4 font-semibold'>Key Frontend Skills:</h3>
            <ul>
              <li>Building responsive layouts with Tailwind CSS</li>
              <li>Creating interactive UIs using React.js</li>
              <li>UI components with Chakra UI</li>
              <li>Responsive design using CSS3</li>
              <li>Notification systems with Toast notifications</li>
            </ul>
          </div>

          {/* Backend Developer */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <div className='flex items-center justify-center mb-4'>
              <FaServer className='text-gray-600 h-16 w-16' />{" "}
              {/* Server/Backend Icon */}
            </div>
            <h2 className='text-xl font-bold text-blue-600'>
              Backend Developer
            </h2>
            <p>
              I specialize in building scalable and secure backends with
              **Node.js** and **Express.js**. Additionally, I have experience in
              **Go** for high-performance applications. With **MongoDB**, I
              manage databases efficiently and create APIs that interact
              seamlessly with the frontend.
            </p>
            <h3 className='mt-4 font-semibold'>Key Backend Skills:</h3>
            <ul>
              <li>API development with Node.js and Express.js</li>
              <li>Building high-performance services with Go</li>
              <li>Database management with MongoDB</li>
              <li>Authentication and authorization (JWT, OAuth)</li>
              <li>Integrating frontend with backend through RESTful APIs</li>
            </ul>
          </div>

          {/* Database */}
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <div className='flex items-center justify-center mb-4'>
              <SiMongodb className='text-green-500 h-16 w-16' />{" "}
              {/* MongoDB Icon */}
            </div>
            <h2 className='text-xl font-bold text-blue-600'>Database</h2>
            <p>
              Experienced in managing and querying **MongoDB** for NoSQL-based
              applications, ensuring fast, flexible, and scalable data storage
              solutions.
            </p>
            <h3 className='mt-4 font-semibold'>Database Skills:</h3>
            <ul>
              <li>Data modeling and schema design with MongoDB</li>
              <li>Efficient querying and indexing for performance</li>
              <li>Building and managing NoSQL databases for scalability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
