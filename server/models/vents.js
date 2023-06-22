const mongoose = require("mongoose");
const {Schema, model } = mongoose;

const ventSchema = new Schema({
    name:{type:String, required:true},
    deviceID: { type: String, required: true, unique: true },
    macAddress:String,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'room'
    }
});

//middleware
ventSchema.pre('save', function(){

});



const vent = model('Vent', ventSchema);
module.exports = vent;