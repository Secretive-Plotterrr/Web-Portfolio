import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CertificateModal({ cert, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 bg-gray-700 text-white hover:bg-gray-800 p-2 rounded-full transition-all duration-300"
          onClick={onClose}
          aria-label="Close modal"
        >
          X
        </button>
        <img
          src={cert.image}
          alt={`Certificate: ${cert.title}`}
          className="w-full h-auto object-contain rounded-md"
          loading="lazy"
        />
        <h3 className="text-2xl font-semibold text-gray-800 text-center mt-4">{cert.title}</h3>
        <a
          href={cert.image}
          download={`${cert.title}.jpg`}
          className="mt-4 bg-gray-700 text-white hover:bg-gray-800 px-4 py-2 rounded-full w-full block text-center transition-all duration-300"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function Certificates() {
  const certificates = [
    { id: 1, title: 'Certificate 1', image: `${process.env.PUBLIC_URL}/img/certificates/certificate.1.jpg` },
    { id: 2, title: 'Certificate 2', image: `${process.env.PUBLIC_URL}/img/certificates/certificate.2.jpg` },
    { id: 3, title: 'Certificate 3', image: `${process.env.PUBLIC_URL}/img/certificates/certificate.3.jpg` },
    { id: 4, title: 'Certificate 4', image: `${process.env.PUBLIC_URL}/img/certificates/certificate.4.jpg` },
  ];

  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);
  const toggleShowAll = () => setShowAll(!showAll);

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCert]);

  // Add Escape key listener for modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="certificates" className="py-20 px-4 bg-gray-300 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Certificates</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <AnimatePresence>
            {displayedCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(cert)}
              >
                <img
                  src={cert.image}
                  alt={`Certificate: ${cert.title}`}
                  className="w-full h-56 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-gray-800 text-center">{cert.title}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {certificates.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={toggleShowAll}
              className="bg-gray-700 text-white hover:bg-gray-800 px-6 py-3 rounded-full text-lg transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'See More'}
            </button>
          </div>
        )}

        {selectedCert && <CertificateModal cert={selectedCert} onClose={closeModal} />}
      </div>
    </section>
  );
}

export default Certificates;