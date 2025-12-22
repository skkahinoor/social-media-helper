import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import UpgradeButton from "../components/UpgradeButton";

export default function Home({ user }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${API_URL}/api/dashboard`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setStats(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-500">
        Loading dashboard…
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* HEADER */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-xl font-bold">
          👋 Welcome, {user.name}
        </h2>
        <p className="text-sm text-gray-500">{user.email}</p>

        {user.plan === "free" && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 mb-2">
              Free plan · Limited usage
            </p>
            <UpgradeButton />
          </div>
        )}

        {user.plan === "pro" && (
          <p className="mt-2 text-green-600 font-semibold">
            🌟 Pro User (Unlimited)
          </p>
        )}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Captions Generated"
          value={stats.totalCaptions}
        />
        <StatCard
          title="Hashtags Generated"
          value={stats.totalHashtags}
        />
        <StatCard
          title="Account Plan"
          value={stats.plan.toUpperCase()}
        />
      </div>

      {/* USAGE GRAPH */}
      <UsageGraph data={stats.weeklyUsage} />
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  );
}

function UsageGraph({ data }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h3 className="font-semibold mb-4">
        📈 Last 7 Days Usage
      </h3>

      <div className="flex items-end gap-3 h-40">
        {data.map((count, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className="bg-blue-500 rounded transition-all"
              style={{ height: `${count * 10 || 5}px` }}
            />
            <p className="text-xs mt-2 text-gray-500">
              {days[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
