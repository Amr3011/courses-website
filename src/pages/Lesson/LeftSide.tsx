import Chapter from "@/components/shared/Chapter";
import { useStore } from "@/store/store";

const LeftSide = () => {
  const data = useStore((state) => state.Chapters);

  return (
    <div className="col-span-2 ">
      <div>
        <h1 className="bg-background-accent mt-24  border-[1px] font-semibold text-2xl text-center p-3 border-border rounded-xl">
          Lesson List
        </h1>
        <ul>
          {data.map((ch, idx) => {
            return (
              <li key={ch.title + idx}>
                <Chapter
                  Number_Of_lessons={ch.Number_Of_lessons}
                  Time_Of_lessons={ch.Time_Of_lessons}
                  lessons={ch.lessons}
                  title={ch.title}
                  withButton
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
