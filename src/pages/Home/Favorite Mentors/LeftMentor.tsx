import { useStore } from "@/store/store";

const LeftMentor = () => {
  const data = useStore((state) => state.AllMentors);

  return (
    <div className=" left-mentor-wrapper  flex-1">
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full ">
        <p className="text-sub-title text-xs font-semibold uppercase">
          Communication Trainer
        </p>
        <h1 className="text-heading-color text-5xl font-bold">Rany Octavy</h1>
        <div>
          <ul className={`flex gap-11 ${"justify-center gap-14 py-2"}`}>
            {data[0].socialMedia.map((el, idx) => (
              <li className="h-4 w-4" key={idx}>
                <a href={el.link} target="_blank">
                  <img src={el.icon} alt="link" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* {  <div className=" flex flex-col items-center justify-center w-full h-full ">
        <p className="text-sub-title text-xs font-semibold uppercase">
          Communication Trainer
        </p>
        <h1 className="text-heading-color text-5xl font-bold">Rany Octavy</h1>
        <div>
          <ul className={`flex gap-11 ${"justify-center gap-14 py-2"}`}>
            {data[1].socialMedia.map((el, idx) => (
              <li className="h-4 w-4" key={idx}>
                <a href={el.link} target="_blank">
                  <img src={el.icon} alt="link" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center w-full h-full ">
        <p className="text-sub-title text-xs font-semibold uppercase">
          Communication Trainer
        </p>
        <h1 className="text-heading-color text-5xl font-bold">Rany Octavy</h1>
        <div>
          <ul className={`flex gap-11 ${"justify-center gap-14 py-2"}`}>
            {data[2].socialMedia.map((el, idx) => (
              <li className="h-4 w-4" key={idx}>
                <a href={el.link} target="_blank">
                  <img src={el.icon} alt="link" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>} */}
    </div>
  );
};

export default LeftMentor;
