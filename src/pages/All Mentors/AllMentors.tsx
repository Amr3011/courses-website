import BannerSec from "@/components/shared/Banner/BannerSec";
import CardMentor from "@/components/shared/Cards/CardMentor";
import HeaderSec from "@/components/shared/HeaderSec/HeaderSec";
import { useStore } from "@/store/store";
import { Link } from "react-router-dom";

const AllMentors = () => {
  const data = useStore((state) => state.AllMentors);
  return (
    <section className="container ">
      <BannerSec
        title="Meet Our Vintar"
        colorTitle="Mentors"
        paragraph="At Vintar, our mentors are experienced professionals dedicated to helping learners reach their full potential."
      />
      <div className="my-16">
        <HeaderSec
          Ftitle="Inspiring"
          Ltitle="Proven Results
"
          paragraph="Learn from experienced professionals who bring real-world insights and practical skills to every course.

"
          spantitle="Mentors"
        />
      </div>
      <div className="grid grid-cols-4 my-10 gap-4 ">
        {data.map((el) => {
          return (
            <Link to={`/AllMentors/${el.id}`}>
              <CardMentor
                img={el.img}
                namePosition={el.namePosition}
                name={el.name}
                socialMedia={el.socialMedia}
                center
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default AllMentors;
