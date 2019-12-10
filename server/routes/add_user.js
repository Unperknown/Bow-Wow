var express = require('express');
var router = express.Router();

router.post('/', (req, res) => {
  let user = req.body;
  console.log(user);
  // User 정보 DB에 올리기
  res.json({ user: user });
});

module.exports = router;
