const mongoose = require("mongoose");
const { Schema, Model } = mongoose;

const ventData = new Schema({
    batchNo:{type:Number, required:true},
    completed:{type:Boolean, required:true},
    formatCode:{type:Number, requried:true},
    deleted:{type:Boolean, required:true},
    deviceID:{type:Schema.Types.ObjectID,
    ref:'user'},
    scheduledEn:{type:Boolean, required:true},
    samplesCnt:{type:Number, required:true}, 
});

module.exports = mongoose.model(
    'ventData', ventData, 'VentData'
);

