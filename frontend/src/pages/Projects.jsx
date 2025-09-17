// Projects.jsx (updated with colorful elements)
import React, { useState } from "react";
import { motion } from "framer-motion";
import cryptoplace from "../assets/cryptoPlace.png";
import jersey from "../assets/jersey-shop.png";
import pa_ai from "../assets/pa-ai.png";
import { FaServer, FaGithub, FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import { SiGo } from "react-icons/si";
import { useTheme } from "../App";

const projects = [
  {
    id: 1,
    title: "Jersey Shop",
    img: jersey,
    link: "https://pa-jersey-shop.vercel.app",
    type: "web",
    color: "rainbow-green",
  },
  {
    id: 2,
    title: "Crypto Parket Place",
    img: cryptoplace,
    link: "https://pa-crypto.vercel.app",
    type: "web",
    color: "rainbow-blue",
  },
  {
    id: 3,
    title: "Go Ecommerce Backend",
    img: <SiGo className='w-12 h-12 text-blue-600 dark:text-blue-400' />,
    link: "https://github.com/haile-paa/ecommerce-backend",
    type: "web",
    color: "rainbow-indigo",
  },
  {
    id: 4,
    title: "AI Article Summarizer",
    img: pa_ai,
    link: "https://haile-paa.github.io/PA-AI",
    type: "web",
    color: "rainbow-violet",
  },
];

const mobileApps = [
  {
    id: 1,
    title: "Weather Forecast App",
    description:
      "Real-time weather updates with beautiful UI and detailed forecasts",
    demoLink: "https://your-app-demo.vercel.app",
    playStoreLink: "#",
    appStoreLink: "#",
    technologies: ["React Native", "Redux", "Weather API"],
    features: [
      "Live weather data",
      "7-day forecast",
      "Location-based forecasts",
      "Severe weather alerts",
    ],
    color: "rainbow-blue",
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description:
      "Track workouts, set goals, and monitor your progress with detailed analytics",
    demoLink: "https://your-fitness-demo.vercel.app",
    playStoreLink: "#",
    appStoreLink: "#",
    technologies: ["React Native", "Firebase", "Health Kit", "Chart.js"],
    features: [
      "Workout tracking",
      "Goal setting",
      "Progress charts",
      "Social sharing",
    ],
    color: "rainbow-red",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedApp, setSelectedApp] = useState(mobileApps[0]);
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);
  const { isDarkMode } = useTheme();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to handle demo playback
  const handlePlayDemo = () => {
    setIsDemoPlaying(true);
  };

  // Get color class based on project and theme
  const getColorClass = (color, isBg = false) => {
    if (!isDarkMode) {
      return isBg ? "bg-purple-100" : "text-purple-800";
    }
    return isBg ? `bg-${color}` : "text-white";
  };

  return (
    <motion.section
      className={`px-8 py-16 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      } transition-colors duration-300`}
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className='text-center mb-12'>
        <h2
          className={`text-3xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } transition-colors duration-300`}
        >
          My Recent Work
        </h2>

        {/* Tab Navigation */}
        <div className='flex justify-center mt-6 mb-4'>
          <div className='flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden'>
            <button
              className={`px-6 py-2 font-medium ${
                activeTab === "web"
                  ? isDarkMode
                    ? "bg-rainbow-green text-white"
                    : "bg-blue-600 text-white"
                  : `${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-white text-gray-700"
                    }`
              } transition-colors duration-300`}
              onClick={() => setActiveTab("web")}
            >
              Websites
            </button>
            <button
              className={`px-6 py-2 font-medium ${
                activeTab === "mobile"
                  ? isDarkMode
                    ? "bg-rainbow-blue text-white"
                    : "bg-blue-600 text-white"
                  : `${
                      isDarkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-white text-gray-700"
                    }`
              } transition-colors duration-300`}
              onClick={() => setActiveTab("mobile")}
            >
              Applications
            </button>
          </div>
        </div>

        <p
          className={`mt-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } transition-colors duration-300`}
        >
          {activeTab === "web"
            ? "Here are a few past web projects I've worked on."
            : "Check out my mobile applications with live previews."}{" "}
          Want to see more?{" "}
          <a
            href='mailto:haileyesuseyasu@gmail.com'
            className={`${
              isDarkMode ? "text-rainbow-blue" : "text-blue-600"
            } hover:underline transition-colors duration-300`}
          >
            Email me.
          </a>
        </p>
      </div>

      {/* Web Projects */}
      {activeTab === "web" && (
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative rounded-lg overflow-hidden shadow-lg ${
                isDarkMode ? "bg-gray-700" : "bg-white"
              } transition-colors duration-300`}
            >
              <div
                className={`w-full h-48 ${
                  project.id === 3
                    ? "flex justify-center items-center bg-gray-200 dark:bg-gray-600"
                    : ""
                } transition-colors duration-300`}
              >
                {project.id === 3 ? (
                  project.img
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
                  {project.id === 3 ? (
                    <div className='flex items-center space-x-2'>
                      <FaGithub className='text-white' />
                      <span>Visit Code</span>
                    </div>
                  ) : (
                    "Visit Site"
                  )}
                </span>
              </a>

              <div className='p-4'>
                <h3
                  className={`text-lg font-semibold ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  } transition-colors duration-300`}
                >
                  {project.title}
                </h3>
                <div
                  className={`mt-2 w-12 h-1 ${
                    isDarkMode ? `bg-${project.color}` : "bg-purple-500"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Mobile Apps */}
      {activeTab === "mobile" && (
        <motion.div
          className='flex flex-col lg:flex-row gap-10 items-start'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          {/* App Demo Section */}
          <div className='w-full lg:w-1/2'>
            <div
              className={`rounded-xl shadow-lg overflow-hidden ${
                isDarkMode ? "bg-gray-700" : "bg-white"
              } transition-colors duration-300`}
            >
              <div className='relative'>
                {/* Phone Mockup */}
                <div className='phone-mockup mx-auto'>
                  <div className='phone-screen'>
                    {isDemoPlaying ? (
                      <iframe
                        src={selectedApp.demoLink}
                        className='w-full h-full border-0'
                        title={`${selectedApp.title} Demo`}
                        allow='accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment'
                        allowFullScreen
                      />
                    ) : (
                      <div
                        className={`h-full flex flex-col items-center justify-center p-4 ${
                          isDarkMode
                            ? "bg-gray-800"
                            : "bg-gradient-to-br from-blue-50 to-purple-50"
                        } transition-colors duration-300`}
                      >
                        <div className='text-center'>
                          <h3
                            className={`text-xl font-bold ${
                              isDarkMode ? "text-white" : "text-gray-800"
                            } transition-colors duration-300`}
                          >
                            {selectedApp.title}
                          </h3>
                          <p
                            className={`mb-6 ${
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            } transition-colors duration-300`}
                          >
                            {selectedApp.description}
                          </p>
                          <button
                            onClick={handlePlayDemo}
                            className={`flex items-center justify-center gap-2 ${
                              isDarkMode
                                ? "bg-rainbow-green hover:bg-rainbow-blue"
                                : "bg-blue-600 hover:bg-blue-700"
                            } text-white px-6 py-3 rounded-lg transition-colors mx-auto`}
                          >
                            <FaPlay className='text-sm' />
                            <span>Launch Live Demo</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className='p-6'>
                <div className='flex justify-between items-center mb-4'>
                  <h3
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    } transition-colors duration-300`}
                  >
                    {selectedApp.title}
                  </h3>
                  <div className='flex gap-2'>
                    <a
                      href={selectedApp.playStoreLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`${
                        isDarkMode
                          ? "bg-rainbow-green hover:bg-rainbow-blue"
                          : "bg-green-600 hover:bg-green-700"
                      } text-white p-2 rounded-lg transition-colors`}
                      title='Google Play Store'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5.877 0C2.632 0 0 2.632 0 5.877v12.246C0 21.368 2.632 24 5.877 24h12.246A5.877 5.877 0 0024 18.123V5.877C24 2.632 21.368 0 18.123 0H5.877zm.564 3.782h11.12c.69 0 1.249.56 1.249 1.249v11.12c0 .69-.56 1.249-1.25 1.249h-11.12a1.249 1.249 0 01-1.249-1.25V5.03c0-.689.56-1.249 1.25-1.249zm10.683 1.249H7.876v10.122h9.248V5.031zm-9.41.416v9.29h9.615v-9.29H7.714zm4.808 8.02c-.293 0-.53.238-.53.53 0 .293.237.53.53.53.292 0 .53-.237.53-.53a.53.53 0 00-.53-.53z' />
                      </svg>
                    </a>
                    <a
                      href={selectedApp.appStoreLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`${
                        isDarkMode
                          ? "bg-rainbow-blue hover:bg-rainbow-indigo"
                          : "bg-gray-800 hover:bg-gray-900"
                      } text-white p-2 rounded-lg transition-colors`}
                      title='Apple App Store'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M17.05 12.04C17.05 9.44 19.18 8.35 19.27 8.29C18.16 6.63 16.33 6.36 15.67 6.34C14.17 6.16 12.73 7.22 12.01 7.22C11.27 7.22 10.04 6.36 8.77 6.38C7.09 6.41 5.57 7.34 4.77 8.87C3.02 12.1 4.33 17.07 6.02 19.72C6.82 20.97 7.75 22.35 8.98 22.3C10.19 22.25 10.62 21.55 12.14 21.55C13.65 21.55 14.05 22.3 15.31 22.27C16.59 22.25 17.41 21.01 18.19 19.76C19.09 18.38 19.49 17.03 19.5 16.97C19.46 16.96 17.05 15.9 17.05 12.04ZM15.29 4.47C15.87 3.75 16.28 2.73 16.13 1.75C15.26 1.78 14.22 2.29 13.6 3.01C13.07 3.63 12.57 4.67 12.74 5.62C13.72 5.69 14.66 5.17 15.29 4.47Z' />
                      </svg>
                    </a>
                    <a
                      href={selectedApp.demoLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`${
                        isDarkMode
                          ? "bg-rainbow-violet hover:bg-rainbow-red"
                          : "bg-blue-600 hover:bg-blue-700"
                      } text-white p-2 rounded-lg transition-colors`}
                      title='Open in New Tab'
                    >
                      <FaExternalLinkAlt className='w-4 h-4' />
                    </a>
                  </div>
                </div>

                <p
                  className={`mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } transition-colors duration-300`}
                >
                  {selectedApp.description}
                </p>

                <div className='mb-4'>
                  <h4
                    className={`font-semibold mb-2 ${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    } transition-colors duration-300`}
                  >
                    Key Features:
                  </h4>
                  <ul
                    className={`list-disc list-inside ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    } transition-colors duration-300`}
                  >
                    {selectedApp.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4
                    className={`font-semibold mb-2 ${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    } transition-colors duration-300`}
                  >
                    Technologies:
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {selectedApp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode
                            ? `${
                                index % 6 === 0
                                  ? "bg-rainbow-red text-white"
                                  : index % 6 === 1
                                  ? "bg-rainbow-blue text-white"
                                  : index % 6 === 2
                                  ? "bg-rainbow-green text-white"
                                  : index % 6 === 3
                                  ? "bg-rainbow-yellow text-gray-900"
                                  : index % 6 === 4
                                  ? "bg-rainbow-indigo text-white"
                                  : "bg-rainbow-violet text-white"
                              }`
                            : "bg-blue-100 text-blue-800"
                        } transition-colors duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* App Selection */}
          <div className='w-full lg:w-1/2'>
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-gray-800"
              } transition-colors duration-300`}
            >
              My Mobile Applications
            </h3>
            <p
              className={`mb-8 ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } transition-colors duration-300`}
            >
              These are native mobile applications I've developed using React
              Native. Each app is available on both iOS and Android platforms.
              Click on any app to view details and launch a live demo.
            </p>

            <div className='space-y-6'>
              {mobileApps.map((app) => (
                <div
                  key={app.id}
                  onClick={() => {
                    setSelectedApp(app);
                    setIsDemoPlaying(false);
                  }}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedApp.id === app.id
                      ? `${
                          isDarkMode
                            ? `bg-${app.color} border-${app.color}`
                            : "bg-blue-50 border-blue-500"
                        } border-2`
                      : `${
                          isDarkMode
                            ? "bg-gray-700 border-gray-600 hover:bg-gray-600"
                            : "bg-white border-gray-200 hover:bg-gray-50"
                        } border`
                  } transition-colors duration-300`}
                >
                  <div className='flex items-start gap-4'>
                    <div
                      className={`flex-shrink-0 w-16 h-16 ${
                        isDarkMode
                          ? `bg-${app.color}`
                          : "bg-gradient-to-br from-blue-400 to-purple-500"
                      } rounded-xl flex items-center justify-center shadow-md`}
                    >
                      <span className='text-white text-2xl'>
                        {app.id === 1 ? "🌤️" : "🏃"}
                      </span>
                    </div>
                    <div>
                      <h4
                        className={`font-semibold ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        } transition-colors duration-300`}
                      >
                        {app.title}
                      </h4>
                      <p
                        className={`text-sm mt-1 line-clamp-2 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        } transition-colors duration-300`}
                      >
                        {app.description}
                      </p>
                      <div className='flex flex-wrap gap-1 mt-2'>
                        {app.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 rounded-full text-xs ${
                              isDarkMode
                                ? `${
                                    index % 6 === 0
                                      ? "bg-rainbow-red text-white"
                                      : index % 6 === 1
                                      ? "bg-rainbow-blue text-white"
                                      : index % 6 === 2
                                      ? "bg-rainbow-green text-white"
                                      : "bg-gray-600 text-gray-200"
                                  }`
                                : "bg-gray-100 text-gray-700"
                            } transition-colors duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`mt-8 rounded-xl p-6 ${
                isDarkMode ? "bg-rainbow-indigo" : "bg-blue-50"
              } transition-colors duration-300`}
            >
              <h4
                className={`font-semibold mb-2 ${
                  isDarkMode ? "text-blue-200" : "text-blue-800"
                } transition-colors duration-300`}
              >
                About the Live Demos
              </h4>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-blue-200" : "text-blue-700"
                } transition-colors duration-300`}
              >
                The live demos are powered by React Native Web, allowing you to
                experience the app directly in your browser. For the full native
                experience with all features, download the app from the app
                stores.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .phone-mockup {
          position: relative;
          width: 320px;
          height: 650px;
          background: ${isDarkMode ? "#374151" : "#f0f0f0"};
          border-radius: 40px;
          box-shadow: 0 0 0 11px ${isDarkMode ? "#111827" : "#1f1f1f"},
            0 0 0 13px ${isDarkMode ? "#1f2937" : "#191919"},
            0 0 0 20px ${isDarkMode ? "#0f172a" : "#111"};
          overflow: hidden;
          margin: 0 auto;
          transition: all 0.3s ease;
        }

        .phone-mockup:before {
          content: "";
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 56%;
          height: 25px;
          background: ${isDarkMode ? "#111827" : "#1f1f1f"};
          border-radius: 0 0 10px 10px;
          z-index: 2;
        }

        .phone-screen {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          background: white;
          border-radius: 30px;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </motion.section>
  );
};

export default Projects;
