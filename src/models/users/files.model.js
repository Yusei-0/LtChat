const mongoose= require('mongoose');

const filesSchema = new mongoose.Schema({

    email    : String,
    password : String,
    picture  : String
});

const Files = mongoose.model("Files", filesSchema);

module.exports = filesSchema;
