const { Router } = require("express");
const router = Router();
const Product = require("../models/Product");

/*
@@ROUTE: GET /routes/products
@@DESC: get all products
@@ACCESS: public
*/
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

module.exports = router;
