const { Schema, model } = require('mongoose');

const checkSchema = new Schema(
  {
    bagModel: {
      type: Schema.Types.ObjectId,
      ref: 'BagModel',
    },
    bagColor: {
      type: Schema.Types.ObjectId,
      ref: 'BagColor',
    },
    material: {
      type: Schema.Types.ObjectId,
      ref: 'Material',
    },
    size: {
      type: Schema.Types.ObjectId,
      ref: 'BagSize',
    },
    text: {
      type: Schema.Types.ObjectId,
      ref: 'Text',
    },
    image: {
      type: Schema.Types.ObjectId,
      ref: 'Image',
    },
    numBags: Number,
    price: Number,
  },
  {
    timestamps: true,
  }
);

const check = model('Check', checkSchema);

module.exports = check;

