const {Schema, model} = require('mongoose')

const materialSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String
})


const material = model('Material', materialSchema);

module.exports = material;
