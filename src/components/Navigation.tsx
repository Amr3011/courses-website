import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black p-4 fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl text-white font-bold">
          Courses Website
        </Link>
        <div className="flex gap-6">
          <Link
            to="/"
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive("/")
                ? "bg-white text-black"
                : "text-white hover:bg-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={`px-4 py-2 rounded-md transition-colors ${
              isActive("/courses")
                ? "bg-white text-black"
                : "text-white hover:bg-gray-700"
            }`}
          >
            Courses
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
