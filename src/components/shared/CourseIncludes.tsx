import type { LevelsType } from "@/types/Course";
import { BadgeCheck, Clock3, Database, Play, Volume2 } from "lucide-react";

type CourseIncludesProps = {
  Level: LevelsType;
  Video: number;
  Duration: number;
  Certificate: boolean;
  Language: string;
};

const CourseIncludes = ({
  Level,
  Video,
  Duration,
  Certificate,
  Language,
}: CourseIncludesProps) => {
  const items = [
    { label: "Level", value: Level, icon: Database },
    { label: "Video", value: Video, icon: Play, span: "Videos" },
    { label: "Duration", value: Duration, icon: Clock3, span: "Hours" },
    {
      label: "Certificate",
      value: Certificate ? "Yes" : "No",
      icon: BadgeCheck,
    },
    { label: "Language", value: Language, icon: Volume2 },
  ];

  return (
    <div className="flex flex-col gap-6 border-[1px] border-border rounded-2xl p-8 font-body text-text w-full">
      <h1 className="text-2xl font-bold">Course Includes :</h1>
      <div className="flex gap-3 flex-col">
        {items.map(({ label, value, icon: Icon, span }) => (
          <div
            key={label}
            className="flex gap-4 w-full justify-between items-center"
          >
            <h3 className="flex gap-1 justify-center items-center text-sm ">
              <Icon size={16} strokeWidth={1} color="#858A8C" />
              {label}
            </h3>
            <div className="flex gap-1 text-sm ">
              <p>{value}</p>
              <span>{span}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseIncludes;
