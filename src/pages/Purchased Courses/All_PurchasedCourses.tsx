import CardMentor from "@/components/shared/Cards/CardMentor";
import CourseIncludes from "@/components/shared/CourseIncludes";
import LeftSide from "./LeftSide";
import BannerSec from "@/components/shared/Banner/BannerSec";

const All_PurchasedCourses = () => {
  return (
    <section className="section-container p-2  ">
      <div className="w-full ">
        <BannerSec
          title="Mastering Creative UI/UX Design"
          paragraph="Build intuitive, beautiful user interfaces and improve user experience with practical design techniques."
        />
        <div className="flex flex-col md:flex-row gap-8 ">
          <LeftSide />
          <div className="w-full md:w-[30%]  ">
            <div className="sticky top-12">
              <CourseIncludes
                Level="Medium"
                Video={22}
                Duration={5}
                Certificate
                Language="English"
              />
              <CardMentor
                img="https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/683711420e75207b7ff2340c_pexels-anntarazevich-5425615.webp"
                name="Rico Pranata"
                namePosition="App Developer"
                socialMedia={[
                  {
                    link: "www.google.com",
                    icon: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6823527eea8a09e021553a63_twitter.svg",
                  },
                  {
                    link: "www.google.com",
                    icon: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6823527e1a24265b12ffa3ed_linkedin.svg",
                  },
                  {
                    link: "www.google.com",
                    icon: "https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/6823527e723ce1c55a9a7417_instagram.svg",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default All_PurchasedCourses;
