const { Router } = require("express");
const bagColor = require("../models/bagColor");
const router = Router();
const BagColor = require("../models/bagColor");
const BagSize = require("../models/bagSize");
const Material = require("../models/material");

router.get("/", async (req, res) => {
  const sizesFromDB = await BagSize.find();
  const colorsFromDB = await BagColor.find();
  const materialsFromDB = await Material.find();
  // console.log("--->>>", sizesFromDB);
  const uniqueSizes = [];
  for (let i = 0; i < sizesFromDB.length; i++) {
    if (!uniqueSizes.includes(sizesFromDB[i].sizeName)) {
      uniqueSizes.push(sizesFromDB[i].sizeName);
    }
  }
  // console.log('unique-->>>', uniqueSizes);

  const uniqueColors = [];
  for (let i = 0; i < colorsFromDB.length; i++) {
    if (!uniqueColors.includes(colorsFromDB[i].color)) {
      uniqueColors.push(colorsFromDB[i].color);
    }
  }
  console.log("uniqueColors", uniqueColors);
  res.render("index", { uniqueSizes, uniqueColors, materialsFromDB });
});

router.post("/", (req, res) => {
  if (req.files) {
    console.log(req.files.image);
    const { image } = req.files;
    // const image = req.files.image
    const path =
      __dirname.replace("routes", "") + `/public/downloadImg/${image.name}`;
    image.mv(path, (err) => {
      // res.locals.img = { image: image.name };
      return res.render("index", { image: image.name });
    });
  } else {
    res.render("index");
  }
});

// router.post("/", async (req, res) => {
//   // const { color, collection, modelName } = req.body;
//   console.log(req.body);
//   // const test = await collection.find({ title: modelName, color });
//   // console.log(test);
// });
// router.get("/help", (req, res) => {
//   res.render("help");
// });

module.exports = router;
router.get("/thankyou", (req, res) => {
  res.render("done");
});
router.get("/helper", (req, res) => {
  res.render("help");
});
