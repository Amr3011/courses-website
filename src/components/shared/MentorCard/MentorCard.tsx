interface MentorCardProps {
  title: string;
  features: string[];
  statistics: Array<{
    value: string;
    label: string;
  }>;
  image: string;
  imageAlt: string;
  description: string;
}

const MentorCard = ({
  title,
  features,
  statistics,
  image,
  imageAlt,
  description,
}: MentorCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 w-full shadow-lg border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h3>

          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6">
            {statistics.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={imageAlt}
            className="w-full max-w-sm h-64 object-cover rounded-2xl shadow-lg mb-4"
          />
          <p className="text-gray-600 text-lg text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
