/**
 * Author Juniper Grunow
 * Date: 6/6/2023
 */
const mongoose = require('mongoose');
const express = require('express');
const ventDataModel = require("../../models/ventdata.js");
const app = express();

//Retrieves a vent data object
app.get("/ventData", async (req, res) =>{
    //this needs to validated, passing user's id
    const ventData = await ventDataModel.find({owner: req.params.users.id});

    try{
        res.send(ventData);
    }catch (error){
        res.status(500).send(error);
    }
});
//Creates a new vent data object
app.post("/ventData", async (req, res) =>{
    const ventData = new ventDataModel(req.body);

    try{
        await ventData.save();
        response.send(ventData);
    }catch{
        res.status(500).send(error);
    }
});

module.exports=app;