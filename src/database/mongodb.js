const mongoose = require("mongoose")

const connection =  mongoose.connect(`${process.env.CONNECTION_STRING}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

module.exports = connection;
