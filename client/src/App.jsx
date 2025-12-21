import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./config/api";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import InstagramCaption from "./pages/InstagramCaption";
import HashtagGenerator from "./pages/HashtagGenerator";
import LoginButton from "./components/LoginButton";
import History from "./pages/History";
import Landing from "./pages/Landing";

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Terms from "./pages/legal/Terms";
import RefundPolicy from "./pages/legal/RefundPolicy";
import Contact from "./pages/legal/Contact";
import About from "./pages/legal/About";

function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    setUser(user);
    navigate("/");
  };

  // ✅ RESTORE SESSION
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuthLoading(false);
      return;
    }

    axios
      .get(`${API_URL}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.user);
        setAuthLoading(false);
      })
      .catch(() => {
        // ❗ DO NOT REMOVE TOKEN HERE
        setAuthLoading(false);
      });
  }, []);

  // 🔒 BLOCK UI UNTIL AUTH CHECK FINISHES
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Checking session…</p>
      </div>
    );
  }

  return (
    <Layout user={user}>
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
  
        {/* 🌐 Legal Pages (Public) */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
