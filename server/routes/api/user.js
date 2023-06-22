/**
 * Author:Juniper Grunow
 * Date: 5/24/2023
 * 
 */
const mongoose = require('mongoose');
const express = require('express');
const userModel = require('../../models/user.js');
const app = express();

//Gets user based on email
app.get("/user/:email", async (req,res)=>{
    const userObj = userModel.find({email: req.body.email}).exec();
    
    try {
        res.send(userObj);
    } catch (error) {
        res.status(500).send(error);
    }
});

//Create new user
app.post("/user", async (req, res) => {
   
});

//Update Userbased on user id
app.patch("/user/:id", async(req,res)=>{
    
});

//Deletes User based on user id
app.delete("/user/:id", async(req,res)=>{
    try{
        const user = await userModel.findByIdAndDelete(req.params.id).exec();
        res.send(user);
    }catch(error){
        res.status(500).send(error);
    }
});



module.exports = app;