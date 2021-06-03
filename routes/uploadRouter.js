const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("upload");
});

router.post("/", (req, res) => {
  if (req.files) {
    const { image } = req.files;
    // const image = req.files.image
    image.mv(`downloadImg/${image.name}`, (err) => {
      // res.locals.img = { image: image.name };
      // return res.render("index", { image: image.name });
    });
  } else {
    res.render("index");
  }
});

module.exports = router;
