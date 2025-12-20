import { useState } from "react";
import axios from "axios";

export default function InstagramCaption({ user }) {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("funny");
  const [niche, setNiche] = useState("travel");
  const [emoji, setEmoji] = useState("yes");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const generateCaption = async () => {
    if (!topic) {
      alert("Please enter a topic");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/instagram/caption",
        { topic, tone, niche, emoji },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setResult(response.data.caption);
    } catch (err) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong");
      }
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Instagram Caption Generator</h2>

      <textarea
        placeholder="Enter your topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ width: "100%", height: "80px" }}
      />

      <label>Tone</label>
      <select value={tone} onChange={(e) => setTone(e.target.value)}>
        <option value="funny">Funny</option>
        <option value="professional">Professional</option>
        <option value="emotional">Emotional</option>
      </select>

      <label>Niche</label>
      <select value={niche} onChange={(e) => setNiche(e.target.value)}>
        <option value="travel">Travel</option>
        <option value="business">Business</option>
        <option value="fitness">Fitness</option>
      </select>

      <label>Emoji</label>
      <select value={emoji} onChange={(e) => setEmoji(e.target.value)}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <button onClick={generateCaption} style={{ marginTop: "10px" }}>
        {loading ? "Generating..." : "Generate"}
      </button>

      {result && (
        <div style={{ marginTop: "15px" }}>
          <h3>Generated Caption</h3>

          <textarea
            value={result}
            readOnly
            rows={5}
            style={{ width: "100%" }}
          />

          <button
            onClick={() => {
              navigator.clipboard.writeText(result);
              alert("Caption copied ✅");
            }}
            style={{ marginTop: "10px", width: "100%" }}
          >
            Copy Caption
          </button>
        </div>
      )}
    </div>
  );
}
