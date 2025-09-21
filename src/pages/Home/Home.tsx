import FavoriteMentors from "./Favorite Mentors/FavoriteMentors";
import LearningExperience from "./Learning Experience/LearningExperience";
import Questions from "./Questions/Questions";
import StudentSuccess from "./Student Success/StudentSuccess";
import UpgradeSec from "./UpgradeSec/UpgradeSec";

const Home = () => {
  return (
    <div className=" text-primary-1 my-48">
      <LearningExperience />
      <FavoriteMentors />
      <StudentSuccess />
      <Questions />
      <UpgradeSec />
    </div>
  );
};

export default Home;
