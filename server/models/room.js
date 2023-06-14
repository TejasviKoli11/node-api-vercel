const mongoose = require("mongoose");
const { Schema, model} = mongoose;

const roomSchema = new Schema ({
    name:String,
    floor:Number,
    roomId:String,
    building:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"building",
    },

});

const room = model("room", roomSchema);
module.export = room;