const mongoose = require("mongoose");

const shopOwnerSchema = mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  password: String,
  token:String,
  role:{
    type:String,
    default:"shopOwner"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const shopOwnerModel = mongoose.model("shop-owner", shopOwnerSchema);
module.exports = shopOwnerModel;
