const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BuildingSchema = new Schema ({
    name:String,
    buildingID:String,
    floors:Number,
});
const building =model("building", BuildingSchema);
module.exports = building;