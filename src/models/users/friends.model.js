const mongoose= require('mongoose');


const frindsSchema = new mongoose.Schema({
  frinds_id : String
});

const Friends = mongoose.model("Friends", frindsSchema);

module.exports = frindsSchema;
