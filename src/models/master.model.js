const mongoose      = require('mongoose');
const config        = require('../config/config');
const userModel     = require('./users/user.model');

var dbURI;
if(config.NODE_ENV === 'production'){
         dbURI = "mongodb://" + 
                config.DATABASE_USER + ":" + 
                config.DATABASE_PASS + "@" + 
                config.DATABASE_HOST + ":" + 
                config.DATABASE_PORT + "/" + 
                config.DATABASE_NAME;
}
else {
         dbURI = "mongodb://" +
                config.DATABASE_HOST + ":" + 
                config.DATABASE_PORT + "/" + 
                config.DATABASE_NAME;
}


mongoose.connect(dbURI ,{ useNewUrlParser: true })

// Throw an error if the connection fails
mongoose.connection.on('error', function(err) {
    if(err) 
    console.log(err);
});

module.exports = {
    mongoose : mongoose,
    models : {
        user : userModel
    }
};