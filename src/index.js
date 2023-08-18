const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const result = dotenv.config();
const foodshopRoute = require("./routes/foodshopsRoute");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.use("/foodshops", foodshopRoute);

mongoose
  .connect(`${process.env.CONNECTION_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(3000, () => {
      console.log(`Node API is running on port   3000 `);
    });
  })
  .catch((error) => {
    console.log(error);
  });
