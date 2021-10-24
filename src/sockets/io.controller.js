const ioService = require('./io.service')

// Defintion of the events of socket server
const ioController = function(io)
{
    io.on('connection', (socket)=>{
        
        socket.on('disconnect', (req, res)=>{
            console.log("Socket disconnect");         
        })
    })
}

// Recomended for the documentation
const onConnection = (socket)=>{

    socket.on('send:Message', ioService.sayHello());
    socket.on('send:Gif', ioService.sayHello());
}

module.exports = {ioController, onConnection};