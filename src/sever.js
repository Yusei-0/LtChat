const express = require('express');
const morgan = require('morgan');
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});


const masterRouter = require('./apis/master.router');
const chatSocket = require('./sockets/chatSocket');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/api', masterRouter);

// Creando la conexion de sockets y usando las funciones 
// que definimos en chatSocket 
io.on("connection", (socket)=>{
    chatSocket(socket);
})


module.exports = app;