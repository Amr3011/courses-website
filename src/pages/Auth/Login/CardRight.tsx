import { Link } from "react-router-dom";
import { MoveUpRight } from "lucide-react";

const CardRight = () => {
  return (
    <div className="bg-[#cae7f4] flex flex-col justify-between h-[500px] max-w-[400px] rounded-2xl overflow-hidden  p-6 relative">
      <div className="absolute top-0 right-0">
        <Link
          to="/register"
          className="flex selector items-center gap-2 bg-white  text-black p-2 rounded-bl-lg hover:bg-gray-50 transition-colors"
        >
          <span className="font-bold text-xl">Register</span>
          <MoveUpRight
            size={20}
            strokeWidth={3}
            className="hover:scale-110 hover:rotate-45 transition-transform duration-500"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <h1 className="text-heading-color font-heading text-4xl font-bold leading-tight">
          Welcome to our platform
        </h1>
        <p className="text-light-text text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <p className="text-text font-medium text-xl">
          Learning Today, Unlimited Growth with{" "}
          <span className="text-primary-color font-bold">Vintar</span>
        </p>
      </div>

      <div className="bg-white p-5 rounded-t-xl absolute bottom-0 left-1/2 w-[90%] -translate-x-1/2 border-b-[1px] border-border">
        <h2 className="text-sub-title font-bold text-2xl">
          Get your right job and right place — apply now
        </h2>
        <p className="text-light-text mt-2 text-lg">
          Be among the first founders to experience the easiest way to start and
          run a business.
        </p>
      </div>
    </div>
  );
};

export default CardRight;
