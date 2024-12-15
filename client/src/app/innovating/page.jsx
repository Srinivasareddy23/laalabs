import Image from "next/image";

const InnovationDetails = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fadeInDown">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Innovate for a Better Tomorrow
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At the heart of innovation lies the power to transform ideas into impactful solutions. We are committed to shaping a future driven by creativity and cutting-edge technology.
          </p>
        </div>

        <div className="flex flex-wrap mt-12 items-center">
          <div className="w-full md:w-1/2 px-4 animate-fadeInLeft">
            <Image
              src="/images/innovation.jpg"
              alt="Innovation Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0 animate-fadeInRight">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Unlocking Potential through Technology
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Innovation isn’t just about creating new things; it’s about unlocking the true potential of people, businesses, and communities. Our approach integrates design thinking, agile development, and emerging technologies to ensure your vision becomes reality.
            </p>
            <ul className="space-y-3">
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Collaborative Process:</strong> Partner with our experts to ideate and refine groundbreaking solutions.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Scalable Solutions:</strong> Build platforms and tools that grow with your business.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Future-Focused Innovation:</strong> Stay ahead with AI, IoT, Blockchain, and more.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Sustainability:</strong> Drive green innovation with environmentally conscious solutions.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>End-to-End Support:</strong> From ideation to execution, we guide you every step of the way.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Global Expertise:</strong> Leverage insights from diverse industries and markets worldwide.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mt-16 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">
            Why Choose Us for Innovation?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We leverage decades of experience and a passion for excellence to deliver solutions that exceed expectations. Here’s what sets us apart:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Expertise",
                description: "Industry leaders with proven experience in innovation.",
                iconPath: "M9.75 15.75l3-3m0 0l3 3m-3-3V21m8.25-2.25A9 9 0 116 6.75a9 9 0 0112.75 11.75z",
              },
              {
                title: "Tailored Solutions",
                description: "Customized strategies for every industry and challenge.",
                iconPath: "M15.75 9.75L12 6m0 0L8.25 9.75M12 6v12.75M9.75 15.75l3-3m0 0l3 3m-3-3V21",
              },
              {
                title: "Impact",
                description: "Tangible results that drive growth and inspire change.",
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
            Driving Innovation Across Industries
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our innovative strategies are designed to tackle the unique challenges of various industries. We work closely with our clients to deliver:
          </p>
          <div className="flex items-center justify-center text-left mt-4">
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>
                <strong>Healthcare:</strong> Revolutionizing patient care through advanced tech and data solutions.
              </li>
              <li>
                <strong>Education:</strong> Enhancing learning experiences with immersive and interactive platforms.
              </li>
              <li>
                <strong>Retail:</strong> Transforming customer journeys with AI-driven personalization.
              </li>
              <li>
                <strong>Manufacturing:</strong> Streamlining processes with IoT and automation.
              </li>
              <li>
                <strong>Finance:</strong> Securing and optimizing transactions with blockchain technology.
              </li>
            </ul>
          </div>
        
        </div>

        <div className="text-center">
          <p className="text-2xl italic font-serif font-light text-black leading-relaxed">
            "At <span className="font-semibold text-blue-600">LaaLabs</span>, we pioneer innovation, turning bold ideas into reality."
          </p>
        </div>

      </div>
    </section>
  );
};

export default InnovationDetails;
