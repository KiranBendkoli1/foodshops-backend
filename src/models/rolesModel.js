const mongoose = require("mongoose");

const roleSchema = mongoose.Schema({
  role: String,
  email: String,
});

const roleModel = mongoose.model("role", roleSchema);
module.exports = roleModel;
