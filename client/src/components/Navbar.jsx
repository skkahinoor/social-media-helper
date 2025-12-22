import { Link } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ user }) {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          SocialTools
        </Link>

        {/* DESKTOP MENU */}
        {user && (
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/instagram-caption">Caption</NavLink>
            <NavLink to="/hashtag-generator">Hashtags</NavLink>
            <NavLink to="/history">History</NavLink>

            <DarkModeToggle />

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg text-sm transition"
            >
              Logout
            </button>
          </div>
        )}

        {/* MOBILE MENU BUTTON */}
        {user && (
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* MOBILE DROPDOWN */}
      {open && user && (
        <div className="md:hidden animate-slideDown bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl px-4 pb-4 space-y-3">
          <MobileLink to="/instagram-caption" onClick={setOpen}>
            Instagram Caption
          </MobileLink>

          <MobileLink to="/hashtag-generator" onClick={setOpen}>
            Hashtag Generator
          </MobileLink>

          <MobileLink to="/history" onClick={setOpen}>
            History
          </MobileLink>

          <div className="flex items-center justify-between pt-2">
            <DarkModeToggle />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-1.5 rounded-lg text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ---------- REUSABLE COMPONENTS ---------- */

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 transition"
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={() => onClick(false)}
      className="block text-gray-700 dark:text-gray-200 font-medium py-2 border-b border-gray-200 dark:border-gray-700"
    >
      {children}
    </Link>
  );
}
