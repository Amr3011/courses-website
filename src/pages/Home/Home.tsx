import HeroSection from "@/components/shared/Hero/HeroSection";
import CompanyLogos from "@/components/shared/CompanyLogos/CompanyLogos";
import DiscoverCategories from "@/components/shared/DiscoverCategories/DiscoverCategories";
import LearnFromExpertMentors from "@/components/shared/LearnFromExpertMentors/LearnFromExpertMentors";
import FavoriteMentors from "./Favorite Mentors/FavoriteMentors";
import LearningExperience from "./Learning Experience/LearningExperience";
import Questions from "./Questions/Questions";
import StudentSuccess from "./Student Success/StudentSuccess";
import UpgradeSec from "./UpgradeSec/UpgradeSec";
import TopRatedCoursesSection from "@/components/shared/TopRatedCoursesSection/TopRatedCoursesSection";

const Home = () => {
  return (
    <div className="text-primary-1">
      <HeroSection />
      <CompanyLogos />
      <DiscoverCategories />
      <LearnFromExpertMentors />
      {/* Top Rated Courses Section */}
      <TopRatedCoursesSection />

      <div className="my-48">
        <LearningExperience />
        <FavoriteMentors />
        <StudentSuccess />
        <Questions />
        <UpgradeSec />
      </div>
    </div>
  );
};

export default Home;
