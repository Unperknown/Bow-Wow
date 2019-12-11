const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/share',
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 3000000 },
}).array('images', 3);

router.post('/', (req, res, next) => {
    upload(req, res, (err) => {
        let files = req.files;
        let retSrc = []

        for (let i in files) {
            let src = {};
            src['src'] = 'http://localhost:3000/' + files[i].path;
            retSrc.push(src);
        }

        if (!err) {
            res.send({ imagePaths: retSrc });
        }
    });
});

module.exports = router;
