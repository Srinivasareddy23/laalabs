'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from '../../../public/Images/resume.jpg';
import { employeeTestimonials, roles, Whyjoin } from '../../utils/home.js';

const Careers = () => {
  const fileInputRef = useRef(null); 
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    resume: null,
    message: ''
  });
  const [popup, setPopup] = useState({
    show: false,
    success: false,
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % employeeTestimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + employeeTestimonials.length) % employeeTestimonials.length);
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('fullname', formData.fullname);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('resume', formData.resume);
    formDataToSubmit.append('message', formData.message);
  
    try {
      const response = await fetch('http://localhost:5000/api/submit-resume', {
        method: 'POST',
        body: formDataToSubmit,
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setFormData({
          fullname: '',
          email: '',
          resume: null,
          message: '',
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
  
        setPopup({
          show: true,
          success: true,
          message: 'Thanks for applying! If shortlisted, we’ll get back to you shortly.',
        });
      } else {
        setPopup({
          show: true,
          success: false,
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setPopup({
        show: true,
        success: false,
        message: 'An error occurred. Please try again later.',
      });
    }
  };
  

  return (
    <div className="bg-teal-50">
      <section className="bg-gradient-to-br from-blue-600 to-teal-500 text-white py-32 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl font-bold mb-6">
            Careers at Our Company
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg mb-8 max-w-2xl mx-auto">
            Join a team that fosters innovation, growth, and collaboration. Be part of something impactful.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="#open-positions">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
              >
                Explore Opportunities
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

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
          onClick={() => setPopup({ show: false, success: false, message: '' })}
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


      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-600">Why Join Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Whyjoin.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition"
                data-aos="zoom-in"
              >
                <h3 className="text-2xl font-bold text-black mb-4 flex justify-center items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white" data-aos="fade-right">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">What Our Team Says</h2>
          <div className="relative w-full max-w-4xl mx-auto py-6 p-6 rounded-lg shadow-xl bg-white">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {employeeTestimonials.map((employee, index) => (
                  <div key={index} className="flex-shrink-0 w-full p-8" data-aos="fade-left">
                    <div className="bg-gradient-to-br from-teal-50 to-green-50 shadow-md rounded-lg p-6">
                      <div className="flex justify-center mb-4">
                        <Image
                          src={employee.image}
                          alt={employee.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-center text-teal-700">
                        {employee.name}
                      </h3>
                      <p className="text-center text-sm font-semibold text-gray-500">
                        <span className="text-teal-600">{employee.role}</span>
                      </p>
                      <p className="mt-4 text-gray-600 text-center italic max-w-xs mx-auto">
                        {employee.quote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-2 mt-4">
              {employeeTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    current === index ? 'bg-teal-600' : 'bg-gray-300'
                  } transition-all duration-300`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>

            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
              onClick={prevSlide}
            >
              &lt;
            </button>

            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
              onClick={nextSlide}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Exciting Open Positions</h2>
          <p className="text-lg text-gray-800 mb-12">
            Explore opportunities to join our growing team.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition"
                data-aos="zoom-in"
              >
                <h3 className="text-xl font-bold text-black mb-4">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.description}</p>
                <Link href={role.path}>
                  <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-6 rounded-full hover:opacity-90 transition">
                    Apply Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-12 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-4/12 mb-6 lg:mb-0" data-aos="fade-right">
            <Image
              src={Resume}
              alt="Resume Submission"
              className="rounded-lg shadow-md w-full object-cover"
              priority
            />
          </div>

          <div className="lg:w-7/12" data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-black mb-4">Didn't Find the Right Role?</h2>
            <p className="text-sm text-gray-600 mb-6">
              Submit your resume and we’ll contact you for suitable opportunities.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullname" className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none"
                    placeholder="Your Name"
                    required
                    pattern="^[a-zA-Z\s]+$" 
                    title="Full Name should contain only letters and spaces."
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="resume" className="text-sm font-medium text-gray-700">
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx" 
                  ref={fileInputRef}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none"
                  placeholder="Anything to convey us"
                  required
                  minLength="10" 
                  maxLength="500" 
                  title="Message should be between 10 and 500 characters."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 rounded-md hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Careers;
