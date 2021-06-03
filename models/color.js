const mongoose = require('mongoose')

const colorSchema = mongoose.Schema({
  name: String,
  price: Number
})

module.exports = mongoose.model('Color', colorSchema)
