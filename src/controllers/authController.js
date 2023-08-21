const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const shopOwnerModel = require("../models/shopOwnerModel");

const register = async (req, res) => {
  try {
    const { name, email, password, contact, userType } = req.body;
    console.log(req.body)
    if (!(name && email && password && userType)) {
      res.status(400).send("All fields are compulsory");
    }
    const userExists =
      (await userModel.findOne({ email: email })) ||
      (await shopOwnerModel.findOne({ email: email }));
    if (userExists) {
      res.status(401).send("User Already exists");
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
      { id: user._id, name: name, email: email },
      process.env.JWT_SECREAT,
      {
        expiresIn: "2h",
      }
    );

    res.status(201).json({ user: token });
  } catch (error) {}
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All data is require");
    }
    const user =
      (await userModel.findOne({ email })) ||
      (await shopOwnerModel.findOne({ email }));
    if (!user) {
      res.status(401).send("User does not exists");
    }
    if (user && (await bcrypt.compare(password, user.password))) {
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
      
      res.status(200).json({
        user: token,
      });
    } else {
      res.status(401).send("You have entered wrong password");
    }
  } catch (error) {}
};

module.exports = { register, login };
