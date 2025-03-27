const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();

// CORS Configuration (Allowing local development URLs)
const allowedOrigins = [
  'http://localhost:19006',  // React web app (for Expo or other web testing)
  'exp://192.168.*.*:19000', // Expo mobile app (for local device testing)
  'http://localhost:5000',   // Local backend URL (if frontend is running on a different port)
];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) { // Allows requests with no origin (e.g., mobile apps)
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
