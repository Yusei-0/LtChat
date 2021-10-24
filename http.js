const http = require('http');

http.get('http://localhost:4000/api/users/6169ec60ecf46765d56f2ac4', (res)=>{
    console.log(res.path);
})