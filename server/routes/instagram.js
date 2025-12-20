const express = require("express");
const router = express.Router();

router.post("/caption", (req, res) => {
  const { topic, tone, niche, emoji } = req.body;

  if (!topic) {
    return res.status(400).json({ message: "Topic is required" });
  }

  const emojiText = emoji === "yes" ? "🔥✨" : "";

  const caption = `A ${tone} ${niche} caption about "${topic}" ${emojiText}`;

  res.json({ caption });
});

module.exports = router;
