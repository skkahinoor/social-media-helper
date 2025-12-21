import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";


import Skeleton from "../components/Skeleton";

export default function HashtagGenerator() {
  const [keyword, setKeyword] = useState("");
  const [niche, setNiche] = useState("travel");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateHashtags = async () => {
    const token = localStorage.getItem("token");
    if (!keyword) return alert("Enter a keyword");

    setLoading(true);
    try {
      const res = await axios.post(
        `${API_URL}/api/hashtag/generate`,
        { keyword, niche },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResult(res.data.hashtags);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-bold mb-3">Hashtag Generator</h2>

        <input
          className="w-full border p-2 rounded-lg mb-3"
          placeholder="Enter keyword (e.g. mountain travel)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <select
          className="w-full border p-2 rounded-lg mb-3"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
        >
          <option value="travel">Travel</option>
          <option value="business">Business</option>
          <option value="fitness">Fitness</option>
        </select>

        <button
          onClick={generateHashtags}
          className="w-full bg-purple-600 text-white py-3 rounded-lg"
        >
          {loading ? "Generating..." : "Generate Hashtags"}
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
              Copy Hashtags
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
