const foodshopModel = require("../models/foodshopModel");

const getFoodShops = async (req, res) => {
  try {
    const foodshops = await foodshopModel.find({});
    res.status(200).json({
      status: "success",
      message: "data fetched successfully",
      data: foodshops,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: error.message, data: {} });
  }
};
const getFoodShopById = async (req, res) => {
  try {
    const { id } = req.params;
    const foodshop = await foodshopModel.findById(id);
    res.status(200).json({
      status: "success",
      message: "data fetched successfully",
      data: foodshop,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: error.message, data: {} });
  }
};

const getFoodShopByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const foodshop = await foodshopModel.findOne({ email: email });
    res.status(200).json({
      status: "success",
      message: "data fetched successfully",
      data: foodshop,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: error.message, data: {} });
  }
};

const addNewFoodShop = async (req, res) => {
  try {
    const foodshop = await foodshopModel.create(req.body);
    res.status(200).json({
      status: "success",
      message: "Food shop details added successfully",
      data: foodshop,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: error.message, data: {} });
  }
};

const updateFoodShop = async (req, res) => {
  try {
    const { id } = req.params;
    const foodshop = await foodshopModel.findByIdAndUpdate(id, req.body);
    if (!foodshop) {
      return res.status(404).json({
        status: "failure",
        message: `cannot find any foodshop with ID ${id}`,
        data: {},
      });
    }
    const updatedFoodshop = await foodshopModel.findById(id);
    res.status(200).json({
      status: "success",
      message: "foodshop details updated successfully",
      data: updatedFoodshop,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: error.message, data: {} });
  }
};

const deleteFoodShop = async (req, res) => {
  try {
    const { id } = req.params;
    const foodshop = await foodshopModel.findByIdAndDelete(id);
    if (!foodshop) {
      return res.status(404).json({
        status: "failure",
        message: `cannot find any foodshop with ID ${id}`,
        data: {},
      });
    }
    res.status(200).json({
      status: "success",
      message: "food shop successfully",
      data: foodshop,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failure", message: error.message, data: {} });
  }
};

module.exports = {
  getFoodShops,
  getFoodShopById,
  getFoodShopByEmail,
  updateFoodShop,
  deleteFoodShop,
  addNewFoodShop,
};
