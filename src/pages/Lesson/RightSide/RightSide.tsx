import { useStore } from "@/store/store";
import { Route, Routes, useParams } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="col-span-6 ">
      <Routes>
        <Route path=":id" element={<LessonPage />} />
        <Route
          path="*"
          element={
            <p className="text-center text-2xl pt-5">
              Choose a lesson from the north
            </p>
          }
        />
      </Routes>
    </div>
  );
};

export default RightSide;
function LessonPage() {
  const data = useStore((state) => state.Chapter);
  const { id } = useParams();
  const lesson = data.lessons.filter((l) => {
    return l.id === Number(id);
  });
  return (
    <div>
      <h1>{lesson[0].nameLesson}</h1>
      <h2 className="text-xl font-bold mb-2">{id}</h2>
      <p>{lesson[0].Time_Of_lesson}</p>
    </div>
  );
}
