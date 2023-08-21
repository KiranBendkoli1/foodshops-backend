const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const result = dotenv.config();
const foodshopRoute = require("./routes/foodshopsRoute");
const roleRoute = require("./routes/roleRoute");
const userRoute = require("./routes/userRoute");
const shopOwnerRoute = require("./routes/shopOwnerRoute");
const userModel = require("./models/userModel");
const authRoute = require("./routes/authRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.use("/foodshops", foodshopRoute);
app.use("/roles", roleRoute);
app.use("/users", userRoute);
app.use("/shop-owner", shopOwnerRoute);
app.use("/auth", authRoute)


mongoose
  .connect(`${process.env.CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(5000, () => {
      console.log(`Node API is running on port 5000 `);
    });
  })
  .catch((error) => {
    console.log(error);
  });
