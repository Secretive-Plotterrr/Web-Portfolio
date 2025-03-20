// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

// Move navItems outside the component since it's static
const navItems = [
  { id: '#home', label: 'Home' },
  { id: '#about', label: 'About' },
  { id: '#certificates', label: 'Certificates' },
  { id: '#projects', label: 'Projects' },
  { id: '#contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('#home'); // Track active section
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track dropdown menu state

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      triggerAnimations(section); // Trigger animations on click
      setActiveSection(sectionId); // Set the clicked section as active
      setIsMenuOpen(false); // Close dropdown on mobile after click
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const triggerAnimations = (section) => {
    const animatedElements = section.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => {
      el.classList.remove('visible');
      void el.offsetWidth; // Force reflow
      setTimeout(() => {
        el.classList.add('visible');
      }, 100);
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: '0px', // No margin
      threshold: 0.5, // Trigger when 50% of section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = `#${entry.target.id}`;
          setActiveSection(sectionId); // Update active section
          triggerAnimations(entry.target); // Trigger animations when section is in view
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const section = document.querySelector(item.id);
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []); // Empty dependency array since navItems is now outside

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            <img
  src={`${process.env.PUBLIC_URL}/img/Logo.jpg`}
  alt="VoidStack Logo"
  className="h-10 w-10 rounded-full object-cover"
/>

            </a>
            <div className="text-2xl font-bold text-gray-800">VoidStack</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-gray-600 hover:text-gray-900 transition-colors cursor-pointer relative ${
                  activeSection === item.id ? 'text-gray-900' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform translate-y-2" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="xl:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="xl:hidden bg-white shadow-md absolute top-16 right-4 w-48 rounded-md py-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block px-4 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer relative ${
                  activeSection === item.id ? 'text-gray-900' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-4 w-[calc(100%-2rem)] h-0.5 bg-gray-900 transform translate-y-0.5" />
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;