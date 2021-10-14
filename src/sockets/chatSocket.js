
// Funcion para definir las acciones del socket 
const chatSocket  = function (socket){

    socket.on("disconnect", ()=>{
        console.log("user disconnect");
    })
}

module.exports = chatSocket;