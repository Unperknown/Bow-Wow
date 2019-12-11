const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const { AUTH_SUCCESS, AUTH_EXPIRED, AUTH_ERROR } = require('../action/auth');

router.get('/', (req, res) => {
  let token = req.query.accessToken;

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      let current_time = new Date().getTime() / 1000;

      if (err) {
        return res.json({ message: AUTH_ERROR });
      } else if (decoded.exp < current_time) {
        res.json({ message: AUTH_EXPIRED });
      } else {
        res.json({ message: AUTH_SUCCESS });
      }
    });
  } else {
    return res.json({ message: AUTH_ERROR });
  }
});

module.exports = router;