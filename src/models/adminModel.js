const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: String,
  email: String,
  password:String,
  token:String, 
  role:{
    type:String,
    default:"admin"
  }
});

const adminModel = mongoose.model("admin", adminSchema);
module.exports = adminModel;
