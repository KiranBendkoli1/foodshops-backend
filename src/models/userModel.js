const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
