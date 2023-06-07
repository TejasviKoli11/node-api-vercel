const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    isVerified: Boolean,
    lastLogin: Date,
    //not final
    homegroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'homeGroup'
    },
    

});

const User = model('User', userSchema)
export default User;