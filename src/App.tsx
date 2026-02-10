import { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Divider from './components/Divider';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

// Lazy load heavy components for better performance
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

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
              <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
                <Projects />
              </Suspense>
            </div>
            <Divider variant="dots" />
            <div id="skills">
              <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
                <Skills />
              </Suspense>
            </div>
            <Divider variant="default" />
            <div id="experience">
              <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
                <Experience />
              </Suspense>
            </div>
            <Divider variant="gradient" />
            <div id="contact">
              <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
                <Contact />
              </Suspense>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
