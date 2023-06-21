const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {String,require:true},
    firstName: {String,require:true},
    lastName: {String,require:true},
    isVerified: {Boolean,require:true, default:false},
    lastLogin:{Date,require:true},
    //not final
    homegroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'homeGroup',
        require:true,

    },
    role:{String, enum:[null,'technician','admin']},
    

    

});

//middleware

const User = model('User', userSchema)
module.exports= User;