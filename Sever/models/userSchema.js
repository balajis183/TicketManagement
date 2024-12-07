const mongoose = require("mongoose");

//create a schmea for user

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contact: Number,
});

// create a model for user

const User = mongoose.model("User", userSchema);

//export the model

module.exports = User;

