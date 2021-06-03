const mongoose = require('mongoose')

const bagColorSchema = mongoose.Schema({
  title: String, 
  color: String,
  image: String,
  price: Number
})

module.exports = mongoose.model('BagColor', bagColorSchema)
