const StatsSection = () => {
  const stats = [
    {
      number: "50K",
      symbol: "+",
      title: "Learners Enrolled",
      description: "Trusted by thousands of Global Students.",
    },
    {
      number: "45",
      symbol: "+",
      title: "High-Impact Courses",
      description: "Curated across 5 key learning categories.",
    },
    {
      number: "29",
      symbol: "+",
      title: "Expert Mentors",
      description: "Taught by professionals from real industries.",
    },
    {
      number: "4.9",
      symbol: "",
      title: "Consistent Rating",
      description: "Highly rated by our learning community.",
    },
  ];

  return (
    <div>
      {/* What Makes Us Different Section */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          What Makes Us Different
        </h3>

        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 flex items-center gap-6"
            >
              <div className="flex-shrink-0">
                <span className="text-5xl md:text-6xl font-bold text-gray-900">
                  {stat.number}
                  <span className="text-blue-600">{stat.symbol}</span>
                </span>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {stat.title}
                </h4>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
