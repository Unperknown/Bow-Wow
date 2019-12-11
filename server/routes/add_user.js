const express = require('express');
const router = express.Router();
const { USER_SUCCESS, USER_ERROR } = require('../action/user')
const userPresenter = require('../presenter/user_presenter');

router.post('/', (req, res) => {
  let user = req.body.user;

  userPresenter.create(user)
    .then(message => {
      if (message === USER_SUCCESS) {
        res.json({ user: user });
      }
      else {
        res.json({ user: {}, error: USER_ERROR });
      }
    })
    .catch(err => {
      console.log(err);
      res.json({ user: {}, error: USER_ERROR })
    });
});

module.exports = router;
