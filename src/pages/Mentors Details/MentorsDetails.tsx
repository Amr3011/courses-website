import { useStore } from "@/store/store";
import { useParams } from "react-router-dom";

const MentorsDetails = () => {
  const { id } = useParams();
  const AllMentors = useStore((state) => state.AllMentors);
  const mentor = AllMentors.find((el) => el.id === Number(id));
  return (
    <div className="  container mt-44">
      <div className=" grid grid-cols-10 gap-10">
        <div className="col-span-3 gap-5">
          <div className="sticky top-10  border-[12px] border-slate-100 bg-slate-100 rounded-xl">
            <img
              className="h-72 w-full object-cover rounded-xl "
              src={mentor?.img}
              alt={`${name} profile picture`}
            />
          </div>
        </div>
        <div className="col-span-7">
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-body text-sub-title">
              {mentor?.namePosition}
            </h3>
            <h1 className="text-6xl text-heading-color font-semibold  font-heading">
              {mentor?.name}
            </h1>
            <div className="w-1/4 flex items-start">
              <ul className={`flex gap-8 ${"justify-center gap-14 py-2"}`}>
                {mentor?.socialMedia.map((el, idx) => (
                  <li className="h-4 w-4" key={idx}>
                    <a href={el.link} target="_blank">
                      <img src={el.icon} alt="link" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="bg-text border-[1px]" />
          </div>
          <div className="flex flex-col gap-5 my-6">
            <p className="text-sm">
              David Tan is a seasoned web developer and technical educator with
              over a decade of experience in crafting scalable and efficient web
              applications. He has worked with startups and enterprise clients,
              building products from the ground up and mentoring junior
              developers throughout the process. His deep understanding of
              front-end and back-end technologies allows him to bridge the gap
              between design and engineering seamlessly.
            </p>
            <p className="text-sm">
              He is passionate about clean code, collaborative development, and
              empowering learners with real-world skills that go beyond theory.
              David integrates modern practices like CI/CD, testing, and
              performance optimization into his curriculum, ensuring students
              are job-ready from day one.
            </p>
            <div className="flex flex-col gap-5 ">
              <h1 className="text-heading-color text-2xl font-semibold">
                Areas of Expertise:
              </h1>
              <ul className="list-disc ml-10 text-sm text-text">
                <li>Full-Stack Web Development</li>
                <li>Backend Architecture</li>
                <li>Code Optimization</li>
              </ul>
              <p className="text-sm">
                David ensures learners don't just follow instructions but
                understand how web technologies work behind the scenes. His
                hands-on projects simulate real-world workflows and challenge
                students to think critically and debug independently.
              </p>
            </div>
            <div className="flex flex-col gap-5 ">
              <h1 className="text-heading-color text-2xl font-semibold">
                Contact Information:
              </h1>
              <ul className="list-disc ml-10 text-sm text-text">
                <li>Phone: +62 811 1000 2222</li>
                <li>Email: david.tan@vintar.com</li>
                <li>Location: Jakarta, Indonesia</li>
              </ul>
              <p className="text-sm">
                David also mentors developers through open-source communities
                and speaks at tech events across Southeast Asia, sharing
                insights on building sustainable tech careers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-24 border-[1px]" />
      <div className="min-h-[300px]">
        <h1 className="text-3xl font-bold">Study with David Tan</h1>
      </div>
    </div>
  );
};

export default MentorsDetails;
