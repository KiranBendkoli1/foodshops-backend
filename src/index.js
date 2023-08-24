const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

const result = dotenv.config();
const foodshopRoute = require("./routes/foodshopsRoute");
const roleRoute = require("./routes/roleRoute");
const userRoute = require("./routes/userRoute");
const shopOwnerRoute = require("./routes/shopOwnerRoute");
const authRoute = require("./routes/authRoute");
const adminModel = require("./models/adminModel");
const connection = require("./database/mongodb");
const app = express();
app.use(cors());
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.use("/foodshops", foodshopRoute);
app.use("/roles", roleRoute);
app.use("/users", userRoute);
app.use("/shop-owner", shopOwnerRoute);
app.use("/auth", authRoute);

if (connection) {
  console.log("Connected to mongodb");
  app.listen(5000, () => {
    console.log(`Node API is running on port 5000 `);
  });
} else {
  console.log("Error connection database");
}
// )
// .catch((error) => {
//   console.log(error);
// });

// app.post("/admin", async (req, res) => {
//   const { name, email, password } = req.body;
//   if (!(name && email && password)) {
//     res.send("all fields required");
//   } else {
//     const encryptedPassword = await bcrypt.hash(password, 10);
//     const admin = await adminModel.create({
//       name,
//       email,
//       password: encryptedPassword,
//     });
//     res.status(201).json(admin);
//   }
// });
