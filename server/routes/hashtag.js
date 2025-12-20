const express = require("express");
const router = express.Router();
const { generateHashtags } = require("../services/hashtag");
const History = require("../models/History");

router.post("/generate", async (req, res) => {
  try {
    const { keyword, niche } = req.body;

    if (!keyword) {
      return res.status(400).json({ message: "Keyword is required" });
    }

    const hashtags = await generateHashtags({ keyword, niche });

    // Save to MongoDB
    await History.create({
      tool: "instagram_hashtag",
      input: { keyword, niche },
      output: hashtags,
    });

    res.json({ hashtags });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hashtag generation failed" });
  }
});

module.exports = router;
