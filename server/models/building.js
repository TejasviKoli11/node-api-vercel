const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BuildingSchema = new Schema ({
    name:{type:String, required: true},
    buildingID:{type:String, required: true},
    floors:{type:Number, required: true},
    rooms:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'rooms'
}],
});

//middleware


const building =model("building", BuildingSchema);
module.exports = building;