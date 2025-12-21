import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function LoginButton({ onLogin }) {
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const res = await axios.post(
          `${API_URL}/api/auth/google`,
          { token: credentialResponse.credential }
        );

        localStorage.setItem("token", res.data.token);
        onLogin(res.data.user);
      }}
      onError={() => {
        alert("Login Failed");
      }}
    />
  );
}
