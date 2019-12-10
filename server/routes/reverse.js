var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  let token = req.query.accessToken;

  let user = {
    name: '박준영',
    ID: 'unperknown',
    password: 'asdfasdf',
    petsInfo: {
      name: '초롱이',
      age: 5,
      weight: 9
    }
  }

  console.log(token);
  res.json({ user: user });
});

module.exports = router;
