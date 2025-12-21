import { Link, useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ user }) {
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
    <nav className="bg-white dark:bg-gray-800 shadow px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        SocialTools
      </Link>

      <div className="flex items-center gap-4">
        <DarkModeToggle />

        {/* 🔐 LOGGED IN */}
        {user && (
          <>
            <Link
              to="/history"
              className="text-gray-700 dark:text-gray-200"
            >
              History
            </Link>

            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}

        {/* 🔓 NOT LOGGED IN */}
        {!user && (
          <span className="text-gray-500 text-sm">
            Login to use tools
          </span>
        )}
      </div>
    </nav>
  );
}
