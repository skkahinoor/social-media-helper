import { Link, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-3">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-blue-600">
          SocialTools
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/history"
            className="text-sm text-gray-600 dark:text-gray-300"
          >
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
