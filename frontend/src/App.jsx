import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Socials from "./pages/Socials";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

// Create a Theme Context
export const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to true for dark mode

  // Set dark mode by default and override any saved preferences
  useEffect(() => {
    // Always set to dark mode, ignore any saved preferences
    setIsDarkMode(true);
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }, []);

  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className='min-h-screen bg-white dark:bg-black transition-colors duration-300'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Socials />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
