const { Schema, model } = require("mongoose");

const bagColorSchema = new Schema({
  title: String,
  color: String,
  image: String,
  price: Number,
});

const bagColor = model("BagColor", bagColorSchema);

module.exports = bagColor;
