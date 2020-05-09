const mongoose = require("mongoose");

const productSchema = new Schema({
  name: String,
  description: String,
  price: String,
});

module.exports = Product = mongoose.model("Product", productSchema);
