const mongoose = require('mongoose')

const textSchema = mongoose.Schema({
  name: String,
  font: String,
  bold: Boolean,
  italic: Boolean,
  color: {
    type: Schema.Types.ObjectId,
    ref: "Color"
  },
  area: Number
})

module.exports = mongoose.model('Text', textSchema)
