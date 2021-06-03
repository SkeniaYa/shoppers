const {Schema, model} = require('mongoose')

const textSchema = new Schema({
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

const text = model('Text', textSchema);

module.exports = text;
