'use client';

import { carouselData, workData, futureProjects } from '../utils/home.js';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  return (
  <div className="bg-gray-50 min-h-screen">
    <section className="relative overflow-hidden bg-blue-400 mt-6">
  <div className="flex flex-col lg:flex-row items-center justify-between w-full h-auto lg:h-[600px]">
    <div className="text-white flex-1 flex flex-col justify-center items-center px-6 py-4">
      <div className="w-full max-w-md text-center lg:text-left">
        <motion.h2
          className="text-lg sm:text-xl font-semibold mb-2 lg:text-4xl lg:font-extrabold lg:mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {carouselData[currentIndex].heading || "Empower Your Vision"}
        </motion.h2>
        <motion.p
          className="text-xs sm:text-sm mb-4 lg:text-lg lg:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {carouselData[currentIndex].text}
        </motion.p>
        <button
          className="bg-white text-blue-600 font-medium sm:font-semibold lg:font-bold py-1 px-4 sm:py-2 sm:px-6 rounded-full shadow-xl hover:bg-gray-200 transition"
          onClick={() => handleNavigate(carouselData[currentIndex].path)}
        >
          Discover More
        </button>
      </div>
    </div>

    <div className="py-4 px-6 sm:px-12 lg:px-16 flex-1 h-[200px] sm:h-[300px] lg:h-full">
      <div className="relative w-full h-full">
        <Image
          src={carouselData[currentIndex].image}
          alt={`Carousel image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="object-center rounded-lg"
        />
      </div>
    </div>
  </div>

  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black py-1 sm:py-2 px-2 sm:px-4 rounded-full shadow-lg hover:bg-gray-200 transition"
    onClick={handlePrev}
  >
    &#60;
  </button>
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black py-1 sm:py-2 px-2 sm:px-4 rounded-full shadow-lg hover:bg-gray-200 transition"
    onClick={handleNext}
  >
    &#62;
  </button>
</section>


    <section id="our-work" className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600" data-aos="fade-up">
          Discover Our Work
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          Transforming ideas into reality through innovative solutions tailored to meet unique business needs.
        </p>
        <div className="grid grid-cols-1 gap-8">
          {workData.map((work, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-8 transform transition-all duration-500 ${index % 2 === 0 ? 'flip-left' : 'flip-right'}`}
              data-aos="flip-right"
            >
              <div className={`order-${index % 2 === 0 ? '1' : '2'}`}>
                <Image
                  src={work.icon}
                  alt={`${work.title} Icon`}
                  width={350}
                  height={200}
                  className="rounded-lg shadow-lg w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className={`order-${index % 2 === 0 ? '2' : '1'} text-lg text-gray-700 space-y-4`}>
                <h3 className="text-xl font-semibold text-gray-800">{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="animate-fade-in"
        >
          <h2 className="text-4xl font-bold mb-8 text-blue-600">
            Future Projects
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
          {futureProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-56" data-aos="fade-up">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width={400}
                  height={250}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity hover:bg-opacity-30"></div>
              </div>
              <div className="p-6 text-center" data-aos="fade-up">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

      <section className="py-16 px-6 lg:px-16 text-gray-700" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl text-blue-500 font-bold mb-8">
                The Impact We've Made
              </h2>
              <p className="text-lg mb-8">
                See how our work has transformed businesses and communities. We believe
                in delivering measurable results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {[ 
                  {
                    title: "Projects Completed",
                    count: 120,
                    description: "Successful projects delivered across industries.",
                  },
                  {
                    title: "Hours Saved",
                    count: 50000,
                    description: "Hours saved by optimizing client workflows.",
                  },
                  {
                    title: "Clients Served",
                    count: 250,
                    description: "Clients benefiting from our innovative solutions.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-300 text-black rounded-lg shadow-lg transform transition-transform hover:scale-105"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`} // Adds a delay for staggered animation
                  >
                    <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-4xl font-semibold text-blue-500" data-aos="fade-right">
                      {item.count}+
                    </p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                ))}
              </div>
        </div>
      </section>


      <section className="bg-blue-600 py-16 px-6 lg:px-16 text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-8">
            Our Journey
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            A look at the milestones that shaped Laalabs into the company it is today.
          </p>
          <div className="relative">
            <div className="absolute top-0 left-0 w-1 bg-white h-full" data-aos="fade-up"></div>

            <div className="space-y-12">
              {[ 
                {
                  year: "2022",
                  title: "Laalabs is Founded",
                  description: "The journey began with a small but passionate team aiming to innovate in tech.",
                },
                {
                  year: "2023",
                  title: "First Major Product Launch",
                  description: "Our first product was launched to rave reviews, solidifying our place in the market.",
                },
                {
                  year: "2024",
                  title: "Expanded Team & Global Reach",
                  description: "With a growing team, we expanded our services to clients around the world.",
                },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-8"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center" data-aos="flip-right">
                    <span className="font-semibold">{milestone.year}</span>
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-2xl font-semibold">{milestone.title}</h3>
                    <p className="text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 className="text-3xl text-blue-500 font-bold mb-6" data-aos="fade-up">
            Ready to Innovate with Us?
          </motion.h2>
          <p className="text-lg mb-8">
            Let's work together to bring your ideas to life and create something extraordinary.
          </p>
          <button className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition">
            Contact Us
          </button>
        </div>
    </section>
    </div>
  );
};

export default Home;
