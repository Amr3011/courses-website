import {
  FaBriefcase,
  FaLanguage,
  FaCode,
  FaPaintBrush,
  FaLightbulb,
} from "react-icons/fa";

const DiscoverCategories = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Content - Text Only */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Our Full
              <br />
              <span className="text-blue-600">Categories</span>
            </h2>
          </div>

          <div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Browse categories filled with exciting topics and new skills.
            </p>
          </div>
        </div>

        {/* Right Content - Categories Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Empty space in top right */}
          <div></div>

          {/* First Row - Two large cards */}
          <div className="bg-blue-50 rounded-2xl p-8 h-64 flex flex-col justify-between">
            <FaBriefcase className="text-4xl text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Business & Management
              </h3>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 h-64 flex flex-col justify-between">
            <FaLanguage className="text-4xl text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Language & Communication
              </h3>
            </div>
          </div>

          {/* Second Row - Three large cards */}
          <div className="bg-blue-50 rounded-2xl p-8 h-64 flex flex-col justify-between">
            <FaCode className="text-4xl text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              Technology & Programming
            </h3>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 h-64 flex flex-col justify-between">
            <FaPaintBrush className="text-4xl text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              Design & Creativity
            </h3>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 h-64 flex flex-col justify-between">
            <FaLightbulb className="text-4xl text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Personal Development
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverCategories;
