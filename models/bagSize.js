const {Schema, model} = require('mongoose')

const bagSizeSchema = new Schema({
  bagModel: String,
  sizeName: String, //small, medium, big, individualized
  price: Number,
  height: Number,
  width: Number,
  depth: Number,
  handleSize: Number
})

const bagSize = model('BagSize', bagSizeSchema);

module.exports = bagSize;
