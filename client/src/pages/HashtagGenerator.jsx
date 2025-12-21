import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../config/api";


import Skeleton from "../components/Skeleton";

export default function HashtagGenerator() {
  const [keyword, setKeyword] = useState("");
  const [niche, setNiche] = useState("travel");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateHashtags = async () => {
    const token = localStorage.getItem("token");
    if (!keyword) {
      Swal.fire({
        icon: "warning",
        title: "Required",
        text: "Enter a keyword",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${API_URL}/api/hashtag/generate`,
        { keyword, niche },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResult(res.data.hashtags);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.response?.data?.message || "Something went wrong",
        confirmButtonColor: "#3085d6",
      });
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
                Swal.fire({
                  icon: "success",
                  title: "Copied!",
                  text: "Hashtags copied to clipboard",
                  timer: 1500,
                  showConfirmButton: false,
                });
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
