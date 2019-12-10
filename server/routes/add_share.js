var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
  let share = {
     username: req.body.username,
     images: [],
     written: req.body.written
  }

  res.json({ share: share });
});

module.exports = router;
