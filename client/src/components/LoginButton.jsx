import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { API_URL } from "../config/api";

export default function LoginButton({ handleLogin }) {
  if (!handleLogin) {
    console.error("❌ LoginButton missing onLogin prop");
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

          // 🔥 THIS IS THE MOST IMPORTANT LINE
          handleLogin(res.data.user);
        } catch (err) {
          alert("Login failed");
          console.error(err);
        }
      }}
      onError={() => {
        alert("Google login failed");
      }}
    />
  );
}
