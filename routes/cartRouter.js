const Check = require('../models/check');
const { Router } = require('express');
const router = Router();

router.get('/complete-order', async (req, res) => {
  const check = await Check.findOne({}, {}, { sort: { updatedAt: -1 } })
  .populate('bagModel')
  .populate('bagColor')
  .populate('material')
  .populate('size')
  .populate('text')
  .populate('image')
  .populate({path: 'text', populate: { path: 'color' }})
  .populate({
      path: 'image', 
      late: { path: 'colors' } })
      
      res.render('customer', { check }); // ПОМЕНЯЙ НАЗВАНИЕ, КАК И ИГОРЯ!!!
    })


module.exports = router;
