'use client';

import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {howItWorksSteps, testimonials } from '../../utils/home.js';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { technologies,services } from '../../utils/home.js';
import Image from 'next/image.js';



const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  const [testimonialIndex, setTestimonialIndex] = useState(0);  // Move this line here

const handleTestimonialPrev = () => {
  setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
};

const handleTestimonialNext = () => {
  setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
};

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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

  

  return (
    <div className="bg-slate-100 min-h-screen">
      <section className="bg-gradient-to-br from-blue-500 to-teal-400 text-white py-32 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold mb-6">
            Discover Our Services
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg mb-8 max-w-2xl mx-auto">
            Unlock the potential of your business with our innovative and tailor-made solutions designed to meet your unique needs.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
              onClick={() => scrollToSection('services')}
            >
              View All Services
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up">
            At LaaLabs, we prioritize seamless workflows and greater outputs to transform your ideas into reality.
          </p>

          <h2 className="text-3xl font-extrabold mb-8 text-blue-700" data-aos="fade-up">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 mb-14 max-w-xl mx-auto leading-relaxed" data-aos="fade-up">
            Our step-by-step process is designed to deliver exceptional results while keeping things simple and efficient for you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className="relative text-center transition-transform transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-5 rounded-full shadow-lg mb-6 flex items-center justify-center transition-all group-hover:scale-110">
                    {React.cloneElement(step.icon, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 transition-colors group-hover:text-yellow-500">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 data-aos="zoom-in" className="text-3xl font-extrabold mb-10">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                className="flex flex-col items-center justify-center transition-all"
              >
                <div className="bg-white text-gray-800 p-2 rounded-full mb-4 shadow-md flex items-center justify-center w-12 h-12 hover:bg-gray-200 transition-all">
                  {tech.icon}
                </div>
                <p className="font-bold">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="animate-fade-in"
          >
            <h2 className="text-4xl font-bold mb-8 text-blue-600">
            Services We Provide
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="animate-fade-in-delay"
          >
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Shaping tomorrow with groundbreaking technologies and transformative ideas.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {services.map((services, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-56" data-aos="fade-up">
                  <Image
                    src={services.image}
                    alt={services.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    width={400}
                    height={250}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity hover:bg-opacity-30"></div>
                </div>
                <div className="p-6 text-center" data-aos="fade-up">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {services.description}
                  </h3>
                  <p className="text-gray-600">{services.title}</p>
                  <p className="text-gray-600">{services.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            data-aos="fade-up"
          >
            What Our Clients Say
          </motion.h2>
          <div className="relative">
            <div className="flex justify-center">
              <motion.div
                key={testimonialIndex}
                className="max-w-xl mx-auto text-lg mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-4">{testimonials[testimonialIndex].text}</p>
                <h4 className="font-bold">{testimonials[testimonialIndex].name}</h4>
                <p>{testimonials[testimonialIndex].title}</p>
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
              <button
           className="bg-white text-black py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition hover:opacity-90"
           onClick={handleTestimonialPrev}
              >
                &#60;
              </button>
            </div>
            <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
              <button
           className="bg-white text-black py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition hover:opacity-90"
           onClick={handleTestimonialNext}
              >
                &#62;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-6 text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold mb-8 text-blue-500">
            Excited to Work with Us?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Let’s collaborate to build innovative solutions tailored to your needs.
          </p>
          <button
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
            data-aos="zoom-in"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
