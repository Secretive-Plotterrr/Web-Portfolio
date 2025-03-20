// components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-400 py-6 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} VoidStack. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/rico-villamin-51072233b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Secretive-Plotterrr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/cosmoaintsimpp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-2xl"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;