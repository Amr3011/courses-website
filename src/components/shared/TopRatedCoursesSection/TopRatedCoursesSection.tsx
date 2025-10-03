import CourseCardsGrid from "@/components/shared/CourseCardsGrid/CourseCardsGrid";

const TopRatedCoursesSection = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Our <span className="text-blue-600">Top Rated</span> Courses
        </h2>
      </div>

      {/* Course Cards Grid */}
      <CourseCardsGrid />
    </section>
  );
};

export default TopRatedCoursesSection;
