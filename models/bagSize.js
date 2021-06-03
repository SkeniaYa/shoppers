const mongoose = require('mongoose')

const bagSizeSchema = mongoose.Schema({
  bagModel: String,
  sizeName: String, //small, medium, big, individualized
  price: Number,
  height: Number,
  width: Number,
  depth: Number,
  handleSize: Number
})

module.exports = mongoose.model('BagSize', bagSizeSchema)
