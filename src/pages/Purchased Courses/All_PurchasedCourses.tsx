import BannerSec from "@/components/shared/BannerSec";
import CourseIncludes from "@/components/shared/CourseIncludes";

const All_PurchasedCourses = () => {
  return (
    <section className="section-container">
      <div className="w-full ">
        <BannerSec
          title="Mastering Creative UI/UX Design"
          paragraph="Build intuitive, beautiful user interfaces and improve user experience with practical design techniques."
        />
        <div className="flex flex-col md:flex-row gap-3 ">
          <div className="w-full p-2 md:p-0 md:w-[70%]  ">
            <img
              src="https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/683710ee854936d927d6e04a_pexels-mart-production-7679662.avif"
              alt="img"
              className="object-cover w-full max-h-[350px] h-full rounded-xl"
            />
          </div>
          <div className="w-full md:w-[30%] ">
            <CourseIncludes
              Level="Medium"
              Video={22}
              Duration={5}
              Certificate
              Language="English"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default All_PurchasedCourses;
