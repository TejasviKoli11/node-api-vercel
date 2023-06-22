const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BuildingSchema = new Schema ({
    name:{type:String, required: true},
    floors:{type:Number, required: true},
    rooms:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'rooms'
}],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
});

//middleware


const building =model("building", BuildingSchema);
module.exports = building;