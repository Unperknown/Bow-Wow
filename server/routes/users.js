var express = require('express');
var router = express.Router();

/* GET users listing. */

router.post('api/user.json', (req, res, next) => {
  console.log(req.body);

  next();
});

module.exports = router;
