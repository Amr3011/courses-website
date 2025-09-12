import type { CardMentorProps } from "@/types/mentor";

const CardMentor = ({
  img,
  name,
  namePosition,
  socialMedia,
  center,
}: CardMentorProps) => {
  return (
    <div
      className={`min-h-[100px] w-full border-[1px] border-border gap-3 flex ${
        center && "flex-col text-center items-center gap-6 bg-[#F2F5F5] "
      }  overflow-hidden p-5 rounded-xl my-5`}
    >
      <div className={`${center ? "" : "w-1/2"} `}>
        <img
          className="h-15 w-15 object-cover rounded-xl "
          src={img}
          alt={`${name} profile picture`}
        />
      </div>
      <div className="w-full px-3 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p>{namePosition}</p>
        <ul className={`flex gap-11 ${center && "justify-center gap-14 py-2"}`}>
          {socialMedia.map((el, idx) => (
            <li className="h-4 w-4" key={idx}>
              <a href={el.link} target="_blank">
                <img src={el.icon} alt="link" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardMentor;
