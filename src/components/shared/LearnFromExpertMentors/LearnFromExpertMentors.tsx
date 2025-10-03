import MentorCard from "@/components/shared/MentorCard/MentorCard";

const LearnFromExpertMentors = () => {
  return (
    <section className="w-full mx-auto px-4 py-16 md:py-24 bg-background-accent">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <MentorCard
          title="Expert Mentor Guidance"
          features={[
            "1-on-1 Q&A sessions",
            "Feedback on projects",
            "Mentor-led workshops",
          ]}
          statistics={[
            { value: "29+", label: "Active Mentors" },
            { value: "4.9", label: "Average Rating" },
          ]}
          image="/assets/instructor.webp"
          imageAlt="Expert Mentor"
          description="Get expert feedback and support directly from experienced industry mentors."
        />
        <MentorCard
          title="Career-Focused Curriculum"
          features={[
            "Job-ready learning paths",
            "Portfolio templates",
            "Resume prep tools",
          ]}
          statistics={[
            { value: "78%", label: "Career Growth" },
            { value: "120+", label: "Mentor Rating" },
          ]}
          image="/assets/public.avif"
          imageAlt="Career-Focused Learning"
          description="Courses tailored for job success with real tools, portfolios, and career prep."
        />
      </div>
    </section>
  );
};

export default LearnFromExpertMentors;
