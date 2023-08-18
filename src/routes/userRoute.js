const express = require("express");

const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  addNewUser,
} = require("../controllers/userController");
const foodshopRoute = express.Router();

foodshopRoute.get("/", getUsers);
foodshopRoute.get("/:id", getUserById);
foodshopRoute.post("/", updateUser);
foodshopRoute.put("/:id", deleteUser);
foodshopRoute.delete("/:id", addNewUser);

module.exports = foodshopRoute;
