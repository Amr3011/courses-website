import StatsSection from "@/components/shared/StatsSection/StatsSection";

const AboutStorySection = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      {/* Top Section - Title and Description Side by Side */}
      <div className="mb-12 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center lg:text-left">
              The <span className="text-blue-600">Story</span> Behind
              <br />
              Vintar Academy
            </h2>
          </div>
          <div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed text-center lg:text-left">
              Vintar empowers learners through practical, mentor-led courses
              designed for real-world growth. We're building a learning platform
              where skills meet purpose, and passion leads to progress.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Image and Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side - Image */}
        <div className="lg:pr-8">
          <div className="relative transform scale-105 hover:scale-110 transition-transform duration-300">
            <img
              src="/assets/public.avif"
              alt="Vintar Academy Team"
              className="w-full h-auto rounded-2xl shadow-xl object-cover min-h-[400px] md:min-h-[500px]"
            />
          </div>
        </div>

        {/* Right Side - Statistics */}
        <StatsSection />
      </div>
    </section>
  );
};

export default AboutStorySection;
