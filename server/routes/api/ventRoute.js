const mongoose = require("mongoose");
const express = require('express');
const ventModel = require('../../models/vents.js');

app.get("/vents/:id", async (req,res)=>{
    const vent = await ventModel.find({deviceID: req.params.deviceID}).exec();

    try {
        res.send(vent);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/vents/", async (req,res)=>{
    const vent = new ventModel(request.body);

    try {
        await vent.save();
        res.send(vent);
    } catch (error) {
        res.status(500).send(error);
    }
});