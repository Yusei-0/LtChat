
// Create and export the socket server 
const ioServer = function(app){

    const server 	    = require('http').Server(app);
    const cors        = require("cors");
    const ioService   = require('./io.service');
    const io 		    = require('socket.io')(server, {
                                cors: {
                                    origin: "*",
                                    methods: [ "GET", "POST" ]
                                }
                            });

    // Force Socket.io to ONLY use "websockets"; No Long Polling.
    //io.set('transports', ['websocket']);
   
    ioService(io);

    return server;
}

module.exports = ioServer;