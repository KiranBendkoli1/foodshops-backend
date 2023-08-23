const mongoose = require("mongoose");

const ImageDetailsSchema = new mongoose.Schema({
  image: String,
});

mongoose.model("image", ImageDetailsSchema)
