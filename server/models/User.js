const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  rank: { type: Number, default: 0 },
});

module.exports = User = mongoose.model("User", userSchema);
