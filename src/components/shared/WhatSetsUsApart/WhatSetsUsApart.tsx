const WhatSetsUsApart = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          What Sets Us <span className="text-blue-600">Apart</span> in
          <br />
          Vintar Academy
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We're an online learning platform dedicated to helping people upskill
          and grow. With expert instructors and flexible courses, we're here to
          support your journey.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Expert Mentor Guidance Section */}
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expert Mentor
                <br />
                Guidance
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    1-on-1 Q&A sessions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Feedback on projects
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Mentor-led workshops
                  </span>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <img
                  src="/assets/instructor.webp"
                  alt="Expert Mentor"
                  className="w-full max-w-sm h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left mb-6">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Get expert feedback and support directly from experienced
                  industry mentors.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900">
                    29<span className="text-blue-600">+</span>
                  </div>
                  <div className="text-gray-600 text-sm md:text-base mt-1">
                    Active Mentors
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900">
                    4.9
                  </div>
                  <div className="text-gray-600 text-sm md:text-base mt-1">
                    Average Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career-Focused Curriculum Section */}
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Career-Focused
                <br />
                Curriculum
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Job-ready learning paths
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Portfolio templates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 text-lg">
                    Resume prep tools
                  </span>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <img
                  src="/assets/public.avif"
                  alt="Career-Focused Learning"
                  className="w-full max-w-sm h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left mb-6">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Courses tailored for job success with real tools, portfolios,
                  and career prep.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900">
                    78<span className="text-blue-600">%</span>
                  </div>
                  <div className="text-gray-600 text-sm md:text-base mt-1">
                    Career Growth
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-gray-900">
                    120<span className="text-blue-600">+</span>
                  </div>
                  <div className="text-gray-600 text-sm md:text-base mt-1">
                    Mentor Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
