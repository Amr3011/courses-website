import BannerSec from "@/components/shared/Banner/BannerSec";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide/RightSide";

const Lesson = () => {
  return (
    <section className="container p-2 ">
      <div className="w-full ">
        <BannerSec
          title="Mastering Creative UI/UX Design"
          paragraph="Build intuitive, beautiful user interfaces and improve user experience with practical design techniques."
        />
        <div className="grid grid-cols-8">
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </section>
  );
};

export default Lesson;
