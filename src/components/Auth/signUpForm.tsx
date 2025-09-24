const signUpForm = () => {
  return (
    <div className="bg-white rounded-2xl p-8 max-w-[400px] w-full shadow-lg flex flex-col gap-6 mx-auto">
      <h1 className="text-black text-3xl font-bold leading-tight">Sign Up</h1>
      <p className="text-black text-base">
        Sign up to access your courses and learning tools.
      </p>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-black font-bold text-sm">Name</label>
          <input
            title="Name"
            type="text"
            placeholder=""
            className="px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black font-bold text-sm">Email</label>
          <input
            title="Email"
            type="email"
            placeholder=""
            className="px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-black font-bold text-sm">Password</label>
          <input
            title="Password"
            type="password"
            placeholder=""
            className="px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
          />
        </div>
        <button
          type="submit"
          className="px-3 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center text-sm">
        <span className="text-black">Already have an account? </span>
        <a href="/login" className="text-blue-600 hover:underline font-medium">
          Login
        </a>
      </div>
    </div>
  );
};

export default signUpForm;
