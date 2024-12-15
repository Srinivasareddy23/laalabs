'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Values, Founders, Cultures } from '../../utils/home.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Story from '../../../public/Images/story.jpg';

const AboutUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1500, once: true });
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

  return (
    <div className="bg-gray-50 font-sans overflow-x-hidden overflow-y-hidden">
      <section
        className="bg-gradient-to-br from-blue-700 to-teal-600 text-white py-36 text-center relative"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-6"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-6xl font-extrabold mb-6 tracking-tight"
          >
            About Us
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            At LaaLabs, we innovate, collaborate, and strive to create impactful solutions that shape the future.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="#our-story">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>


      <section id="our-story" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div
            className="text-lg text-gray-700 space-y-6"
            data-aos="flip-left"
          >
            <h2 className="text-5xl font-extrabold text-blue-600">Our Story</h2>
            <p>
              LaaLabs was founded with the vision of bridging the gap between technology and innovation. Over the years, we’ve empowered businesses and individuals with state-of-the-art solutions tailored to their needs. Our journey is a testament to resilience, creativity, and collaboration.
            </p>
            <p>
              With a strong emphasis on quality and customer satisfaction, LaaLabs is constantly pushing the boundaries to create technology that truly matters.
            </p>
          </div>
          <div data-aos="flip-right">
            <Image
              src={Story}
              alt="Our Team"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-extrabold text-blue-600 text-center mb-16"
            data-aos="zoom-in-up"
          >
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {Values.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-lg w-full mb-6 object-cover"
                  loading="lazy"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-extrabold text-center text-blue-600 mb-16"
            data-aos="zoom-in"
          >
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {Founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-60"
                  loading="lazy"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-semibold text-teal-600">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {founder.role}
                  </p>
                  <p className="text-gray-700 mt-2">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2
            className="text-5xl font-extrabold text-center text-blue-600 mb-16"
            data-aos="zoom-in"
          >
            Our Culture & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Cultures.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-teal-600 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutUs;
