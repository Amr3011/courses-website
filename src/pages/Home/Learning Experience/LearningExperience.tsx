import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LearningExperience = () => {
  useGSAP(() => {
    if (window.innerWidth >= 768) {
      const cards = gsap.utils.toArray(".card-hover") as HTMLElement[];
      cards.forEach((card) => {
        gsap.set(card, { yPercent: [0, 70, 0, 70][cards.indexOf(card)] || 0 });
      });
    }
  });
  return (
    <div className="bg-background-accent w-full py-20 md:py-40 ">
      <div className="container   ">
        <HeaderSEC
          Ftitle="How to"
          spantitle="Begin "
          Ltitle="Your Learning Experience"
          paragraph="Here’s how Vintar guides you from curious to confident, one step at a time."
        />
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[300px] gap-8 md:gap-12 lg:gap-16 my-5">
          <CardHover
            titleBox1="01"
            pBox1="Browse Courses"
            titleBox2="Explore our wide range of categories and find the course that matches your goals and interests."
          />
          <CardHover
            titleBox1="02"
            pBox1="Enroll Instantly"
            titleBox2="Sign up in just a few clicks and get instant access to all course materials and resources."
            isReversed={true}
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
            isReversed={true}
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
        <h1 className="max-w-[380px] font-heading text-heading-color text-2xl md:text-4xl font-semibold text-center">
          {Ftitle} <span className="text-primary-color">{spantitle}</span>{" "}
          {Ltitle}
        </h1>
        <p className="text-sm text-text font-body text-center px-4">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

const CardHover = ({
  titleBox1,
  pBox1,
  titleBox2,
  classname,
  isReversed = false,
}: {
  titleBox1: string;
  pBox1: string;
  titleBox2: string;
  classname?: string;
  isReversed?: boolean;
}) => {
  return (
    <div className={`${classname} card-hover group`}>
      <div className="md:hidden">
        <div className="flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow-lg">
          <h1 className="text-primary-color text-2xl font-bold mb-2">
            {titleBox1}
          </h1>
          <p className="font-heading text-lg font-semibold mb-4 text-center">
            {pBox1}
          </p>
          <p className="text-sm text-gray-600 text-center leading-relaxed">
            {titleBox2}
          </p>
        </div>
      </div>

      <div className="hidden md:block relative">
        <div
          className={`absolute top-0 left-0 -rotate-6 flex text-center items-center bg-light-color group-hover:bg-white h-52 w-full rounded-xl z-10 transition-all duration-700 ease-in-out group-hover:rotate-12 ${
            isReversed
              ? "group-hover:-translate-y-[180px]"
              : "group-hover:translate-y-[180px]"
          }`}
        >
          <p className="text-sm text-white group-hover:text-black transition-colors duration-700">
            {titleBox2}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center bg-white group-hover:bg-primary-color h-52 w-full rounded-xl z-20 rotate-6 relative transition-all duration-700 ease-in-out group-hover:-rotate-12">
          <h1 className="text-primary-color text-3xl font-bold group-hover:text-white transition-colors duration-700">
            {titleBox1}
          </h1>
          <p className="font-heading text-xl font-semibold group-hover:text-white transition-colors duration-700">
            {pBox1}
          </p>
        </div>
      </div>
    </div>
  );
};
