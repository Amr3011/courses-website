import Chapter from "@/components/shared/Chapter";

const CourseCurriculum = () => {
  const data = {
    title: "Chapter 1: Foundations of UI/UX Design",
    lessons: [
      {
        nameLesson: "Introduction to UI/UX",
        Time_Of_lesson: 12,
      },
      {
        nameLesson: "Understanding User-Centered Design",
        Time_Of_lesson: 20,
      },
      {
        nameLesson: "Design Thinking Process",
        Time_Of_lesson: 25,
      },
      {
        nameLesson: "Principles of Good UX",
        Time_Of_lesson: 18,
      },
    ],
    Number_Of_lessons: 4,
    Time_Of_lessons: 75,
  };
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
