const express = require("express");
const router = express.Router();
const { generateInstagramCaption } = require("../services/openai");
const History = require("../models/History");
const auth = require("../middlewares/auth");
const usageLimit = require("../middlewares/usageLimit");


router.post(
  "/caption",
  auth,
  usageLimit,
  async (req, res) => {
    try {
      const { topic, tone, niche, emoji } = req.body;

      const caption = await generateInstagramCaption({
        topic,
        tone,
        niche,
        emoji,
      });

      await History.create({
        tool: "instagram_caption",
        input: { topic, tone, niche, emoji },
        output: caption,
      });

      res.json({ caption });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);


module.exports = router;
