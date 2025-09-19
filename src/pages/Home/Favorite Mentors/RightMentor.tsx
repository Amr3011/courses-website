
const RightMentor = () => {
  return (
    <div className="right-mentor-wrapper flex-1 relative">
      <div className="overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745ae04d8457e5921ceb51_pexels-joshua-lim-2864621-22601752_enhanced%20(1)-p-1600.webp"
          alt=""
          className="rounded-3xl object-cover w-full h-full "
        />
      </div>
      <div>
        <img
          src="https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745af6ce0804310f4e5d48_pexels-zen-chung-5745170_enhanced%20(1)-p-1600.webp"
          alt=""
          className="rounded-3xl absolute top-0"
        />
      </div>
      <div>
        <img
          src="https://cdn.prod.website-files.com/681546135f34d96fc2aab532/68745b0617dc81496815e0c2_pexels-anna-nekrashevich-7550887%20(4)_enhanced%20(1)-p-1600.webp"
          alt=""
          className="rounded-3xl absolute top-0"
          style={{
            clipPath: "inset(0 0 70% 0)", // Clips the bottom 50% of the image
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default RightMentor;
