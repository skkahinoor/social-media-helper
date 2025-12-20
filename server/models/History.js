const mongoose = require("mongoose");

const historySchema = new mongoose.Schema(
  {
    tool: { type: String, required: true },
    input: { type: Object, required: true },
    output: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", historySchema);
