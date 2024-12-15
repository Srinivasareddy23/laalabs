import Image from "next/image";

const FutureDetails = () => {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fadeInDown">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Shaping the Future with AI and Beyond
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leveraging artificial intelligence, quantum computing, and cutting-edge technologies to redefine possibilities and drive transformative change.
          </p>
        </div>

        <div className="flex flex-wrap mt-12 items-center">
          <div className="w-full md:w-1/2 px-4 animate-fadeInLeft">
            <Image
              src="/images/future.jpg"
              alt="Future Technologies Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0 animate-fadeInRight">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Advancing Possibilities with Technology
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The future is built on innovation. Our focus on AI, quantum computing, and next-generation solutions empowers businesses to thrive in a rapidly evolving landscape.
            </p>
            <ul className="space-y-3">
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>AI-Driven Insights:</strong> Harness the power of AI to unlock actionable insights and opportunities.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Quantum Computing:</strong> Solve complex problems with unparalleled speed and precision.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>IoT Integration:</strong> Create connected ecosystems for smarter operations.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Blockchain Solutions:</strong> Enhance transparency and security across industries.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Scalable Infrastructure:</strong> Build resilient systems that grow with your business.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mt-16 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">
            Why Choose Us for Future Technologies?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our expertise in emerging technologies ensures your business stays ahead of the curve. Here's why we stand out:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Expertise in AI",
                description: "Unlock the potential of AI with our tailored solutions.",
                iconPath: "M9.75 15.75l3-3m0 0l3 3m-3-3V21m8.25-2.25A9 9 0 116 6.75a9 9 0 0112.75 11.75z",
              },
              {
                title: "Future-Ready Solutions",
                description: "Implement scalable and forward-thinking strategies.",
                iconPath: "M15.75 9.75L12 6m0 0L8.25 9.75M12 6v12.75M9.75 15.75l3-3m0 0l3 3m-3-3V21",
              },
              {
                title: "Transformative Impact",
                description: "Deliver tangible results that reshape industries.",
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
            Harnessing Future Technologies Across Sectors
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We drive industry-specific innovations with cutting-edge technologies. Some of our key focus areas include:
          </p>
          <div className="flex items-center justify-center text-left mt-4">
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>
                <strong>Healthcare:</strong> Enhancing patient outcomes with AI and predictive analytics.
              </li>
              <li>
                <strong>Finance:</strong> Transforming transactions with blockchain and secure data platforms.
              </li>
              <li>
                <strong>Retail:</strong> Revolutionizing customer experiences with AI-powered insights.
              </li>
              <li>
                <strong>Manufacturing:</strong> Driving efficiency through IoT and automation.
              </li>
              <li>
                <strong>Education:</strong> Creating personalized learning with advanced ed-tech solutions.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl italic font-serif font-light text-gray-800 leading-relaxed">
            "At <span className="font-semibold text-blue-500">LaaLabs</span>, we embrace AI and emerging technologies to shape the future of innovation."
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureDetails;
