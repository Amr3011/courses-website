import FavoriteMentors from "./Favorite Mentors/FavoriteMentors";
import LearningExperience from "./Learning Experience/LearningExperience";

const Home = () => {
  return (
    <div className=" text-primary-1 my-48">
      <LearningExperience />
      <FavoriteMentors />
    </div>
  );
};

export default Home;
