import mongoose from 'mongoose';
import { Schema } from mongoose;

const ventData = new Schema({
    batchNo:{type:Number, required:true},
    completed:{type:Boolean, required:true},
    formatCode:{type:Number, requried:true},
    deleted:{type:Boolean, required:true},
    deviceID:{type:Schema.Type.ObjectID,
    ref:'user'},
    scheduledEn:{type:Boolean, required:true},
    samplesCnt:{type:Number, required:true}, 
});

module.exports = mongoose.model(
    'ventData', ventData, 'VentData'
);

