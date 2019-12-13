const express = require('express');
const router = express.Router();
const sharePresenter = require('../presenter/share_presenter');

router.post('/', (req, res) => {
  let mockedShare = req.body.share;

  sharePresenter.updateValue(mockedShare)
    .then(message => {
      console.log(message);
      return res.json({ message: message });
    })
    .catch(err => {
      console.log(err);
      return res.json({ message: err });
    })
});

module.exports = router;
