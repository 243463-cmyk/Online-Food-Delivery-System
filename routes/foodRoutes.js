const express = require("express");
const router = express.Router();
const Cart = require("../model/Cart");

// 1. Home Page Route (Passes dummy catalog items to index.ejs)
router.get("/", (req, res) => {
    const foodItems = [
        { name: "Double Cheese Burger", description: "Juicy beef patty with extra cheddar cheese", price: 450 },
        { name: "Pepperoni Pizza", description: "Classic crust loaded with spicy pepperoni", price: 1200 },
        { name: "Creamy Alfredo Pasta", description: "White sauce pasta mixed with grilled chicken", price: 650 }
    ];
    res.render("index", { foods: foodItems });
});

// 2. Add to Cart API endpoint (Intercepts button clicks and writes into MongoDB)
router.post("/api/cart", async (req, res) => {
    try {
        const { name, price } = req.body;

        const newCartItem = new Cart({
            name: name,
            price: parseInt(price)
        });

        await newCartItem.save();
        res.status(201).json({ success: true, message: "Item successfully stored into MongoDB!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// 3. Cart View Route (Fetches true database collections dynamically)
router.get("/cart", async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.render("cart", { cartItems: cartItems });
    } catch (error) {
        res.status(500).send("Error compiling cart data: " + error.message);
    }
});

// 4. Orders History View Route
router.get("/orders", (req, res) => {
    const orderHistory = [
        { id: "ORD9823", date: "12-06-2026", total: 1650, status: "Delivered" },
        { id: "ORD4412", date: "10-06-2026", total: 450, status: "Delivered" }
    ];
    res.render("orders", { orders: orderHistory });
});

module.exports = router;