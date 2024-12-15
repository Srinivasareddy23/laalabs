import Image from "next/image";

const CreativeSolutionsDetails = () => {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fadeInDown">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
            Crafting Bold Ideas into Reality
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming ambitious ideas into impactful, world-class experiences through innovative and creative solutions.
          </p>
        </div>

        <div className="flex flex-wrap mt-12 items-center">
          <div className="w-full md:w-1/2 px-4 animate-fadeInLeft">
            <Image
              src="/images/ideas.jpg"
              alt="Creative Solutions Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0 animate-fadeInRight">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Bringing Visionary Ideas to Life
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our approach combines strategic thinking, design innovation, and advanced technology to shape your ideas into extraordinary realities.
            </p>
            <ul className="space-y-3">
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Creative Strategy:</strong> Designing roadmaps that turn visions into actionable plans.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Innovative Design:</strong> Crafting user-centric experiences that captivate and inspire.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Technology Integration:</strong> Leveraging cutting-edge tools to enhance functionality and performance.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Collaborative Innovation:</strong> Partnering with clients to ensure their unique vision shines through.
              </li>
              <li className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 font-bold">&#10003;</span>
                <strong>Impactful Execution:</strong> Delivering solutions that create lasting impressions.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mt-16 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">
            Why Partner with Us for Creative Solutions?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our expertise in blending creativity with practicality ensures every idea becomes a masterpiece. Here's why clients trust us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Innovative Thinking",
                description: "Pioneering approaches to solve unique challenges.",
                iconPath: "M9.75 15.75l3-3m0 0l3 3m-3-3V21m8.25-2.25A9 9 0 116 6.75a9 9 0 0112.75 11.75z",
              },
              {
                title: "Tailored Solutions",
                description: "Customized strategies for every unique vision.",
                iconPath: "M15.75 9.75L12 6m0 0L8.25 9.75M12 6v12.75M9.75 15.75l3-3m0 0l3 3m-3-3V21",
              },
              {
                title: "Exceptional Results",
                description: "Delivering outcomes that exceed expectations.",
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
            Delivering Creative Impact Across Industries
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We transform ideas into actionable solutions across various sectors. Our expertise includes:
          </p>
          <div className="flex items-center justify-center text-left mt-4">
            <ul className="list-disc pl-5 text-gray-700 space-y-3">
              <li>
                <strong>Entertainment:</strong> Revolutionizing content creation and audience engagement.
              </li>
              <li>
                <strong>Marketing:</strong> Building campaigns that resonate and inspire action.
              </li>
              <li>
                <strong>Technology:</strong> Bridging creativity with functionality for seamless solutions.
              </li>
              <li>
                <strong>Education:</strong> Enhancing learning experiences with innovative tools.
              </li>
              <li>
                <strong>Startups:</strong> Turning big ideas into scalable, impactful realities.
              </li>
            </ul>
          </div>
          
        </div>

        <div className="text-center">
          <p className="text-2xl italic font-serif font-light text-gray-800 leading-relaxed">
            "At <span className="font-semibold text-blue-500">LaaLabs</span>, we turn bold ideas into impactful, world-class realities."
          </p>
        </div>

      </div>
    </section>
  );
};

export default CreativeSolutionsDetails;
