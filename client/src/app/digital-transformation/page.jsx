import Image from "next/image";

const DigitalTransformationDetails = () => {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fadeInDown">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Redefining Digital Transformation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering businesses with scalable, secure, and sustainable technology solutions to lead in the digital age.
          </p>
        </div>

        <div className="flex flex-wrap mt-12 items-center">
          <div className="w-full md:w-1/2 px-4 animate-fadeInLeft">
            <Image
              src="/images/technology.jpg"
              alt="Digital Transformation Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0 animate-fadeInRight">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Transforming Business in the Digital Era
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Digital transformation is about more than adopting technology—it’s about reimagining how your business creates value. Our solutions ensure seamless, secure, and scalable transformation for every stage of your journey.
            </p>
            <ul className="space-y-3">
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Scalable Solutions:</strong> Build resilient systems to adapt and grow with market needs.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Cloud Integration:</strong> Leverage cloud technology for agility and efficiency.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Data-Driven Strategies:</strong> Harness the power of analytics for informed decision-making.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Enhanced Cybersecurity:</strong> Protect your digital assets with cutting-edge security solutions.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Customer-Centric Design:</strong> Create user experiences that resonate.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mt-16 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">
            Why Choose Us for Digital Transformation?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We combine technical expertise with a strategic approach to deliver impactful digital transformation solutions. Here’s what sets us apart:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Strategic Vision",
                description: "Crafting tailored strategies to align with your business goals.",
                iconPath: "M9.75 15.75l3-3m0 0l3 3m-3-3V21m8.25-2.25A9 9 0 116 6.75a9 9 0 0112.75 11.75z",
              },
              {
                title: "Technology Expertise",
                description: "Deep knowledge in emerging and established technologies.",
                iconPath: "M15.75 9.75L12 6m0 0L8.25 9.75M12 6v12.75M9.75 15.75l3-3m0 0l3 3m-3-3V21",
              },
              {
                title: "Sustainable Solutions",
                description: "Building systems that are both efficient and eco-conscious.",
                iconPath: "M20.25 12a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0zM9 12h3m0 0h3m-3 0V9m0 3v3",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-transform transform hover:-translate-y-2"
              >
                <div className="bg-blue-100 text-blue-500 p-4 rounded-full inline-block mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath}></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 mt-16 mb-8 text-center animate-fadeInUp">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">
            Enabling Digital Transformation Across Industries
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our tailored solutions empower businesses across diverse industries to achieve remarkable results. Key areas include:
          </p>
          <div className="flex items-center justify-center text-left mt-4">
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>
                <strong>Healthcare:</strong> Streamlining patient care with digital health solutions.
              </li>
              <li>
                <strong>Finance:</strong> Revolutionizing operations with secure and scalable platforms.
              </li>
              <li>
                <strong>Retail:</strong> Enhancing customer engagement with personalized digital experiences.
              </li>
              <li>
                <strong>Manufacturing:</strong> Driving efficiency and innovation with smart factories.
              </li>
              <li>
                <strong>Education:</strong> Transforming learning environments with cutting-edge technologies.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl italic font-serif font-light text-gray-800 leading-relaxed">
            "At <span className="font-semibold text-blue-500">LaaLabs</span>, we drive digital transformation through scalable and secure solutions."
          </p>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationDetails;
