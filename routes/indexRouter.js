const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

// router.get("/help", (req, res) => {
//   res.render("help");
// });

module.exports = router;
