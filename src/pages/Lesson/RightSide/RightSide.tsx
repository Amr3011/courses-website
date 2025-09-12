import { useStore } from "@/store/store";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import NavLesson from "../NavLesson";

const RightSide = () => {
  return (
    <div className="col-span-6 ">
      <Routes>
        <Route path=":id" element={<LessonPage />} />
        <Route path="" element={<Navigate to="1" replace />} />
      </Routes>
    </div>
  );
};

export default RightSide;
function LessonPage() {
  const data = useStore((state) => state.Chapters);
  const { id } = useParams();
  const lesson = data
    .flatMap((ch) => ch.lessons)
    .find((l) => l.id === Number(id));
  console.log(lesson);
  return (
    <div>
      <NavLesson />

      <div className="my-5">
        <img
          src="https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/683710ee854936d927d6e04a_pexels-mart-production-7679662.avif "
          alt="img"
          className="w-full rounded-xl max-h-[340px] object-cover"
        />
        <h1>{lesson?.nameLesson}</h1>
        <h2 className="text-xl font-bold mb-2">{id}</h2>
        <p>{lesson?.Time_Of_lesson}</p>
      </div>
    </div>
  );
}
