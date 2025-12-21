import { useState } from "react";
import axios from "axios";
import Skeleton from "../components/Skeleton";
import { API_URL } from "../config/api";


export default function InstagramCaption() {
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("funny");
  const [niche, setNiche] = useState("travel");
  const [emoji, setEmoji] = useState("yes");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateCaption = async () => {
    const token = localStorage.getItem("token");
    if (!topic) return alert("Enter a topic");

    setLoading(true);
    try {
      const res = await axios.post(
        `${API_URL}/api/instagram/caption`,
        { topic, tone, niche, emoji },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResult(res.data.caption);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-bold mb-3">Instagram Caption Generator</h2>

        <textarea
          className="w-full border rounded-lg p-2 mb-3"
          placeholder="Enter topic (e.g. sunset travel)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-2 mb-3">
          <select
            className="border p-2 rounded-lg"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="funny">Funny</option>
            <option value="emotional">Emotional</option>
            <option value="professional">Professional</option>
          </select>

          <select
            className="border p-2 rounded-lg"
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
          >
            <option value="travel">Travel</option>
            <option value="business">Business</option>
            <option value="fitness">Fitness</option>
          </select>
        </div>

        <select
          className="w-full border p-2 rounded-lg mb-3"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
        >
          <option value="yes">Include Emojis</option>
          <option value="no">No Emojis</option>
        </select>

        <button
          onClick={generateCaption}
          className={`w-full py-3 rounded-lg text-white ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Caption"}
        </button>

        {/* Loading Skeleton */}
        {loading && (
          <div className="mt-4">
            <Skeleton lines={5} />
          </div>
        )}

        {/* Result */}
        {!loading && result && (
          <div className="mt-4">
            <textarea
              className="w-full border rounded-lg p-2"
              rows={5}
              value={result}
              readOnly
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(result);
                alert("Copied ✅");
              }}
              className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Copy Caption
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
