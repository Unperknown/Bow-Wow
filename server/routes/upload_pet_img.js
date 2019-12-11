const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/pet',
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single('petImage');

router.post('/', (req, res, next) => {
    upload(req, res, (err) => {
        let file = req.file;

        if (!err) {
            res.send({ imagePath : 'http://localhost:3000/' + file.path });
        }
    });
});

module.exports = router;
