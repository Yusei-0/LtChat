const userServices = require('./user.service');

const controller = {}

controller.getAllUsers = function(){
     return userServices.sayHello();
}

controller.getUserById = function(id){
   return userServices.sayHello();
}

controller.setNewUser = function(user){
    return userServices.sayHello();
}

controller.deleteUserById = function(id){
    return userServices.sayHello();
}

controller.updateUserById = function(id, user){
    return userServices.sayHello();
}

module.exports = controller;