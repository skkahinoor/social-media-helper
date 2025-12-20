import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import InstagramCaption from "./pages/InstagramCaption";
import HashtagGenerator from "./pages/HashtagGenerator";
import LoginButton from "./components/LoginButton";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    setUser(user);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? <Home user={user} /> : <LoginButton onLogin={handleLogin} />
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
    </Routes>
  );
}

export default App;
