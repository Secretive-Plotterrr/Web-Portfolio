// components/About.jsx
import React, { useEffect, useState } from 'react';

function About() {
  // Define skills with icons and progress percentages
  const skills = [
    { name: 'Java', icon: 'fas fa-coffee', progress: 70 },
    { name: 'React', icon: 'fab fa-react', progress: 85 },
    { name: 'SQL', icon: 'fas fa-database', progress: 60 },
    { name: 'JavaScript', icon: 'fab fa-js', progress: 75 },
    { name: 'UI/UX', icon: 'fas fa-paint-brush', progress: 65 },
  ];

  // State to trigger animation
  const [animate, setAnimate] = useState(false);

  // Reset and trigger animation on mount (page refresh)
  useEffect(() => {
    setAnimate(false); // Reset to 0%
    setTimeout(() => setAnimate(true), 100); // Small delay to ensure reset before animation
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-gray-200 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center animate-on-scroll" data-animation="fade-up">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1: Description */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll" data-animation="fade-left" data-delay="0.2s">
            <p className="text-gray-600">
              Hi! I'm Rico Villamin, an enthusiastic web developer currently honing my craft at Mabini Colleges Daet. With 4 months of hands-on experience, I thrive on creating dynamic, user-friendly web applications. My specialties include HTML, CSS, Java, JavaScript, and React, where I blend creativity and code to bring ideas to life.
            </p>
          </div>

          {/* Box 2: Skills with Icons and Progress Bars */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll" data-animation="fade-right" data-delay="0.4s">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <p className="text-gray-700 mb-1">
                    <i className={`${skill.icon} mr-2`}></i> {skill.name}
                  </p>
                  <div className="progress-bar bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div
                      className={`progress-fill bg-black h-full text-white text-xs flex items-center justify-center ${
                        animate ? `animate-progress-${skill.progress}` : ''
                      }`}
                      style={{ width: animate ? `${skill.progress}%` : '0%' }}
                    >
                      {skill.progress}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;