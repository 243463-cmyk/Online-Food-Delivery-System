const express = require("express");
const path = require("path");

// FIXED: Removed the old parent directory name from the path
const connectDB = require("./config/db");
const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Explicitly sets the views directory

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// FIXED: Ensure your path points to your internal routes folder cleanly
const foodRoutes = require("./routes/foodRoutes"); 
app.use("/", foodRoutes);

app.listen(3000, () => {
    console.log("Server Running On Port 3000");
});