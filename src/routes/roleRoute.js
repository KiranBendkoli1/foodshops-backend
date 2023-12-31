const express = require("express");

const {
  getRoles,
  getRoleById,
  getRoleByEmail,
  updateRole,
  deleteRole,
  addNewRole,
} = require("../controllers/roleController");
const foodshopRoute = express.Router();

foodshopRoute.get("/", getRoles);
foodshopRoute.get("/:id", getRoleById);
foodshopRoute.get("/email/:email", getRoleByEmail);
foodshopRoute.post("/", addNewRole);
foodshopRoute.put("/:id", updateRole);
foodshopRoute.delete("/:id", deleteRole);

module.exports = foodshopRoute;
