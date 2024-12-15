'use client';

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessNeeds: '',
    agree: false,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const [popup, setPopup] = useState({
    show: false,
    message: '',
    success: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setPopup({
          show: true,
          message: 'Email sent successfully!',
          success: true,
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          businessNeeds: '',
          agree: false,
        });
      } else {
        setPopup({
          show: true,
          message: 'Failed to send email. Please try again.',
          success: false,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setPopup({
        show: true,
        message: 'An error occurred. Please try again later.',
        success: false,
      });
    }
  };

  const closePopup = () => {
    setPopup((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className="bg-gray-50 min-h-screen relative">
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Popup Container */}
          <div
            className={`relative bg-gradient-to-br ${
              popup.success ? 'from-green-100 to-green-200' : 'from-red-100 to-red-200'
            } p-6 rounded-lg shadow-lg w-96`}
          >
            {/* Title */}
            <h2
              className={`text-lg font-semibold text-center mb-2 ${
                popup.success ? 'text-green-800' : 'text-red-800'
              }`}
            >
              {popup.success ? 'Success!' : 'Error!'}
            </h2>

            {/* Message */}
            <p className="text-gray-700 text-center">{popup.message}</p>

            {/* Small Note */}
            <p className="text-gray-500 text-sm text-center mt-2">
              Please take the necessary action.
            </p>

            {/* Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={closePopup}
                className={`px-6 py-2 font-medium text-white rounded-md shadow ${
                  popup.success ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                } transition duration-200`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="bg-gradient-to-br from-blue-600 to-teal-500 text-white py-32 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl font-bold mb-6">
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            We are here to assist you with any questions or concerns. Feel free
            to reach out to us for more information or support.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="#contact-form">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="px-20 mt-12"
      >
        <p className="text-center text-lg align-left">
          Thank you for your interest in LaaLabs services. Please provide the
          following information about your business needs to help us serve you
          better. This information will enable us to route your request to the
          appropriate person. You should receive a response within 48 hours.
        </p>
      </motion.div>

      <motion.div
        id="contact-form"
        className="container mx-auto px-6 mt-12 flex justify-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <div className="relative p-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl overflow-hidden w-full max-w-3xl">
          <motion.div variants={staggerContainer} className="space-y-8 text-white">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-300 rounded-md p-3 text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="businessNeeds" className="block text-sm font-medium mb-2">
                  Business Needs
                </label>
                <textarea
                  id="businessNeeds"
                  name="businessNeeds"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-700 shadow-sm focus:outline-none"
                  placeholder="Describe your business needs"
                  value={formData.businessNeeds}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  className="h-5 w-5 border-gray-300 rounded"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agree" className="text-sm font-medium text-gray-700">
                  I Confirm, I have read and agree to{" "}
                  <a href="/privacy-statement" className="underline text-white">
                    LaaLabs privacy policy
                  </a>
                </label>
              </motion.div>

              <motion.button
                variants={fadeInUp}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-md font-semibold text-lg hover:opacity-90 hover:from-blue-700 hover:to-teal-600 transition-all"
              >
                Submit
              </motion.button>
          </form>

          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto mt-12 px-20 mb-10"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <h2
          className="text-2xl font-bold text-gray-800 mb-4 text-center"
          variants={fadeInUp}
        >
          Corporate Office Address
        </h2>
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-lg px-6"
        >
          <div className="p-8">
            <p className="text-2xl mb-6">LaaLabs Private Limited</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-2xl mr-3 text-blue-400" />
                Street2, Kunkalagunta, Narasaraopeta, India
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-2xl mr-3 text-blue-400" />
                +91 9988776655
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-2xl mr-3 text-blue-400" />
                info@laalabs.com
              </li>
            </ul>
          </div>

          <div className="w-full h-96">
            <iframe
              title="Google Maps"
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.5098476909834!2d79.88425447490921!3d16.29687298441608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35630012d12441%3A0x421fece32bed9bc4!2skunkalagunta!5e0!3m2!1sen!2sin!4v1733844936557!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
