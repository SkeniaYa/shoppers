const {Schema, model} = require('mongoose')

const bagModelSchema = mongoose.Schema({
  name: String,
  image: String,
  changableHandles: Boolean,
  changableBottom: Boolean
})


const BagModel = model('BagModel', bagModelSchema);

module.exports = BagModel;

