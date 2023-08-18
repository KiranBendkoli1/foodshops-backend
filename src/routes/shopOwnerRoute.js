const express = require("express");

const {
  getShopOwners,
  getShopOwnerById,
  addNewShopOwner,
  updateShopOwner,
  deleteShopOwner,
  getShopOwnerByEmail,
} = require("../controllers/shopOwnerController");
const foodshopRoute = express.Router();

foodshopRoute.get("/", getShopOwners);
foodshopRoute.get("/:id", getShopOwnerById);
foodshopRoute.get("/email/:email", getShopOwnerByEmail);
foodshopRoute.post("/", addNewShopOwner);
foodshopRoute.put("/:id", updateShopOwner);
foodshopRoute.delete("/:id", deleteShopOwner);

module.exports = foodshopRoute;
