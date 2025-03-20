// components/About.jsx
import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-200 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center animate-on-scroll" data-animation="fade-up">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1: Combined Description */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll" data-animation="fade-left" data-delay="0.2s">
          <p className="text-gray-600">
              Hi! I'm Rico Villamin, an enthusiastic web developer currently honing my craft at Mabini Colleges Daet. With 4 months of hands-on experience, I thrive on creating dynamic, user-friendly web applications. My specialties include HTML, CSS, Java, JavaScript, and React, where I blend creativity and code to bring ideas to life.
            </p>
          </div>

          {/* Box 2: Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll" data-animation="fade-right" data-delay="0.4s">
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'React', 'SQL', 'JavaScript', 'UI/UX'].map((skill, index) => (
                <span
                  key={skill}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;