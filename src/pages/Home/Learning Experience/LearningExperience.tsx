const LearningExperience = () => {
  return (
    <div className="bg-background-accent w-full py-40 ">
      <div className="container   ">
        <HeaderSEC
          Ftitle="How to"
          spantitle="Begin "
          Ltitle="Your Learning Experience"
          paragraph="Here’s how Vintar guides you from curious to confident, one step at a time."
        />
        <div className="relative grid grid-cols-4  gap-16 my-14">
          <CardHover
            titleBox1="01"
            pBox1="Browse Courses"
            titleBox2="Explore our wide range of categories and find the course that matches your goals and interests."
          />
          <CardHover
            titleBox1="02"
            pBox1="Enroll Instantly"
            titleBox2="Sign up in just a few clicks and get instant access to all course materials and resources."
          />
          <CardHover
            titleBox1="03"
            pBox1="Learn at Your Pace"
            titleBox2="Watch videos, complete tasks, and practice anytime, anywhere  all on your schedule."
          />
          <CardHover
            titleBox1="04"
            pBox1="Earn Your Certificate"
            titleBox2="Finish the course and receive a certificate to showcase your new skills and boost your career."
          />
        </div>
      </div>
    </div>
  );
};

export default LearningExperience;

const HeaderSEC = ({
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
      <div className="flex flex-col justify-between items-center gap-10">
        <h1 className="max-w-[380px] font-heading text-heading-color text-4xl font-semibold">
          {Ftitle} <span className="text-primary-color">{spantitle}</span>{" "}
          {Ltitle}
        </h1>
        <p className="text-sm text-text font-body">{paragraph}</p>
      </div>
    </div>
  );
};

const CardHover = ({
  titleBox1,
  pBox1,
  titleBox2,
}: {
  titleBox1: string;
  pBox1: string;
  titleBox2: string;
}) => {
  return (
    <div className="relative col-span-1">
      <div className="absolute top-0 left-0 -rotate-6 flex text-center items-center bg-light-color h-52 w-full rounded-xl z-10">
        <p className="text-sm text-white">{titleBox2}</p>
      </div>

      <div className="flex flex-col justify-center items-center bg-white h-52 w-full rounded-xl z-20 rotate-6 relative">
        <h1 className="text-primary-color text-3xl font-bold">{titleBox1}</h1>
        <p className="font-heading text-xl font-semibold">{pBox1}</p>
      </div>
    </div>
  );
};
