const foodshopModel = require("../models/foodshopModel");

const getFoodShops = async (req, res) => {
  try {
    const foodshops = await foodshopModel.find({});
    res.status(200).json(foodshops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getFoodShopById = async (req, res) => {
  try {
    const { id } = req.params;
    const foodshop = await foodshopModel.findById(id);
    res.status(200).json(foodshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFoodShopByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const foodshop = await foodshopModel.find({ email: email });
    res.status(200).json(foodshop[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewFoodShop = async (req, res) => {
  try {
    const foodshop = await foodshopModel.create(req.body);
    res.status(200).json(foodshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFoodShop = async (req, res) => {
  try {
    const { id } = req.params;
    const foodshop = await foodshopModel.findByIdAndUpdate(id, req.body);
    if (!foodshop) {
      return res
        .status(404)
        .json({ message: `cannot find any foodshop with ID ${id}` });
    }
    const updatedFoodshop = await foodshopModel.findById(id);
    res.status(200).send(updatedFoodshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFoodShop = async (req, res) => {
  try {
    const { id } = req.params;
    const foodshop = await foodshopModel.findByIdAndDelete(id);
    if (!foodshop) {
      return res
        .status(404)
        .json({ message: `cannot find any foodshop with ID ${id}` });
    }
    res.status(200).json(foodshop);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
