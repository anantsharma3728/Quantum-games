const mongoose = require("mongoose");
const validator = require("validator");

const cardSchema = new mongoose.Schema({
  name : {
    type: String,
  },
  linkToTheGame: {
    type: String,
  },
  freeOrPaid: {
    type: String,
  },
  onlineAccessOrNot: {
    type: String,
  },
  Platform: {
    type: String,
  },
  requiresDownloadOrNot: {
    type: String,
  },
  isThereaClassicalCounterpart: {
    type: String,
  },
  countryOfOrigin: {
    type: String,
  },
  Year: {
    type: Number,
  },
  hackathonIfTheGameWasBuiltAtOne: {
    type: String,
  },
});

const Card = new mongoose.model("QuantumGames", cardSchema);

module.exports = Card;
