const userServices = require('./user.service');

var controller = {};

controller.getUsers = function(res, data){
    if(data){
    userServices.getUsersByData(data, (err, users)=>{
        if(err){
            console.log(err);
            res.statusCode = 404;
            res.send({
                operation : "error"
            })
        }else{
            res.send(users)
        }
    })
    }else{
        userServices.getAllUsers((err, users)=>{
            if(err){
                console.log(err);
                res.statusCode = 404;
                res.send({
                    operation : "error"
                })
            }else{
                res.send(users)
            }
        })
    }   
}

controller.getUserById = function(id, res){
  
    userServices.getUserById(id, (err, user)=>{
        if(err){
            console.log(err);
            res.statusCode = 404;
            res.send({
                operation : "error"
            })
        }else {
            res.send(user);
        }
    })
}

controller.setNewUser = function(data, res){

    userServices.setNewUser(data,(err, user)=>{
        if(err){
            console.log(err);
            res.statusCode = 404;
            res.send({
                operation : "error"
            })
        }else{
            console.log("User saved succesfuly");
            res.send(user);
        }
    })

}

controller.deleteUserById = function(id, res){

     userServices.deleteUserById(id, (err, user)=>{
        if(err){
            console.log(err);
            res.statusCode = 404;
            res.send({
                operation : "error"
            })
        }else {
            res.send(user);
        }
    });
}

controller.updateUserById = function(id, data, res){
    
    userServices.updateUserById(id, data, (err, user)=>{
        if(err){
            console.log(err);
            res.statusCode = 404;
            res.send({
                operation : "error"
            })
        }else {
            res.send(user);
        }
    });
    
}

controller.logIn = function (res){
    userServices.getUsersByData(data, (err, user)=>{

        if(err){
            console.log(err);
            res.statusCode = 404;
            res.send({
                operation : "error"
            })
        }else{
            if(data.username === user.username)
            {
                res.send("OK");
            }
            else{
                res.send("WRONG_PASS")
            }
        }
    })
}

module.exports = controller;