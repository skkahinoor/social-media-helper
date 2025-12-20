import { useState } from "react";
import axios from "axios";

export default function HashtagGenerator({ user }) {
  const [keyword, setKeyword] = useState("");
  const [niche, setNiche] = useState("travel");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateHashtags = async () => {
    if (!keyword) {
      alert("Enter a keyword");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/hashtag/generate",
        { keyword, niche },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      setResult(res.data.hashtags);
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Instagram Hashtag Generator</h2>

      <input
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <select value={niche} onChange={(e) => setNiche(e.target.value)}>
        <option value="travel">Travel</option>
        <option value="business">Business</option>
        <option value="fitness">Fitness</option>
      </select>

      <button onClick={generateHashtags}>
        {loading ? "Generating..." : "Generate Hashtags"}
      </button>

      {result && (
  <div style={{ marginTop: "15px" }}>
    <h3>Hashtags</h3>

    <textarea
      value={result}
      readOnly
      rows={6}
      style={{ width: "100%" }}
    />

    <button
      onClick={() => {
        navigator.clipboard.writeText(result);
        alert("Hashtags copied ✅");
      }}
      style={{ marginTop: "10px", width: "100%" }}
    >
      Copy Hashtags
    </button>
  </div>
)}

    </div>
  );
}
