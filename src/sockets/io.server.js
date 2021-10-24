
// Create and export the socket server 
const ioServer = function(app){

    const server 	        = require('http').Server(app);
    const {ioController,
           onConnection}    = require('./io.controller');
    const io 		        = require('socket.io')(server)

    // Force Socket.io to ONLY use "websockets"; No Long Polling.
    //io.set('transports', ['websocket']);
   
    ioController(io);

    // Recomended for the documentation
    //io.on('connection', onConnection);

    return server;
}

module.exports = ioServer;