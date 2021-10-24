const express 		= require('express');
const morgan 		= require('morgan');
const app 			= express();
const cors            = require('./config/cors.config');
const masterRouter 	= require('./apis/master.router');
const server 		= require('./sockets/io.server')(app);
const config 		= require('./config/config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors);

app.use('/api', masterRouter);

module.exports = server;