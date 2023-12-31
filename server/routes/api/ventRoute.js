const mongoose = require("mongoose");
const express = require('express');
const ventModel = require('../../models/vents.js');
const app = express();

app.get("/vents/:id", async (req,res)=>{
    const vent = await ventModel.find({deviceID: req.params.deviceID}).exec();

    try {
        res.send(vent);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/vents", async (req,res)=>{
    const roomModel = require('../../models/room.js');
    const vent = new ventModel(req.body);
    const roomObj = await roomModel.findById(vent.room);
    if(!roomObj){
        throw Error('Room does not exist');
    }
    try {
        await roomObj.vents.push(vent._id);
        await vent.save();
        await roomObj.save();
        res.send(vent);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.patch("/vents/:id", async (req,res)=>{
    try{
        await ventModel.findByIdAndUpdate(req.params.id, req.body);
        await ventModel.save();
    }catch (error){
        response.status(500).send(error);
    }
});

app.delete("/vents/:id", async (req,res)=>{
    try{
        const vent = await ventModel.findByIdAndDelete(req.params.id);

        if(!vent){
            res.status(404).send("No vent Found");
        }
        res.status(200).send();
    }catch (error){
        response.status(500).send(error);
    }
});

module.exports = app;