import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { API_URL } from "../config/api";

export default function LoginButton({ onLogin }) {
  if (typeof onLogin !== "function") {
    console.error("❌ LoginButton missing onLogin prop");
    return null; // STOP rendering broken login button
  }

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        try {
          const res = await axios.post(
            `${API_URL}/api/auth/google`,
            { token: credentialResponse.credential }
          );

          localStorage.setItem("token", res.data.token);

          // 🔥 CRITICAL
          onLogin(res.data.user);
        } catch (err) {
          console.error("LOGIN FAILED:", err.response?.data || err.message);
          alert("Login failed");
        }
      }}
      onError={() => {
        alert("Google login failed");
      }}
    />
  );
}
