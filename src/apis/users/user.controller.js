const userServices = require('./user.service');

var controller = {};

controller.getAllUsers = function(res){

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

    var newUser;
    userServices.setNewUser(data,(err, user)=>{
        if(err){
            console.log(err);
            res.statusCode = 404;
            res.send({
                operation : "error"
            })
        }else{
            newUser = user;
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

module.exports = controller;