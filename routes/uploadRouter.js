const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("upload");
});


router.post('/', (req, res) => {
  const {image} = req.files
  image.mv(`/Elbrus-Bootcamp/Ivan/phase2/second-week/shoppers/public/downloadImg/${image.name}`, (err) => {
    res.render('upload', {image: image.name} )
  })
  console.log(req.files.image.name); 
  console.log(__dirname)
});

module.exports = router;
