const mongoose = require('mongoose')

const bagModelSchema = mongoose.Schema({
  name: String,
  image: String,
  changableHandles: Boolean,
  changableBottom: Boolean
})

module.exports = mongoose.model('BagModel', bagModelSchema)
