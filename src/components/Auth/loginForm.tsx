const loginForm = () => {
  return (
    <div className="bg-[#cae7f4] rounded-2xl h-[500px] p-6 max-w-[400px] w-full shadow-lg flex flex-col gap-6 mx-auto">
      <h1 className="text-heading-color font-heading text-3xl font-bold leading-tight">
        Welcome Back
      </h1>
      <p className="text-light-text text-base">Please enter your details</p>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-color bg-white text-black placeholder:text-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-color bg-white text-black placeholder:text-gray-400"
        />
        <div className="flex items-center justify-between text-sm mt-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="keepMeLoggedIn"
              className="accent-primary-color"
            />
            <span className="text-light-text">Keep me logged in</span>
          </label>
          <button
            type="button"
            className="text-primary-color hover:underline font-medium"
          >
            Forgot password?
          </button>
        </div>
        <button
          type="submit"
          className="mt-2 bg-primary-color text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Login
        </button>
      </form>
      <div className="flex gap-3 justify-center items-center mt-2">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-color">
          <img
            src="https://i.pinimg.com/736x/7d/25/a4/7d25a48ddceaf2e159616edde1c229d9.jpg"
            alt="Google"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-color">
          <img
            src="https://i.pinimg.com/736x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg"
            alt="Facebook"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-color">
          <img
            src="https://i.pinimg.com/736x/ab/96/4b/ab964bcf79cbc2d86b15a9e2efe05ffa.jpg"
            alt="Github"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default loginForm;
