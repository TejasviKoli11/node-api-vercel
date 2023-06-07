const mongoose = require("mongoose");
const {Schema, model } = mongoose;

const ventSchema = new Schema({
    ventId:String,
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
const vent = model('Vent', ventSchema);
export default vent;