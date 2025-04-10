import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A Tic-Tac_Toe game using React and Tailwind CSS.',
      image: `${process.env.PUBLIC_URL}/img/project1.png`, // Corrected backticks for template literal
      demoLink: 'https://tic-tac-toe-one-sandy.vercel.app', // Replace with actual GitHub link
    },
    {
      title: 'Project 2',
      description: 'Responsive Web Portfolio built with HTML, CSS, JavaScript , and Python(FLASK).',
      image: `${process.env.PUBLIC_URL}/img/project2.png`, // Corrected backticks for template literal
      demoLink: 'https://secretive-plotterrr.github.io/Python-Web-Portfolio/', // Replace with actual GitHub link
    },
    {
      title: 'Project 3',
      description: 'Chat bot built with React.',
      image: `${process.env.PUBLIC_URL}/img/project3.png`, // Corrected backticks for template literal
      demoLink: 'https://my-chatbot-dusky.vercel.app', // Replace with actual GitHub link
    },
    {
      title: 'Project 4',
      description: 'Chess Game built with React.',
      image: `${process.env.PUBLIC_URL}/img/project4.png`, // Corrected backticks for template literal
      demoLink: 'https://secretive-plotterrr.github.io/Chess/', // Replace with actual GitHub link
    },
    {
      title: 'Project 5',
      description: 'Typing Speed Test built with React.',
      image: `${process.env.PUBLIC_URL}/img/project5.png`, // Corrected backticks for template literal
      demoLink: 'https://secretive-plotterrr.github.io/Typing-Test-App/', // Replace with actual GitHub link
    },
    {
      title: 'Project 6',
      description: 'Typing Speed Test built with React.',
      image: `${process.env.PUBLIC_URL}/img/project6.png`, // Corrected backticks for template literal
      demoLink: 'https://secretive-plotterrr.github.io/To-do-List/', // Replace with actual GitHub link
    },
    {
      title: 'Project 7',
      description: 'Web Snake Game built with React.',
      image: `${process.env.PUBLIC_URL}/img/project7.png`, // Corrected backticks for template literal
      demoLink: 'https://secretive-plotterrr.github.io/Snake-Game/', // Replace with actual GitHub link
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
