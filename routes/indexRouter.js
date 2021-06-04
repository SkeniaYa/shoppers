const { Router } = require("express");
const bagColor = require("../models/bagColor");
const router = Router();
const BagColor = require("../models/bagColor");
const BagSize = require("../models/bagSize");
const Material = require("../models/material");

router.get("/", async (req, res) => {
  // console.log(11111111111);
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
  const { selectId, colorOrSize, modelName } = req.body;
  console.log("selectId--->>>", selectId);
  let foundInBagColor;
  let foundInBagSize;
  if (selectId === "selectColor") {
    foundInBagColor = await BagColor.findOne({
      title: modelName,
      color: colorOrSize,
    });
    return res.json(foundInBagColor.price);
  }
  if (selectId === "selectSize") {
    foundInBagSize = await BagSize.findOne({ bagModel: modelName });
    return res.json(foundInBagSize.price);
  }
  // if (req.body) {
  //   const { color, modelName } = req.body;
  //   console.log("modelName", modelName);
  //   console.log("color", color);
  //   const test = await BagColor.findOne({ color, title: modelName });
  //   console.log("test", test);
  //   res.json(test);
  // }
  // console.log(req.files);
  console.log(12);
  console.log("req body ====> ", req.files);
  if (req.files) {
    const { file } = req.files;
    console.log(file.name);
    const path =
      __dirname.replace("routes", "") + `/public/downloadImg/${file.name}`;
    file.mv(path, (err) => {
      res.json({ image: file.name });
    });
  }
});

router.patch("/", async (req, res) => {
  console.log("reqBody!!!!!!!!----->>>>>>", req.body);
  const foundInMaterials = await Material.findOne({
    name: req.body.materialId,
  });
  res.json(foundInMaterials.price);
});

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
