const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    // Array of food data passed straight down into the template
    const foodItems = [
        { name: "Double Cheese Burger", description: "Juicy beef patty with extra cheddar cheese", price: 450 },
        { name: "Pepperoni Pizza", description: "Classic crust loaded with spicy pepperoni", price: 1200 },
        { name: "Creamy Alfredo Pasta", description: "White sauce pasta mixed with grilled chicken", price: 650 }
    ];

    // Renders views/index.ejs and sends the food data
    res.render("index", { foods: foodItems });
});

module.exports = router;