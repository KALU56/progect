const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, "your-secret-key", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = decoded;  // Store decoded user data in the request object
    next();
  });
};

// Apply this middleware to protected routes
app.use("/api/protected", verifyToken, (req, res) => {
  res.send("This is a protected route!");
});
