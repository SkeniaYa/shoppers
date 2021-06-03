const { Schema, model } = require("mongoose");

const materialSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

const material = model("Material", materialSchema);

module.exports = material;
