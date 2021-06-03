const mongoose = require('mongoose')

const materialSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String
})

module.exports = mongoose.model('Material', materialSchema)
