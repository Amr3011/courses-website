import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const LearnFromExpertMentors = () => {
  const mentors = [
    {
      img: "/assets/instructor.webp",
      name: "Amanda Reis",
      position: "BUSINESS COACH",
    },
    {
      img: "/assets/instructor.webp",
      name: "Brian Yusuf",
      position: "LANGUAGE TRAINER",
    },
    {
      img: "/assets/instructor.webp",
      name: "David Tan",
      position: "WEB DEVELOPER",
    },
    {
      img: "/assets/instructor.webp",
      name: "Kevin Lau",
      position: "MARKETING LEAD",
    },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Learn from Expert <span className="text-blue-600">Mentors</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Meet top-tier mentors ready to guide your learning journey with
          hands-on knowledge and industry experience.
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Mentor Image */}
            <div className="relative">
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Mentor Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {mentor.name}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">
                {mentor.position}
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300">
          View All Mentors
        </button>
      </div>
    </section>
  );
};

export default LearnFromExpertMentors;
