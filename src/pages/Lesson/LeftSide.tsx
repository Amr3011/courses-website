import Chapter from "@/components/shared/Chapter";
import { useStore } from "@/store/store";

const LeftSide = () => {
  const data = useStore((state) => state.Chapter);

  return (
    <div className="col-span-2 ">
      <div>
        <Chapter
          Number_Of_lessons={data.Number_Of_lessons}
          Time_Of_lessons={data.Time_Of_lessons}
          lessons={data.lessons}
          title={data.title}
          withButton
        />
        <Chapter
          Number_Of_lessons={data.Number_Of_lessons}
          Time_Of_lessons={data.Time_Of_lessons}
          lessons={data.lessons}
          title={data.title}
          withButton
        />
        <Chapter
          Number_Of_lessons={data.Number_Of_lessons}
          Time_Of_lessons={data.Time_Of_lessons}
          lessons={data.lessons}
          title={data.title}
          withButton
        />
        <Chapter
          Number_Of_lessons={data.Number_Of_lessons}
          Time_Of_lessons={data.Time_Of_lessons}
          lessons={data.lessons}
          title={data.title}
          withButton
        />
      </div>
    </div>
  );
};

export default LeftSide;
