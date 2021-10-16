const userModel = require('../../models/master.model').models.user

const service = {};

service.sayHello = function(){
    console.log("Hello World");
    return "Hello world";
}

service.getAllUsers = function(callback){
    userModel.find(callback)
}

service.getUserById = function(id, callback){
     userModel.findById(id, callback);
}

service.getUsersByData = function(data, callback){
     userModel.find(data, callback)
}

service.setNewUser = function(user, callback){
    var newUser = new userModel(user);
    newUser.save(callback);
}

service.deletAllUsers = function(callback){
    userModel.deleteMany(callback)
}

service.deleteUserById = function(id, callback){
    userModel.deleteOne({
        _id : id
    }, callback)
}

service.updateUserById = function(id, user ,callback){

    userModel.updateOne({
        _id : id
    }, user, callback)

}

service.updateUserByData = function(data,user,callback){
    userModel.updateOne(data, user, callback);
}

module.exports = service;