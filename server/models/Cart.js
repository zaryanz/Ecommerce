const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  products: { type: Array, default: ["Dummy product"] },
});

module.exports = mongoose.model("Cart", CartSchema);
