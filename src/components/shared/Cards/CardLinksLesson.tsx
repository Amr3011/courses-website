import type { CardLinksLessonType } from "@/types/Course";

const CardLinksLesson = ({ title, links }: CardLinksLessonType) => {
  return (
    <div className="w-full border-[1px] border-border  rounded-2xl p-4">
      <h1 className="text-xl text-heading-color font-body">{title}</h1>
      <ul className="w-full flex flex-col  gap-2 py-2 ">
        {links.map((el, idx) => {
          return (
            <li
              key={el.title + idx}
              className="bg-background-accent p-2 rounded-lg hover:opacity-70 hover:cursor-pointer"
            >
              <a href={el.href}>{el.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardLinksLesson;
