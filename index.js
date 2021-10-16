const server = require('./src/server')
const {PORT,HOST,} = require('./src/config/config');

server.listen(Number(PORT), ()=>{
    console.log(`Server was be initialized on http://${HOST}:${PORT}`);
})

module.exports = server;