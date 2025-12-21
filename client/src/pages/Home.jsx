import { Link, useNavigate } from "react-router-dom";
import UpgradeButton from "../components/UpgradeButton";

export default function Home({ user }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow p-4 mb-4">
          <h2 className="text-lg font-bold">👋 Welcome, {user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>

          {user.plan === "free" && (
            <div className="mt-3">
              <p className="text-sm text-gray-600 mb-2">
                Free plan · 5 requests/day
              </p>
              <UpgradeButton />
            </div>
          )}

          {user.plan === "pro" && (
            <p className="mt-2 text-green-600 font-semibold">
              🌟 Pro User (Unlimited)
            </p>
          )}

          <button
            onClick={logout}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold mb-3">🛠 Tools</h3>

          <Link to="/instagram-caption">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg mb-3">
              Instagram Caption Generator
            </button>
          </Link>

          <Link to="/hashtag-generator">
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
              Hashtag Generator
            </button>
          </Link>
        </div>
      </div>
  );
}
