const BannerSec = ({
  title,
  paragraph,
  colorTitle,
}: {
  title: string;
  paragraph?: string;
  colorTitle?: string;
}) => {
  return (
    <div className=" bg-subtle-color w-full text-center flex flex-col  justify-center items-center py-16 rounded-2xl mt-4">
      <div>
        <h1 className="text-4xl md:text-5xl  font-semibold font-heading">
          {title} <span className="text-blue-500">{colorTitle}</span>
        </h1>
      </div>

      <p className="text-[14px] font-normal leading-6 mt-5 font-body opacity-70">
        {paragraph}
      </p>
    </div>
  );
};

export default BannerSec;
