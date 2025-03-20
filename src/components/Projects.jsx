// components/Projects.jsx
import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A modern e-commerce platform built with React and Node.js.',
      image: '/img/ai.jpg', // Adjust path as needed
      demoLink: 'https://github.com/Secretive-Plotterrr?tab=projects', // Replace with actual GitHub link
    },
    {
      title: 'Project 2',
      description: 'Real-time chat application using Socket.io and Express.',
      image: '/img/project2.jpg', // Adjust path as needed
      demoLink: 'https://github.com/Secretive-Plotterrr?tab=projects', // Replace with actual GitHub link
    },

    {
      title: 'Project 3',
      description: 'A modern e-commerce platform built with React and Node.js.',
      image: '/img/project3.jpg', // Adjust path as needed
      demoLink: 'https://github.com/Secretive-Plotterrr?tab=projects', // Replace with actual GitHub link
    },
    {
      title: 'Project 4',
      description: 'Real-time chat application using Socket.io and Express.',
      image: '/img/project4.jpg', // Adjust path as needed
      demoLink: 'https://github.com/Secretive-Plotterrr?tab=projects', // Replace with actual GitHub link
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-300 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center animate-on-scroll" data-animation="fade-up">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md bg-white flex flex-col items-center text-center animate-on-scroll"
              data-animation="fade-up"
              data-delay={`${index * 0.2}s`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 mb-4"
              />
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-700 text-white hover:bg-gray-800 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
