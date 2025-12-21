import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Swal from "sweetalert2";
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
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: err.response?.data?.message || "Login failed. Please try again.",
            confirmButtonColor: "#3085d6",
          });
        }
      }}
      onError={() => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Google login failed. Please try again.",
          confirmButtonColor: "#3085d6",
        });
      }}
    />
  );
}
