const { Router } = require("express");
const bagColor = require("../models/bagColor");
const router = Router();
const BagColor = require("../models/bagColor");
const BagSize = require("../models/bagSize");

router.get("/", async (req, res) => {
  const sizesFromDB = await BagSize.find();
  const colorsFromDB = await BagColor.find();
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
  res.render("index", { uniqueSizes, uniqueColors });
});

// router.get("/help", (req, res) => {
//   res.render("help");
// });

module.exports = router;
