const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const shopOwnerModel = require("../models/shopOwnerModel");
const adminModel = require("../models/adminModel");

const register = async (req, res) => {
  try {
    const { name, email, password, contact, userType } = req.body;
    console.log(req.body);
    if (!(name && email && password && userType)) {
      res.status(200).json({
        status: "failure",
        message: "Please enter all the fields",
        data: {},
      });
    }
    const userExists =
      (await userModel.findOne({ email: email })) ||
      (await shopOwnerModel.findOne({ email: email }));
    if (userExists) {
      res.status(200).json({
        status: "failure",
        message: "User already exists",
        data: {},
      });
      return;
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    let user;
    if (userType === "regular") {
      user = await userModel.create({
        name,
        email,
        password: encryptedPassword,
      });
    } else if (userType === "shopOwner") {
      user = await shopOwnerModel.create({
        name,
        email,
        contact,
        password: encryptedPassword,
      });
    }

    const token = jwt.sign(
      { id: user._id, email: email },
      process.env.JWT_SECREAT,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    user.password = undefined;
    res.status(201).json({
      status: "success",
      message: "User Created Successfully",
      data: user,
    });
  } catch (error) {
    res.status(201).json({
      status: "failure",
      message: "Error creating user",
      data: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(200).json({
        status: "failure",
        message: "Please enter all the fields",
        data: {},
      });
    }
    const user =
      (await userModel.findOne({ email })) ||
      (await shopOwnerModel.findOne({ email })) ||
      (await adminModel.findOne({ email }));
    if (!user) {
      res.status(200).json({
        status: "failure",
        message: "User does not exist",
        data: {},
      });
    }
    if (user) {
      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) {
        res.status(200).json({
          status: "failure",
          message: "You have entered wrong password",
          data: {},
        });
      } else {
        const token = jwt.sign(
          {
            id: user._id,
            email: user.email,
          },
          process.env.JWT_SECREAT,
          {
            expiresIn: "2h",
          }
        );
        user.token = token;
        user.password = undefined;
        res.status(201).json({
          status: "success",
          message: "User Logged In Successfully",
          data: user,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login };
