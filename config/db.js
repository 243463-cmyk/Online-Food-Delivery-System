const mongoose = require("mongoose");

const connectDB = () => {
    // 1. Grab URI from .env file, or fall back to your specific 'online_food_delivery' local path
    const dbURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/online_food_delivery";

    // 2. Establish connection using your .then() / .catch() format
    mongoose.connect(dbURI)
        .then(() => {
            console.log("MongoDB Connected Successfully");
        })
        .catch(err => {
            console.error("Database Connection Error:", err);
            process.exit(1); // Safely shuts down the process if connection fails
        });
};

module.exports = connectDB;