const mongoose = require("mongoose");

const foodshopSchema = mongoose.Schema({
  title: String,
  speciality: String,
  description: String,
  address: String,
  contact: String,
  key: String,
  email: String,
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [{ user: String, comment: String }],
    default: [],
  },
  liked: {
    type: [{ user: String }],
    default: [],
  },
  disliked: {
    type: [{ user: String }],
    default: [],
  },
  type: {
    type: [],
    default: [],
  },
  images: {
    type: [],
    default: [],
  },
  discounts: {
    type: [{ item: String, discount: Number }],
    default: [],
  },
  selectPosition: [],
  postedOn: {
    type: Date,
    default:Date.now
  },
});

const foodshopModel = mongoose.model("foodshop", foodshopSchema);
module.exports = foodshopModel;
