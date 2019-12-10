var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
  let reserve = {
    pickedTime: req.body.reverse.time,
    pickedDate: req.body.reverse.date
  }

  res.json({ reserve: reserve });
});

module.exports = router;
