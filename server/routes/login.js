var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
  let data = {
    token: "RRRAAAANNNNNDOOOOOOMMMM",
    user: req.body.user
  };

  console.log(data);
  res.json(data);
});

module.exports = router;
