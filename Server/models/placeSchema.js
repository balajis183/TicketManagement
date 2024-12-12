const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  placeName: String,
  placeDescription: String,
  placeAddress: String,
//   image: String,
});

const places = mongoose.model("places", placeSchema);

module.exports = places;


