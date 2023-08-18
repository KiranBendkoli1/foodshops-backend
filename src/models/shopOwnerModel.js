const mongoose = require("mongoose");

const shopOwnerSchema = mongoose.Schema({
  shopname: String,
  email: String,
  contact:String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const shopOwnerModel = mongoose.model("shop-owner", shopOwnerSchema);
module.exports = shopOwnerModel;
