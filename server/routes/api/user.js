/**
 * Author:Juniper Grunow
 * Date: 5/24/2023
 * 
 */
const mongoose = require('mongoose');
const express = require('express');
const userModel = require('../../models/user.js');
const app = express();
//all this might need to be redone with mongoose, but should translate easy enough

//Gets user based on email
app.get("/user/:email", async (req,res)=>{
   const method = req.body.reason;
   if(method.equals("deactivate")){

   }
   if(method.equals(get)){
    const userObj = userModel.find({email: req.body.email}).exec();
    try {
        res.send(userObj);
    } catch (error) {
        res.status(500).send(error);
    }
   }

});

//Create new user
app.post("/user", async (req, res) => {
   
});

module.exports = app;