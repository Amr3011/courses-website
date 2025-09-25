const InsightsSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/assets/instructor.webp",
      date: "JULY 14, 2025",
      category: "LEARNING STRATEGY",
      title: "How Expert Mentors Can Accelerate Your Learning",
    },
    {
      id: 2,
      image: "/assets/instructor.webp",
      date: "JULY 14, 2025",
      category: "PROFESSIONAL GROWTH",
      title: "How Ongoing Training Shapes Future Leadership",
    },
    {
      id: 3,
      image: "/assets/instructor.webp",
      date: "JULY 14, 2025",
      category: "LEARNING METHODS",
      title: "Why Practical Projects Help You Master New Skills",
    },
    {
      id: 4,
      image: "/assets/instructor.webp",
      date: "JULY 14, 2025",
      category: "ONLINE LEARNING",
      title: "The Role of Feedback in Professional Skill Growth",
    },
    {
      id: 5,
      image: "/assets/instructor.webp",
      date: "JULY 14, 2025",
      category: "SKILLS & CREDENTIALS",
      title: "How Certifications Boost Career Credibility",
    },
    {
      id: 6,
      image: "/assets/instructor.webp",
      date: "JULY 14, 2025",
      category: "CAREER DEVELOPMENT",
      title: "How Industry Experts Advance Your Career",
    },
  ];

  return (
    <section className="w-full  py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-blue-600">Insights</span> That Ignite Growth
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Discover ideas, tips, and inspiration to fuel your learning journey
            and professional success.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-500 font-medium">
                    {post.date}
                  </span>
                  <span className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
