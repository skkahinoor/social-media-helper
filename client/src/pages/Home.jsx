import { Link, useNavigate } from "react-router-dom";
import UpgradeButton from "../components/UpgradeButton";

export default function Home({ user }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/"); // redirect to login
    window.location.reload(); // reset state
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Welcome {user.name}</h2>

      {user.plan === "free" && <UpgradeButton />}
      {user.plan === "pro" && <p>🌟 You are a Pro user</p>}

      <button
        onClick={logout}
        style={{
          marginBottom: "15px",
          padding: "8px 12px",
          background: "#ff4d4d",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      <h2>Select a Tool</h2>

      <Link to="/instagram-caption">
        <button style={{ width: "100%", marginBottom: "10px" }}>
          Instagram Caption Generator
        </button>
      </Link>

      <Link to="/hashtag-generator">
        <button style={{ width: "100%" }}>
          Hashtag Generator
        </button>
      </Link>
    </div>
  );
}
