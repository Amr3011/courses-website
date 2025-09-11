const BannerSec = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph?: string;
}) => {
  return (
    <div className=" bg-[#EDF9FF] w-full text-center flex flex-col gap-5 justify-center items-center py-9 rounded-2xl mt-4 mb-7 md:mb-16">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="text-xs md:text-sm font-sans">{paragraph}</p>
    </div>
  );
};

export default BannerSec;
