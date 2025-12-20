import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InstagramCaption from "./pages/InstagramCaption";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instagram-caption" element={<InstagramCaption />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
