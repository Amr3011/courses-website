import BannerSec from "@/components/shared/Banner/BannerSec.tsx";
import CourseCategoriesFilter from "@/components/shared/CourseCategoriesFilter/CourseCategoriesFilter";
import CourseCardsGrid from "@/components/shared/CourseCardsGrid/CourseCardsGrid";

export const Explore_Courses = () => {
  return (
    <div>
      <div className="w-full max-w-[1400px] justify-center mx-auto px-4">
        <BannerSec
          title={"Explore Vintar"}
          colorTitle={"Courses"}
          paragraph={
            "Browse our diverse course selection designed to build real-world skills and help you grow in your career journey."
          }
        />
      </div>

      {/* Course Categories Filter */}
      <CourseCategoriesFilter />

      {/* Course Cards Grid */}
      <CourseCardsGrid />
    </div>
  );
};
