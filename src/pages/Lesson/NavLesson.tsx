import BtnBlue from "@/components/shared/Buttons/BtnBlue";
import { useNavigate, useParams } from "react-router-dom";

const NavLesson = ({ title }: { title: string }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const numId = id ? parseInt(id) : 0;
  const handleNext = () => {
    if (numId && numId <= 3) {
      navigate(`/Lesson/${numId + 1}`);
    }
  };
  const handlePrevious = () => {
    if (numId && numId >= 2) {
      navigate(`/Lesson/${numId - 1}`);
    }
  };
  return (
    <div className="flex flex-row justify-between items-center text-center bg-background-accent p-3 border-border rounded-xl mt-24 border-[1px]">
      <BtnBlue
        text="Previous"
        onClick={() => {
          handlePrevious();
        }}
      />
      <h1 className="font-semibold md:text-2xl line-clamp-1 ">{title}</h1>
      <BtnBlue
        text="Next"
        onClick={() => {
          handleNext();
        }}
      />
    </div>
  );
};

export default NavLesson;
