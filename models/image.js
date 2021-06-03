const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
  name: String,
  area: Number,
  colors: [{
    type: Schema.Types.ObjectId,
    ref: "Color"
  }],
  area: Number
})

module.exports = mongoose.model('Image', imageSchema)
