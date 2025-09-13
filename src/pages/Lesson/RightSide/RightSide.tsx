import { useStore } from "@/store/store";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import NavLesson from "../NavLesson";
import CardLinksLesson from "@/components/shared/Cards/CardLinksLesson";

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
  return (
    <div>
      <NavLesson title={lesson?.nameLesson || "Lesson"} />

      <div className="my-5">
        <div className="w-full aspect-video">
          <iframe
            src={lesson?.link}
            className="w-full h-full rounded-xl"
            allowFullScreen
            title={lesson?.nameLesson || "Lesson video"}
          ></iframe>
        </div>
        <h1 className="font-semibold text-2xl my-6 ">About Lesson</h1>
        <p className="text-light-text text-sm">
          This lesson lays the foundation for your journey into the world of
          user interface (UI) and user experience (UX) design. You'll learn what
          UI and UX really mean, how they work together, and why they play a
          critical role in building digital products that are both functional
          and enjoyable.
        </p>
        <h1 className="font-semibold text-xl my-4 ">What You’ll Learn:</h1>
        <ul className="list-disc pl-10 space-y-1 text-light-text text-sm">
          <li>UI fundamentals and layout systems</li>
          <li>UX research and wireframing</li>
          <li>Prototyping tools like Figma</li>
          <li>Accessibility and user testing</li>
          <li>Design handoff for developers</li>
        </ul>
        <p className="font-normal text-light-text text-sm my-4">
          Through real projects, you’ll go from user problem to clickable
          prototype with confidence.
        </p>
        <CardLinksLesson
          title="Downloadable Resources"
          links={[
            {
              title: "UI/UX Terminology Guide (PDF)",
              href: "UI/UX Terminology Guide (PDF)",
            },
            {
              title: "UI vs UX Cheat Sheet (PDF)",
              href: "UI vs UX Cheat Sheet (PDF)",
            },
          ]}
        />
        <br />
        <CardLinksLesson
          title="Join Our Community"
          links={[
            {
              title: "Join On Facebook",
              href: "Join On Facebook",
            },
            {
              title: "Join On Discord",
              href: "Join On Discord",
            },
          ]}
        />
      </div>
    </div>
  );
}
