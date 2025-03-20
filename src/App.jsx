// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates'; // Fixed import, assuming filename is Certificates.jsx
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimation from './useScrollAnimation';

function App() {
  useScrollAnimation(); // Enable scroll animations

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;