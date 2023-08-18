const shopOwnerModel = require("../models/shopOwnerModel");

const getShopOwners = async (req, res) => {
  try {
    const shopOwners = await shopOwnerModel.find({});
    res.status(200).json(shopOwners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getShopOwnerById = async (req, res) => {
  try {
    const { id } = req.params;
    const shopOwner = await shopOwnerModel.findById(id);
    res.status(200).json(shopOwner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getShopOwnerByEmail = async (req,res)=>{
  try {
    const {email} = req.params;
    const shopOwner = await shopOwnerModel.find({email:email});
    res.status(200).json(shopOwner[0])
  } catch (error) {
    
  }
}
const addNewShopOwner = async (req, res) => {
  try {
    const shopOwner = await shopOwnerModel.create(req.body);
    res.status(200).json(shopOwner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateShopOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const shopOwner = await shopOwnerModel.findByIdAndUpdate(id, req.body);
    if (!shopOwner) {
      return res
        .status(404)
        .json({ message: `cannot find any shopOwner with ID ${id}` });
    }
    const updatedShopOwner = await shopOwnerModel.findById(id);
    res.status(200).send(updatedShopOwner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteShopOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const shopOwner = await shopOwnerModel.findByIdAndDelete(id);
    if (!shopOwner) {
      return res
        .status(404)
        .json({ message: `cannot find any shopOwner with ID ${id}` });
    }
    res.status(200).json(shopOwner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getShopOwners,
  getShopOwnerById,
  updateShopOwner,
  deleteShopOwner,
  addNewShopOwner,
  getShopOwnerByEmail
};
