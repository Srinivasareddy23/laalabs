import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-teal-400 mb-6 tracking-wide">
              Laalabs
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
            At Laalabs, we believe in harnessing the power of technology to shape a smarter, more efficient future. Our team of dedicated experts collaborates to deliver groundbreaking solutions tailored to meet diverse business needs. Innovation is at the heart of everything we do, driving us to transform challenges into opportunities and ideas into impactful realities
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@laalabs.com"
                className="text-teal-400 hover:underline"
              >
                support@laalabs.com
              </a>
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Registered Address:</strong> Street2, Kunkalagunta, Narasaraopeta, India
            </p>
            <p className="text-gray-300">
              <strong>CIN:</strong> L12345CA2024PLC678910
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-300 mb-6">
                  Why Laalabs
                </h3>
                <ul className="space-y-4">
                  <li className="text-gray-400 hover:text-teal-400 transition">
                    Innovation-Driven Solutions
                  </li>
                  <li className="text-gray-400 hover:text-teal-400 transition">
                    Customer-Centric Approach
                  </li>
                  <li className="text-gray-400 hover:text-teal-400 transition">
                    Quality and Speed
                  </li>
                  <li className="text-gray-400 hover:text-teal-400 transition">
                    Dedicated Support
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-300 mb-6">
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-teal-400 transition"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-400 hover:text-teal-400 transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-gray-400 hover:text-teal-400 transition"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-statement"
                      className="text-gray-400 hover:text-teal-400 transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/disclaimer"
                      className="text-gray-400 hover:text-teal-400 transition"
                    >
                      Disclaimer
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-110"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-110"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-teal-400">Laalabs</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
