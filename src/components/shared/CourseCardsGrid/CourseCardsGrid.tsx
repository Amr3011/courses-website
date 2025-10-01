const CourseCardsGrid = () => {
  const courses = [
    {
      id: 1,
      title: "Productivity Mindset",
      instructor: "AMANDA REIS",
      price: "$40",
      level: "All Levels",
      videos: "21 Videos",
      hours: "5 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 2,
      title: "UI/UX Design",
      instructor: "RICO PRANATA",
      price: "$55",
      level: "Medium",
      videos: "22 Videos",
      hours: "5 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 3,
      title: "Project Management",
      instructor: "KEVIN LAU",
      price: "$50",
      level: "Medium",
      videos: "28 Videos",
      hours: "7 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 4,
      title: "Public Speaking",
      instructor: "MING OCTAVY",
      price: "$40",
      level: "All Levels",
      videos: "18 Videos",
      hours: "4 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 5,
      title: "Mental Wellness",
      instructor: "RIKA YULIANI",
      price: "$35",
      level: "Beginner",
      videos: "16 Videos",
      hours: "3 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 6,
      title: "Build Good Habits",
      instructor: "RIKA YULIANI",
      price: "$38",
      level: "All Levels",
      videos: "15 Videos",
      hours: "4 Hours",
      image: "/assets/instructor.webp",
    },

    {
      id: 7,
      title: "Productivity Mindset",
      instructor: "AMANDA REIS",
      price: "$40",
      level: "All Levels",
      videos: "21 Videos",
      hours: "5 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 8,
      title: "UI/UX Design",
      instructor: "RICO PRANATA",
      price: "$55",
      level: "Medium",
      videos: "22 Videos",
      hours: "5 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 9,
      title: "Project Management",
      instructor: "KEVIN LAU",
      price: "$50",
      level: "Medium",
      videos: "28 Videos",
      hours: "7 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 10,
      title: "Public Speaking",
      instructor: "MING OCTAVY",
      price: "$40",
      level: "All Levels",
      videos: "18 Videos",
      hours: "4 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id:11,
      title: "Mental Wellness",
      instructor: "RIKA YULIANI",
      price: "$35",
      level: "Beginner",
      videos: "16 Videos",
      hours: "3 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 12,
      title: "Build Good Habits",
      instructor: "RIKA YULIANI",
      price: "$38",
      level: "All Levels",
      videos: "15 Videos",
      hours: "4 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 13,
      title: "Public Speaking",
      instructor: "MING OCTAVY",
      price: "$40",
      level: "All Levels",
      videos: "18 Videos",
      hours: "4 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 14,
      title: "Mental Wellness",
      instructor: "RIKA YULIANI",
      price: "$35",
      level: "Beginner",
      videos: "16 Videos",
      hours: "3 Hours",
      image: "/assets/instructor.webp",
    },
    {
      id: 15,
      title: "Build Good Habits",
      instructor: "RIKA YULIANI",
      price: "$38",
      level: "All Levels",
      videos: "15 Videos",
      hours: "4 Hours",
      image: "/assets/instructor.webp",
    },
  ];

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-orange-100 text-orange-800";
      case "Medium":
        return "bg-orange-100 text-orange-800";
      case "All Levels":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            {/* Course Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelBadgeColor(
                    course.level
                  )}`}
                >
                  {course.level}
                </span>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-6">
              {/* Title and Price */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900 flex-1 mr-4">
                  {course.title}
                </h3>
                <span className="text-2xl font-bold text-gray-900">
                  {course.price}
                </span>
              </div>

              {/* Instructor */}
              <p className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">
                {course.instructor}
              </p>

              {/* Course Details */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <span className="text-sm text-gray-600">{course.videos}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                  <span className="text-sm text-gray-600">{course.hours}</span>
                </div>
              </div>

              {/* View Course Button */}
              <button className="w-full py-3 px-6 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseCardsGrid;
