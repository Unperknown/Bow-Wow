const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const generateTokenRouter = require('./routes/create_token');
const checkTokenRouter = require('./routes/check_token');

const addUserRouter = require('./routes/add_user');
const loadUserRouter = require('./routes/load_user');

const addShareRouter = require('./routes/add_share');
const loadShareRouter = require('./routes/load_share');
const updateLikesRouter = require('./routes/update_likes');

const proceedReserveRouter = require('./routes/reverse');

const uploadUserImageRouter = require('./routes/upload_user_img');
const uploadPetImageRouter = require('./routes/upload_pet_img');
const uploadShareImageRouter = require('./routes/upload_share_img');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(cors());

app.use('/api/token/generate', generateTokenRouter);
app.use('/api/token/check', checkTokenRouter);

app.use('/api/user/add', addUserRouter);
app.use('/api/user/get', loadUserRouter);

app.use('/api/share/add', addShareRouter);
app.use('/api/share/load', loadShareRouter);
app.use('/api/share/liked', updateLikesRouter);

app.use('/api/reverse/proceed', proceedReserveRouter);

app.use('/api/upload/user', uploadUserImageRouter);
app.use('/api/upload/pet', uploadPetImageRouter);
app.use('/api/upload/share', uploadShareImageRouter);

module.exports = app;
