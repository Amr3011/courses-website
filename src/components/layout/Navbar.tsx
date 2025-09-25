import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Vintar Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Courses
            </Link>

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPagesOpen(!isPagesOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Pages
                <FaChevronDown
                  className={`ml-1 w-3 h-3 transition-transform ${
                    isPagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isPagesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <Link
                    to="/purchased-courses"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Purchased Course
                  </Link>
                  <Link
                    to="/lesson"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Lesson
                  </Link>
                  <Link
                    to="/AllMentors"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Mentors
                  </Link>
                  <Link
                    to="/faq"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Side - Cart and Login */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <div className="relative">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <FaShoppingCart className="w-5 h-5" />
                <span className="ml-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </button>
            </div>

            {/* Login Button */}
            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
