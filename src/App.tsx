import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Divider from './components/Divider';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    // Apply theme to root element
    document.documentElement.setAttribute('data-theme', theme);
    // Save theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        ) : (
          <div key="content" className="app">
            <CustomCursor />
            <ScrollProgress />
            <Navigation theme={theme} toggleTheme={toggleTheme} />
            <BackToTop />
            <div id="hero">
              <Hero />
            </div>
            <Divider variant="gradient" />
            <div id="about">
              <About />
            </div>
            <Divider variant="glow" />
            <div id="projects">
              <Projects />
            </div>
            <Divider variant="dots" />
            <div id="skills">
              <Skills />
            </div>
            <Divider variant="default" />
            <div id="experience">
              <Experience />
            </div>
            <Divider variant="gradient" />
            <div id="contact">
              <Contact />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
