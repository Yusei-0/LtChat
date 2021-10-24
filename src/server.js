const express 		= require('express');
const morgan 		= require('morgan');
const app 			= express();

const masterRouter 	= require('./apis/master.router');
const server 		= require('./sockets/io.server')(app);
const config 		= require('./config/config');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// Config cors and headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', masterRouter);

module.exports = server;