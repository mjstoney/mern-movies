const mongoose = require("mongoose");

module.exports = mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Connected to mongoDB.");
});
