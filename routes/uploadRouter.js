const { Router } = require("express");
const router = Router();
const path = require('path')

router.get("/", (req, res) => {
  res.render("upload");
});

router.post("/", (req, res) => {
  if (req.files) {
    const { image } = req.files
    const newPath = path.join(__dirname, '..', 'public', 'downloadImg', image.name)
    console.log('newPath   =>>>', newPath);
    image.mv(newPath, (err) => {
      return res.render('upload', { image: image.name })
    })
  } else {
    res.render("upload");
  }
});

module.exports = router;
