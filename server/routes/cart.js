const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");

const Cart = require("../models/Cart");

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
router.post("/add", auth, (req, res) => {});

module.exports = router;
