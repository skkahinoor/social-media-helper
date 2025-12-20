const express = require("express");
const router = express.Router();
const { generateInstagramCaption } = require("../services/openai");
const History = require("../models/History");

router.post("/caption", async (req, res) => {
  try {
    const { topic, tone, niche, emoji } = req.body;

    if (!topic) {
      return res.status(400).json({ message: "Topic is required" });
    }

    const caption = await generateInstagramCaption({
      topic,
      tone,
      niche,
      emoji,
    });

    // ✅ Save to MongoDB
    await History.create({
      tool: "instagram_caption",
      input: { topic, tone, niche, emoji },
      output: caption,
    });

    res.json({ caption });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
