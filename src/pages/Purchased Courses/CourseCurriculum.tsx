import Chapter from "@/components/shared/Chapter";
import { useStore } from "@/store/store";

const CourseCurriculum = () => {
  const data = useStore((state) => state.Chapters);
  return (
    <div>
      <h1 className="mt-16 mb-5 font-semibold text-2xl ">Course Curriculum</h1>

      {data.map((el) => {
        return (
          <Chapter
            Number_Of_lessons={el.Number_Of_lessons}
            Time_Of_lessons={el.Time_Of_lessons}
            lessons={el.lessons}
            title={el.title}
          />
        );
      })}
    </div>
  );
};

export default CourseCurriculum;
