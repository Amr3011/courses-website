import BannerSec from "@/components/shared/Banner/BannerSec";
import AboutStorySection from "@/components/shared/AboutStorySection/AboutStorySection";
import WhatSetsUsApart from "@/components/shared/WhatSetsUsApart/WhatSetsUsApart";
import LearnFromExpertMentors from "@/components/shared/LearnFromExpertMentors/LearnFromExpertMentors";

const About = () => {
  return (
    <>
      <div className="w-full max-w-[1400px] justify-center mx-auto px-4">
        <BannerSec
          title={"About Vintar"}
          colorTitle={"Academy"}
          paragraph={
            "At Vintar, we believe in the power of skill-building to transform lives and careers."
          }
        />
      </div>

      {/* About Story Section */}
      <AboutStorySection />

      {/* What Sets Us Apart Section */}
      <WhatSetsUsApart />

      {/* Learn from Expert Mentors Section */}
      <LearnFromExpertMentors />
    </>
  );
};

export default About;
