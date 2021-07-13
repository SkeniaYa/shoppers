const { Router } = require('express');
const bagColor = require('../models/bagColor');

const router = Router();
const BagColor = require('../models/bagColor');
const BagSize = require('../models/bagSize');
const Material = require('../models/material');

router.get('/', async (req, res) => {
  const sizesFromDB = await BagSize.find();
  const colorsFromDB = await BagColor.find();
  const materialsFromDB = await Material.find();

  const uniqueSizes = [];
  for (let i = 0; i < sizesFromDB.length; i++) {
    if (!uniqueSizes.includes(sizesFromDB[i].sizeName)) {
      uniqueSizes.push(sizesFromDB[i].sizeName);
    }
  }

  const uniqueColors = [];
  for (let i = 0; i < colorsFromDB.length; i++) {
    if (!uniqueColors.includes(colorsFromDB[i].color)) {
      uniqueColors.push(colorsFromDB[i].color);
    }
  }

  res.render('index', { uniqueSizes, uniqueColors, materialsFromDB });
});

router.post('/', async (req, res) => {
  if (req.body.selectId) {
    const { selectId, colorOrSize, modelName } = req.body;

    let foundInBagColor;
    let foundInBagSize;
    if (selectId === 'selectColor') {
      foundInBagColor = await BagColor.findOne({
        title: modelName,
        color: colorOrSize,
      });
      return res.json(foundInBagColor.price);
    }
    if (selectId === 'selectSize') {
      foundInBagSize = await BagSize.findOne({ bagModel: modelName });
      return res.json(foundInBagSize.price);
    }
  }

  if (req.body.color) {
    const { color, modelName } = req.body;

    const test = await BagColor.findOne({ color, title: modelName });

    res.json(test);
  }

  if (req.files) {
    const { file } = req.files;

    const path = `${__dirname.replace('routes', '')}/public/downloadImg/${file.name}`;
    file.mv(path, (err) => {
      res.json({ image: file.name });
    });
  }
});

router.patch('/', async (req, res) => {
  const foundInMaterials = await Material.findOne({
    name: req.body.materialId,
  });
  res.json(foundInMaterials.price);
});

router.get('/help', (req, res) => {
  res.render('help');
});

router.get('/contacts', (req, res) => {
  res.render('contacts');
});

router.get('/conditions', (req, res) => {
  res.render('conditions');
});

router.get('/thankyou', (req, res) => {
  res.render('done');
});
router.get('/helper', (req, res) => {
  res.render('help');
});
router.get('/order', (req, res) => {
  res.render('customer');
});

module.exports = router;
