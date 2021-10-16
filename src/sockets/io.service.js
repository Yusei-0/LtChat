
// Defintion of the events of socket server
const ioServices = function(io)
{
    io.on('connection', (socket)=>{
        
        socket.on('disconnect', (req, res)=>{
            console.log("Socket disconnect");         
        })
    })
}
module.exports = ioServices;