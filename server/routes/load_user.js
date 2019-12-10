var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  let token = req.query.accessToken;

  let user = {
    name: '박준영'
  }

  console.log(token);
  res.json(user);
});

module.exports = router;
