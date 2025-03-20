// components/Certificates.jsx
import React, { useState, useEffect } from 'react';

function Certificates() {
  const certificates = [
    { id: 1, title: 'Certificate 1', image: `${process.env.PUBLIC_URL}/img/certificates/certificate.1.jpg` },
    { id: 2, title: 'Certificate 2', image: `${process.env.PUBLIC_URL}/img/certificates/certificate.2.jpg` },
    { id: 3, title: 'Certificate 3', image: `${process.env.PUBLIC_URL}/img/certificates/certificate3.jpg` },
    { id: 4, title: 'Certificate 4', image: `${process.env.PUBLIC_URL}/img/certificates/certificate4.jpg` },
    { id: 5, title: 'Certificate 5', image: `${process.env.PUBLIC_URL}/img/certificates/certificate5.jpg` },
    { id: 6, title: 'Certificate 6', image: `${process.env.PUBLIC_URL}/img/certificates/certificate6.jpg` },
    { id: 7, title: 'Certificate 7', image: `${process.env.PUBLIC_URL}/img/certificates/certificate7.jpg` },
    { id: 8, title: 'Certificate 8', image: `${process.env.PUBLIC_URL}/img/certificates/certificate8.jpg` },
    { id: 9, title: 'Certificate 9', image: `${process.env.PUBLIC_URL}/img/certificates/certificate9.jpg` },
    // Add more certificates as needed
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false); // Track if all certificates are shown

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Limit to 6 certificates unless showAll is true
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

  // Trigger animations when showAll changes
  useEffect(() => {
    const section = document.querySelector('#certificates');
    if (section) {
      const animatedElements = section.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el, index) => {
        el.classList.remove('visible');
        void el.offsetWidth; // Force reflow
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 100); // Staggered animation
      });
    }
  }, [showAll, displayedCertificates.length]); // Run when showAll or number of certificates changes

  return (
    <section id="certificates" className="py-20 px-4 bg-gray-300 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center animate-on-scroll" data-animation="fade-up">
          Certificates
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {displayedCertificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-lg shadow-md w-80 animate-on-scroll cursor-pointer transition-transform duration-300 hover:scale-105"
              data-animation="fade-up"
              data-delay={`${index * 0.2}s`}
              onClick={() => openModal(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">{cert.title}</h3>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {certificates.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={toggleShowAll}
              className="bg-gray-700 text-white hover:bg-gray-800 px-6 py-3 rounded-full text-lg transition-all duration-300 animate-on-scroll"
              data-animation="fade-up"
              data-delay="0.2s"
            >
              {showAll ? 'Show Less' : 'See More'}
            </button>
          </div>
        )}

        {/* Modal for viewing certificate */}
        {selectedCert && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white p-4 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 bg-gray-700 text-white hover:bg-gray-800 p-2 rounded-full transition-all duration-300"
                onClick={closeModal}
              >
                X
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain rounded-md"
              />
              <h3 className="text-2xl font-semibold text-gray-800 text-center mt-4">{selectedCert.title}</h3>
              <a
                href={selectedCert.image}
                download={`${selectedCert.title}.jpg`}
                className="mt-4 bg-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-full w-full block text-center transition-all duration-300"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certificates;
