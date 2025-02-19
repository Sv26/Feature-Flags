require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db"); // Import MongoDB connection function
const flagRoutes = require("./routes/flags");

const app = express();

// ✅ Connect to MongoDB
connectDB();

// Middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/flags", flagRoutes);

app.get("/", (req, res) => {
  res.redirect("/flags"); // Redirect to the feature flags list
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
