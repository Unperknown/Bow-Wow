const express = require('express');
const router = express.Router();
const { SHARE_SUCCESS, SHARE_ERROR } = require('../action/share');
const sharePresenter = require('../presenter/share_presenter');

router.post('/', (req, res) => {
  let share = req.body.share;

  sharePresenter.create(share)
    .then(message => {
      if (message === SHARE_SUCCESS) {
        return res.json({ share: share });
      }

      return res.json({ share: {}, error: SHARE_ERROR });
    })
    .catch(err => {
      console.log(err);
      return res.json({ share: {}, error: err });
    })
});

module.exports = router;
