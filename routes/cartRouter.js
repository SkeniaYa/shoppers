const Check = require("../models/check");
const { Router } = require("express");
const mail = require('../mails/mailer')
const router = Router();

router.post("/thankyou", async (req, res) => {
  const { name, lastName, email, phone, adres } = req.body;
  // console.log(req.body, "hiii")
  mail(name, lastName, email, phone, adres).catch(console.error);
  res.render('done');
  // res.render("customer");
});

module.exports = router;
