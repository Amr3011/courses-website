const HeroSection = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Main Heading */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Learning Today
              <br />
              Unlimited <span className="text-blue-600">Growth</span>
              <br />
              with Vintar
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Learn from industry experts through engaging, self-paced video
              courses.
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Master new skills and unlock your potential anytime, anywhere.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 text-lg">
              Explore Courses
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg">
              Contact Us
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-16 pt-8">
            <div className="border-r border-gray-200 pr-8">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                45+
              </div>
              <div className="text-gray-600 text-sm md:text-base">Courses</div>
            </div>
            <div className="border-r border-gray-200 pr-8">
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                29+
              </div>
              <div className="text-gray-600 text-sm md:text-base">Mentors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900">
                50K+
              </div>
              <div className="text-gray-600 text-sm md:text-base">Learners</div>
            </div>
          </div>
        </div>

        {/* Right Content - Images */}
        <div className="relative h-[680px]">
          {/* Main Large Image - Left Side */}
          <div className="absolute left-0 top-0 w-[55%] h-[85%]">
            <img
              src="/assets/Home/girl.avif"
              alt="Main Learning"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Top Right Small Image */}
          <div className="absolute top-0 right-0 w-[40%] h-[35%]">
            <img
              src="/assets/instructor.webp"
              alt="Learning Activity"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-0 right-0 w-[40%] h-[60%]">
            <img
              src="/assets/Home/girl2.webp"
              alt="Student Learning"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Rating Card - Outside and below the main image */}
          <div className="absolute bottom-[0px] left-28 bg-white rounded-2xl p-4 shadow-lg flex items-center gap-3">
            <div className="flex -space-x-1">
              <img
                src="/assets/instructor.webp"
                alt="Student"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/assets/instructor.webp"
                alt="Student"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/assets/instructor.webp"
                alt="Student"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/assets/instructor.webp"
                alt="Student"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">4.9</span>
              <span className="text-sm text-gray-600 ml-1">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
