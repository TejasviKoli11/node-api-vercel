const mongoose = required('mongoose');
const express = required('express');
const ventDataModel = required('./models/vent-data.js');
const app = express();

app.get("/ventData", async (req, res) =>{
    //this needs to validated, passing user's id
    const ventData = await ventDataModel.find({owner: req.params.users.id});

    try{
        res.send(ventData);
    }catch (error){
        res.status(500).send(error);
    }
});

app.post("/ventData", async (req, res) =>{
    const ventData = new ventDataModel(req.body);

    try{
        await ventData.save();
        response.send(ventData);
    }catch{
        res.status(500).send(error);
    }
});