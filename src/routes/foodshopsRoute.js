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

foodshopRoute.get("/", getFoodShops);
foodshopRoute.get("/:id", getFoodShopById);
foodshopRoute.get("/email/:email", getFoodShopByEmail);
foodshopRoute.post("/", addNewFoodShop);
foodshopRoute.put("/:id", updateFoodShop);
foodshopRoute.delete("/:id", deleteFoodShop);

module.exports = foodshopRoute;
