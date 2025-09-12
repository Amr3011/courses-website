import Chapter from "@/components/shared/Chapter";
import { useStore } from "@/store/store";

const CourseCurriculum = () => {
  const data = useStore((state) => state.Chapter);
  return (
    <div>
      <h1 className="mt-16 mb-5 font-semibold text-2xl ">Course Curriculum</h1>
      <Chapter
        Number_Of_lessons={data.Number_Of_lessons}
        Time_Of_lessons={data.Time_Of_lessons}
        lessons={data.lessons}
        title={data.title}
      />
      <Chapter
        Number_Of_lessons={data.Number_Of_lessons}
        Time_Of_lessons={data.Time_Of_lessons}
        lessons={data.lessons}
        title={data.title}
      />
      <Chapter
        Number_Of_lessons={data.Number_Of_lessons}
        Time_Of_lessons={data.Time_Of_lessons}
        lessons={data.lessons}
        title={data.title}
      />
      <Chapter
        Number_Of_lessons={data.Number_Of_lessons}
        Time_Of_lessons={data.Time_Of_lessons}
        lessons={data.lessons}
        title={data.title}
      />
    </div>
  );
};

export default CourseCurriculum;
