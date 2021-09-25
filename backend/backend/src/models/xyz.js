const mongoose = require("mongoose");
const validator = require("validator");

const cardSchema = new mongoose.Schema({
  name : {
    type: String,
  },
});

const xyz = new mongoose.model("xyz", cardSchema);

module.exports = xyz;
