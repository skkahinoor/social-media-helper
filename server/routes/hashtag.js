const express = require("express");
const router = express.Router();
const { generateHashtags } = require("../services/hashtag");
const History = require("../models/History");
const auth = require("../middlewares/auth");
const usageLimit = require("../middlewares/usageLimit");


router.post(
  "/generate",
  auth,
  usageLimit,
  async (req, res) => {
    try {
      const { keyword, niche } = req.body;

      const hashtags = await generateHashtags({ keyword, niche });

      await History.create({
        tool: "instagram_hashtag",
        input: { keyword, niche },
        output: hashtags,
      });

      res.json({ hashtags });
    } catch (error) {
      res.status(500).json({ message: "Failed to generate hashtags" });
    }
  }
);


module.exports = router;
