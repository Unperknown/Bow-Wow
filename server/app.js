const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const TokenRouter = require('./routes/get_token');
const addUserRouter = require('./routes/add_user');
const loadUserRouter = require('./routes/load_user');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use('/api/token/get', TokenRouter);
app.use('/api/user/add', addUserRouter);
app.use('/api/user/load', loadUserRouter);

module.exports = app;
