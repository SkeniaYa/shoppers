const {Schema, model} = require('mongoose')

const imageSchema = mongoose.Schema({
  name: String,
  area: Number,
  colors: [{
    type: Schema.Types.ObjectId,
    ref: "BagColor"
  }],
  area: Number
})

const image = model('Image', imageSchema);

module.exports = image;
