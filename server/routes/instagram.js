const express = require("express");
const router = express.Router();

router.post("/caption", (req, res) => {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ message: "Topic is required" });
  }

  // Temporary response (AI later)
  res.json({
    caption: `This is an Instagram caption about "${topic}" ✨`,
  });
});

module.exports = router;
