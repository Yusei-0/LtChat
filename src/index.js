const server = require('./sever')
const {PORT} = require('./config/config');

server.listen(Number(PORT), ()=>{
    console.log("Server on port 3000");
})

module.exports = server;