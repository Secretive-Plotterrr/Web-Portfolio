// components/Contact.jsx
import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa'; // Import icons
import emailjs from '@emailjs/browser'; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // To show success/error messages
  const [isSending, setIsSending] = useState(false); // To track sending state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }

    // EmailJS configuration
    const serviceID = 'service_fmozf9m'; // Your EmailJS Service ID
    const templateID = 'template_372gvr9'; // Your EmailJS Template ID
    const userID = 'xrnBHs7vfirju4-Gl'; // Your EmailJS Public Key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email, // Sender's email
      to_email: 'ricovillamin75@gmail.com', // Your email
      message: formData.message,
    };

    setIsSending(true); // Show "Sending..." on button
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSending(false); // Revert button to "Send Message"
        setTimeout(() => setStatus(''), 2000); // Clear status after 2 seconds
      });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 animate-on-scroll" data-animation="fade-up">
          Get in Touch
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-gray-500 animate-on-scroll"
            data-animation="fade-up"
            data-delay="0.2s"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-gray-500 animate-on-scroll"
            data-animation="fade-up"
            data-delay="0.4s"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-gray-500 animate-on-scroll"
            data-animation="fade-up"
            data-delay="0.6s"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-700 text-white hover:bg-gray-800 px-6 py-3 rounded-full text-lg transition-all duration-300 animate-on-scroll"
            data-animation="fade-up"
            data-delay="0.8s"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 ${status.includes('success') ? 'text-green-600' : 'text-red-600'} transition-opacity duration-500`}
          >
            {status}
          </p>
        )}

        {/* Additional Contact Information */}
        <div className="mt-10 space-y-4 animate-on-scroll" data-animation="fade-up" data-delay="1s">
          <p className="text-gray-600">
            Prefer another way to reach me? Here are some options:
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-600" />
              <span className="text-gray-600">+63 963 005 2901</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;