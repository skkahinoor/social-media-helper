const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const auth = require("../middlewares/auth");
const User = require("../models/User");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create order
router.post("/create-order", auth, async (req, res) => {
  try {
    const options = {
      amount: 99 * 100, // ₹99
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Order creation failed" });
  }
});

// Verify payment
router.post("/verify", auth, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Payment verification failed" });
    }

    // Upgrade user to Pro
    req.user.plan = "pro";
    await req.user.save();

    res.json({ message: "Payment successful. Pro activated 🚀" });
  } catch (error) {
    res.status(500).json({ message: "Payment verification failed" });
  }
});

module.exports = router;
