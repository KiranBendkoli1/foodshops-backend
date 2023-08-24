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
foodshopRoute.post("/", addNewUser);
foodshopRoute.put("/:id", updateUser);
foodshopRoute.delete("/:id", deleteUser);

module.exports = foodshopRoute;


