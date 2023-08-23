const express = require("express");

const {
  getFoodShops,
  getFoodShopById,
  getFoodShopByEmail,
  updateFoodShop,
  deleteFoodShop,
  addNewFoodShop,
} = require("../controllers/foodshopController");
const foodshopRoute = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  },
});

const upload = multer({ storage: storage });
foodshopRoute.get("/", getFoodShops);
foodshopRoute.get("/:id", getFoodShopById);
foodshopRoute.get("/email/:email", getFoodShopByEmail);
foodshopRoute.post("/", addNewFoodShop);
foodshopRoute.put("/:id", updateFoodShop);
foodshopRoute.delete("/:id", deleteFoodShop);

module.exports = foodshopRoute;
