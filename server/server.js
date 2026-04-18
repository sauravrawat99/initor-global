require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const contactRoutes = require("./routes/contactRoutes");
const blogRoutes = require("./routes/blogRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000" }));
app.use(express.json({ limit: "10kb" }));
app.use(morgan("dev"));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests",
});
app.use("/api", limiter);

app.use("/api/contact", contactRoutes);
app.use("/api/blogs", blogRoutes);

app.get("/api/health", (req, res) =>
  res.json({ status: "OK", timestamp: new Date() }),
);

app.use(errorHandler);
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
