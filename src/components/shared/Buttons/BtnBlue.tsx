const BtnBlue = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-primary-color md:text-xs  font-medium rounded-full p-2  border-[1px] border-primary-color hover:bg-primary-color hover:text-white transition-all duration-500"
    >
      {text}
    </button>
  );
};

export default BtnBlue;
