const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");

const Cart = require("../models/Cart");
const Product = require("../models/Product");

const auth = require("../middleware/auth");

/*
@@ROUTE: GET /routes/cart
@@DESC: get cart
@@ACCESS: private
*/
router.get("/", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

/*
@@ROUTE: POST /routes/cart/add
@@DESC: add product to cart
@@ACCESS: private
*/
router.post("/add", auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    console.log(cart);
    const product_name = req.body.product_name;
    console.log(product_name);
    const product = await Product.findOne({ name: product_name });
    console.log(product);
    cart.products.push(product);
    await cart.save();
    console.log("Product added to cart");
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
