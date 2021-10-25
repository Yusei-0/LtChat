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

controller.logIn = function (res, data){

    userServices.getUsersByData({username : data.username}, (err, user)=>{
        
        console.log(data);
        
        if(err){
            console.log("Error");
            res.statusCode = 404;
            res.send({
                operation : "error"
            })
        }else{
            if(user[0]){
            if(data.password == user[0].password)
            {
                console.log(user);
                res.send({
                    operation : "OK"
                });
            }
            else{
                console.log(user);
                res.send({
                    operation : "WRONG_PASS"
                })
            }
        }
        else{
            res.send({
                operation : "NO_USER"
            });
        }

    }
    })

}

module.exports = controller;