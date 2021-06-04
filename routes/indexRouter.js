const { Router } = require("express");
const bagColor = require("../models/bagColor");
const router = Router();
const BagColor = require("../models/bagColor");
const BagSize = require("../models/bagSize");
const Material = require("../models/material");

router.get("/", async (req, res) => {
  console.log("req.files--->>>", req.files);
  const sizesFromDB = await BagSize.find();
  const colorsFromDB = await BagColor.find();
  const materialsFromDB = await Material.find();
  // console.log("material image--->>>", materialsFromDB);
  const uniqueSizes = [];
  for (let i = 0; i < sizesFromDB.length; i++) {
    if (!uniqueSizes.includes(sizesFromDB[i].sizeName)) {
      uniqueSizes.push(sizesFromDB[i].sizeName);
    }
  }
  // console.log("unique-->>>", uniqueSizes);
  const uniqueColors = [];
  for (let i = 0; i < colorsFromDB.length; i++) {
    if (!uniqueColors.includes(colorsFromDB[i].color)) {
      uniqueColors.push(colorsFromDB[i].color);
    }
  }
  // console.log("uniqueColors", uniqueColors);
  res.render("index", { uniqueSizes, uniqueColors, materialsFromDB });
});

router.post("/", async (req, res) => {
  console.log("req.body--->>>", req.body);
  const { color, modelName, selectId, size } = req.body;
  console.log("selectId--->>>", selectId);
  let foundInBagColor;
  let foundInBagSize;
  if (selectId === "selectColor") {
    foundInBagColor = await BagColor.findOne({ title: modelName, color });
  }
  if (selectId === "selectSize") {
    foundInBagSize = await BagSize.findOne({ bagModel: modelName });
  }
  // const data = {
  //   sizePrice: foundInBagSize.price,
  // };
  // console.log(data);
  console.log("selectId--->>>", selectId);

  console.log("test--->>>", foundInBagSize.price);
  console.log("foundInBagColor--->>>", foundInBagColor);
  res.json(foundInBagColor);

  if (req.files) {
    const { image } = req.files;
    const path =
      __dirname.replace("routes", "") + `/public/downloadImg/${image.name}`;
    image.mv(path, (err) => {
      return res.render("index", { image: image.name });
    });
  } else {
    return res.render("index");
  }
});

// router.post("/", async (req, res) => {
//   const { color, collection, modelName } = req.body;
//   console.log('req.body--->>>', req.body);
//   // console.log(req.body);
//   const test = await collection.find({ title: modelName, color });
//   // console.log(test);
// });

router.get("/help", (req, res) => {
  res.render("help");
});

router.get("/thankyou", (req, res) => {
  res.render("done");
});
router.get("/helper", (req, res) => {
  res.render("help");
});
router.get("/order", (req, res) => {
  res.render("customer");
});

module.exports = router;
