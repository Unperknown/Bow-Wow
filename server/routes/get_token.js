const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const userPresenter = require('../presenter/user_presenter');
const { AUTH_SUCCESS, AUTH_ERROR } = require('../action/auth');

router.post('/', (req, res) => {
  let mockedUser = req.body.user
  userPresenter.validate(mockedUser)
    .then(user => {
      if (user === null) {
        return res.json({ token: '', message: AUTH_ERROR });
      } else {
        let token = jwt.sign({ user: user }, config.secret, { expiresIn: '1m' });
        return res.json({ token: token, message: AUTH_SUCCESS });
      }
    })
    .catch(err => {
      console.log(err);
      return res.json({ token: '', message: AUTH_ERROR });
    });
});

module.exports = router;
