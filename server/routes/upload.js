const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/images' });

router.post('/', (req, res) => {
  if (req.file) {
    res.json(req.file);
  }
  else throw 'error';
});

module.exports = router;
