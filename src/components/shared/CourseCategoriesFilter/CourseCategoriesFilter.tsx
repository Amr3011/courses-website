import { useState } from "react";

const CourseCategoriesFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All Course");

  const topRowCategories = [
    "All Course",
    "Business & Management",
    "Language & Communication",
    "Technology & Programming",
  ];

  const bottomRowCategories = ["Design & Creativity", "Personal Development"];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col items-center gap-6">
        {/* Top Row - 4 buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {topRowCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium text-base md:text-lg transition-all duration-300 whitespace-nowrap
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bottom Row - 2 buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {bottomRowCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 md:px-8 md:py-4 rounded-xl font-medium text-base md:text-lg transition-all duration-300 whitespace-nowrap
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategoriesFilter;
