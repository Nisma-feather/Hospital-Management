const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  address: String,
  phone: String,
  country: String,
  idProof: String,
});

module.exports = mongoose.model("User", userSchema);
