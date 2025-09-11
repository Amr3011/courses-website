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
        <div
            className=" bg-[#EDF9FF] w-full text-center flex flex-col gap-5 justify-center items-center py-9 rounded-2xl mt-4 mb-7 md:mb-16">
            <div>
                <h1 className="text-3xl md:text-6xl font-sans font-bold">{title} <span
                    className="text-blue-500">{colorTitle}</span></h1>

            </div>

            <p className="text-xs md:text-lg font-sans mt-5">{paragraph}</p>
        </div>
    );
};

export default BannerSec;
