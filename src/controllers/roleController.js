const roleModel = require("../models/roleModel");

const getRoles = async (req, res) => {
  try {
    const roles = await roleModel.find({});
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await roleModel.findById(id);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewRole = async (req, res) => {
  try {
    const role = await roleModel.create(req.body);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await roleModel.findByIdAndUpdate(id, req.body);
    if (!role) {
      return res
        .status(404)
        .json({ message: `cannot find any role with ID ${id}` });
    }
    const updatedRole = await roleModel.findById(id);
    res.status(200).send(updatedRole);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await roleModel.findByIdAndDelete(id);
    if (!role) {
      return res
        .status(404)
        .json({ message: `cannot find any role with ID ${id}` });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRoles,
  getRoleById,
  updateRole,
  deleteRole,
  addNewRole,
};
