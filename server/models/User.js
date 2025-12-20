const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    googleId: String,
    plan: { type: String, default: "free" },
    dailyUsage: { type: Number, default: 0 },
    lastUsedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
