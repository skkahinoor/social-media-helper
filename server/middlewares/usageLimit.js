module.exports = function (req, res, next) {
    const user = req.user;
  
    // Pro users = unlimited
    if (user.plan === "pro") {
      return next();
    }
  
    const today = new Date().toDateString();
    const lastUsed = user.lastUsedAt
      ? new Date(user.lastUsedAt).toDateString()
      : null;
  
    // Reset usage if new day
    if (today !== lastUsed) {
      user.dailyUsage = 0;
    }
  
    if (user.dailyUsage >= 5) {
      return res.status(403).json({
        message: "Daily limit reached. Upgrade to Pro 🚀",
      });
    }
  
    user.dailyUsage += 1;
    user.lastUsedAt = new Date();
    user.save();
  
    next();
  };
  