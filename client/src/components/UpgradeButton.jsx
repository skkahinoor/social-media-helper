import axios from "axios";

import { API_URL } from "../config/api";

export default function UpgradeButton() {
  const upgrade = async () => {
    const token = localStorage.getItem("token");

    const orderRes = await axios.post(
      `${API_URL}/api/payment/create-order`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const options = {
      key: "rzp_test_Ru31j0Ge29onCp",
      amount: orderRes.data.amount,
      currency: "INR",
      name: "Social Media Helper",
      description: "Pro Plan",
      order_id: orderRes.data.id,
      handler: async function (response) {
        await axios.post(
          `${API_URL}/api/payment/verify`,
          response,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        alert("🎉 Pro activated!");
        window.location.reload();
      },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={upgrade} style={{ padding: "12px", width: "100%" }}>
      Upgrade to Pro 🚀
    </button>
  );
}
