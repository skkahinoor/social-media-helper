require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// app.use(cors());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://social-media-helper-gamma.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

const instagramRoutes = require("./routes/instagram");
app.use("/api/instagram", instagramRoutes);

const hashtagRoutes = require("./routes/hashtag");
app.use("/api/hashtag", hashtagRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const paymentRoutes = require("./routes/payment");
app.use("/api/payment", paymentRoutes);


app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
