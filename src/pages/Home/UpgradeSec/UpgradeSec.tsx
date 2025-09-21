const UpgradeSec = () => {
  return (
    <div className="container my-28">
      <div className="group bg-[#093E74] rounded-xl ">
        <div className="p-5 flex gap-6">
          <div className="flex flex-col gap-10 justify-center items-left w-1/2 group-hover:w-[60%] transition-all duration-700 bg-white  rounded-xl ">
            <div className="p-16 flex flex-col gap-9  w-[550px]">
              <p className="text-base"> Get STarted</p>
              <h1 className="text-4xl font-bold">
                Upgrade Your Skills, Build Your Future
              </h1>
              <button className="w-1/2 bg-primary-color rounded-full text-white px-4 py-2">
                Learning Now
              </button>
            </div>
          </div>
          <div className="w-1/2 group-hover:w-[40%] transition-all duration-700 rounded-xl">
            <img
              src="https://cdn.prod.website-files.com/67fdceadc4bf2fac05c7defb/687457c618b1ad391110f95f_pexels-olly-3769021-p-1600.webp"
              alt=""
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeSec;
