
// Create and export the socket server 
const ioServer = function(app){

    const server 	        = require('http').Server(app);
    const cors              = require("cors");
    const {ioController,
           onConnection}    = require('./io.controller');
    const io 		        = require('socket.io')(server, {
                                cors: {
                                    origin: "*",
                                    methods: [ "GET", "POST" ]
                                }
                            });

    // Force Socket.io to ONLY use "websockets"; No Long Polling.
    //io.set('transports', ['websocket']);
   
    ioController(io);

    // Recomended for the documentation
    //io.on('connection', onConnection);

    return server;
}

module.exports = ioServer;