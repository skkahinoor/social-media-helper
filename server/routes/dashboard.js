const express = require("express");
const auth = require("../middlewares/auth");
const History = require("../models/History");

const router = express.Router();

/**
 * GET /api/dashboard
 * Returns stats for dashboard
 */
router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user._id;

    // TOTAL COUNTS
    const totalCaptions = await History.countDocuments({
      userId,
      type: "caption",
    });

    const totalHashtags = await History.countDocuments({
      userId,
      type: "hashtag",
    });

    // LAST 7 DAYS USAGE
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      const start = new Date(date.setHours(0, 0, 0, 0));
      const end = new Date(date.setHours(23, 59, 59, 999));

      const count = await History.countDocuments({
        userId,
        createdAt: { $gte: start, $lte: end },
      });

      last7Days.push(count);
    }

    res.json({
      totalCaptions,
      totalHashtags,
      plan: req.user.plan,
      weeklyUsage: last7Days,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Failed to load dashboard data" });
  }
});

module.exports = router;
