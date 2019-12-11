const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const { AUTH_SUCCESS, AUTH_LOGOUT, AUTH_ERROR } = require('../action/auth');

router.get('/', (req, res) => {
  let token = req.query.accessToken;

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({ user: {}, message: AUTH_LOGOUT });
      } else {
        console.log(decoded.user);
        res.json({ user: decoded.user, message: AUTH_SUCCESS });
      }
    });
  } else {
    return res.json({ user: {}, message: AUTH_ERROR });
  }
});

module.exports = router;
