const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const ventScedSchema = new Schema({
    deviceIDs: [String],
    data:{type: Object, required: true},
    dataType : String,
    scheduletLastUpdate:Date
},
{
    timestaps:true
});

const ventSced = mongoose.model("ventSched", ventScedSchema, "VentSched");
module.exports = ventSced;

