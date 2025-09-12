import { useState } from "react";
import type { ChapterType } from "@/types/Course";
import { Link } from "react-router-dom";

type ChapterProps = ChapterType & {
  withButton?: boolean;
};

const Chapter = ({
  Number_Of_lessons,
  Time_Of_lessons,
  lessons,
  title,
  withButton = false,
}: ChapterProps) => {
  const [closeUL, setCloseUl] = useState(true);

  const handleClick = () => setCloseUl(!closeUL);

  return (
    <div className="border-[1px] p-6 rounded-xl my-5">
      {withButton ? (
        <button onClick={handleClick} className="text-start w-full">
          <h1 className="text-[#1C6ADF] text-base font-medium">{title}</h1>
        </button>
      ) : (
        <h1 className="text-[#1C6ADF] text-xl font-medium">{title}</h1>
      )}

      <ul
        className={`flex flex-col gap-2 ${
          withButton ? (closeUL ? "max-h-0" : "max-h-[500px]") : ""
        } overflow-hidden transition-all duration-700`}
      >
        <li>
          <p className="text-xs font-medium my-2">{`${Number_Of_lessons} lessons - ${Time_Of_lessons} MIN`}</p>
        </li>

        {lessons.map((lesson, idx) => (
          <li key={idx}>
            <Link
              to={`/Lesson/${lesson.id}`}
              className={`flex justify-between p-3 ${
                withButton ? "px-4" : "px-9"
              } bg-[#F2F5F5] rounded-lg text-xs hover:bg-[#ECF9FF] hover:scale-x-105 duration-500`}
            >
              <h2 className="text-xs line-clamp-1 ">{lesson.nameLesson}</h2>
              <span className="text-xs line-clamp-1">{`${lesson.Time_Of_lesson} Min`}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chapter;
