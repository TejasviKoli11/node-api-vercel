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
   
});

//Create new user
app.post("/user", async (req, res) => {
   
});

module.exports = app;