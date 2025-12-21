import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

import { API_URL } from "../config/api";


export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${API_URL}/api/user/history`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setHistory(res.data))
      .catch(() => {});
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          History
        </h2>

        {history.length === 0 && (
          <p className="text-gray-500">No history yet.</p>
        )}

        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-gray-800 p-3 rounded shadow"
            >
              <p className="text-sm text-gray-500">
                {item.tool.replace("_", " ")}
              </p>
              <pre className="text-sm whitespace-pre-wrap text-gray-800 dark:text-gray-200">
                {item.output}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
