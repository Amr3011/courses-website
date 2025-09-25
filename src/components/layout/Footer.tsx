import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Social Icons */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img
                src="/assets/logo.png"
                alt="Vintar Logo"
                className="h-20 w-auto mb-12"
              />
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaTwitter className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <FaInstagram className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Template Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Template
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Style Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Licenses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <p className="text-gray-600">+123 456 789</p>
              <p className="text-gray-600">mail@vintar.com</p>
              <p className="text-gray-600">
                42 Summit Lane,
                <br />
                Rivertown, OR 9743
              </p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <div>
              <h5 className="text-lg font-semibold text-gray-900 mb-4">
                Subscribe to Our Newsletter
              </h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-r-lg hover:bg-blue-700 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Eskep Design. Powered by{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Webflow
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
