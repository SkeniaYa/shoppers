const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("upload");
});


router.post('/', (req, res) => {
  if (req.files) {
    const {image} = req.files
    // const image = req.files.image
    image.mv(`/Elbrus-Bootcamp/Ivan/phase2/second-week/shoppers/public/downloadImg/${image.name}`, (err) => {
     return res.render('upload', {image: image.name} )
    })
  } else{
    res.render("upload");
  }
});

module.exports = router;
