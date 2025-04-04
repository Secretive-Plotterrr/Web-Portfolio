import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Web Developer';
  const typingSpeed = 100; // Speed of typing (ms per character)
  const pauseDuration = 2000; // Pause before reset (ms)

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;

    const typeAndReset = () => {
      if (isTyping) {
        // Typing phase
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
          setTimeout(typeAndReset, typingSpeed);
        } else {
          // Pause after typing
          isTyping = false;
          setTimeout(typeAndReset, pauseDuration);
        }
      } else {
        // Reset phase
        currentIndex = 0;
        setTypedText('');
        isTyping = true;
        setTimeout(typeAndReset, 500); // Small delay before restarting
      }
    };

    typeAndReset();

    // Cleanup to prevent multiple intervals
    return () => clearTimeout();
  }, [fullText]); // Dependency array ensures effect runs if fullText changes

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gray-100 text-gray-800">
      <div className="text-center px-4">
        {/* Profile Picture */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto mb-6 overflow-hidden">
          <img src={`${process.env.PUBLIC_URL}/img/pfp.jpg`} alt="Rico Villamin" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-on-scroll" data-animation="fade-up">
          Rico Villamin
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-on-scroll" data-animation="fade-up" data-delay="0.2s">
          {typedText}
          <span className="animate-blink">|</span> {/* Cursor effect */}
        </p>
        <p className="text-lg text-gray-600 mb-8 animate-on-scroll" data-animation="fade-up" data-delay="0.3s">
          Hello! Welcome to my portfolio. I’m excited to share my work with you!
        </p>
        <a
          href="/files/CV.pdf"
          download="Rico_Villamin_Resume.pdf"
          className="bg-gray-700 text-white hover:bg-gray-800 px-6 py-3 rounded-full text-lg transition-all duration-300 animate-on-scroll inline-block"
          data-animation="fade-up"
          data-delay="0.4s"
        >
          Download CV
        </a>
        <div className="mt-6 flex justify-center space-x-6 animate-on-scroll" data-animation="fade-up" data-delay="0.6s">
          <a
            href="https://www.linkedin.com/in/rico-villamin-51072233b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Secretive-Plotterrr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/cosmoaintsimpp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors text-2xl"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;