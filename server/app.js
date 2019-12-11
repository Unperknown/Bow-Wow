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
const proceedReserveRouter = require('./routes/reverse');
const uploadRouter = require('./routes/upload');

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
app.use('/api/reverse/proceed', proceedReserveRouter);
app.use('/api/upload/share', uploadRouter);

module.exports = app;
