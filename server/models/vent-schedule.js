import mongoose from 'mongoose';
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

module.exports = mongoose.model(
    'ventSched', ventScedSchema, 'VentSched'
);

