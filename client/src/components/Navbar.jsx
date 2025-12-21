import { Link, useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600 dark:text-gray-300";

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-blue-600">
          SocialTools
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/history" className={linkClass("/history")}>
            History
          </Link>

          <DarkModeToggle />

          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
