import LeftMentor from "./LeftMentor";
import RightMentor from "./RightMentor";

const FavoriteMentors = () => {
  return (
    <div className="container my-28 Frames-Sec">
      <HeaderSec
        Ftitle="Favorite"
        Ltitle="from Our Community"
        paragraph="Meet top-tier mentors ready to guide your learning journey with hands-on knowledge and industry experience."
        spantitle="Mentors"
      />
      <div className="flex gap-14 my-14 ">
        <LeftMentor />
        <RightMentor />
      </div>
    </div>
  );
};

export default FavoriteMentors;

const HeaderSec = ({
  Ftitle,
  Ltitle,
  spantitle,
  paragraph,
}: {
  Ftitle: string;
  Ltitle?: string;
  spantitle?: string;
  paragraph?: string;
}) => {
  return (
    <div>
      <div className="flex justify-between items-end">
        <h1 className="max-w-[390px] font-heading text-heading-color text-4xl font-semibold">
          {Ftitle} <span className="text-primary-color">{spantitle}</span>{" "}
          {Ltitle}
        </h1>
        <div className="text-right">
          <p className="max-w-[400px] text-xs text-text font-body">
            {paragraph}
          </p>
          <button className="mt-5 text-white bg-primary-color px-6 py-1 rounded-full font-body text-sm">
            View All Mentors
          </button>
        </div>
      </div>
    </div>
  );
};
