import type { ChapterType } from "@/types/Course";

const Chapter = ({
  Number_Of_lessons,
  Time_Of_lessons,
  lessons,
  title,
}: ChapterType) => {
  return (
    <div className=" border-[1px] p-6 rounded-xl my-5">
      <h1 className="text-[#1C6ADF] text-xl font-medium">{title}</h1>
      <p className="text-xs font-medium my-2 ">{`${Number_Of_lessons} lessons - ${Time_Of_lessons} MIN`}</p>
      <ul className="flex flex-col gap-2">
        {lessons.map((lesson) => {
          return (
            <li>
              <a
                className="flex justify-between p-3 bg-[#F2F5F5] rounded-lg text-xs hover:bg-[#ECF9FF] hover:scale-x-105 duration-500"
                href=""
              >
                <h2 className="text-sm">{lesson.nameLesson}</h2>
                <span>{`${lesson.Time_Of_lesson} Min`}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chapter;
