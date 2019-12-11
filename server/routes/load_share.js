var express = require('express');
var router = express.Router();
const sharePresenter = require('../presenter/share_presenter');

router.get('/', (req, res) => {
  sharePresenter.getAll()
    .then(results => {
      return res.json({ articles: results });
    })
});

module.exports = router;
