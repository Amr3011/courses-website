import FavoriteMentors from "./Favorite Mentors/FavoriteMentors";
import LearningExperience from "./Learning Experience/LearningExperience";
import StudentSuccess from "./Student Success/StudentSuccess";

const Home = () => {
  return (
    <div className=" text-primary-1 my-48">
      <LearningExperience />
      <FavoriteMentors />
      <StudentSuccess />
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
