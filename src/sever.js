const express = require('express');
const morgan = require('morgan');
const masterRouter = require('./apis/master.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/api', masterRouter);


module.exports = app;