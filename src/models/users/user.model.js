const mongoose      = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String,
    email    : String,
    password : String,
    picture  : String,
    friends : [{
        friends_id : String
    }] ,
    files : [{
        name : String,
        size : Float32Array,
        path : String
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
