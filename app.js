// 1. Load environment variables at the absolute top
require("dotenv").config();

const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// Initialize MongoDB Connection (Now safely using your loaded environment variables)
connectDB();

// Setup EJS Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware for Form data parsing and JSON payload translation
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets (CSS, images) out of the public folder
app.use(express.static(path.join(__dirname, "public")));

// Link app routes
const foodRoutes = require("./routes/foodRoutes"); 
app.use("/", foodRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});