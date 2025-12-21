import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./pages/Home";
import InstagramCaption from "./pages/InstagramCaption";
import HashtagGenerator from "./pages/HashtagGenerator";
import LoginButton from "./components/LoginButton";
import History from "./pages/History";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    setUser(user);
    navigate("/");
  };

  // 🔥 RESTORE LOGIN AFTER REFRESH
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? <Home user={user} /> : <Landing onLogin={handleLogin} />
        }
      />

      <Route
        path="/instagram-caption"
        element={
          user ? (
            <InstagramCaption user={user} />
          ) : (
            <LoginButton onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/hashtag-generator"
        element={
          user ? (
            <HashtagGenerator user={user} />
          ) : (
            <LoginButton onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/history"
        element={
          user ? <History user={user} /> : <LoginButton onLogin={handleLogin} />
        }
      />
    </Routes>
  );
}

export default App;
