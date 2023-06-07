const mongoose = required('mongoose');
const express = rquired('express');
const ventSchedModel = required('./models/vent-schedule.js');
const app = express();

app.get("/ventSched", async (req, res)=>{
    //needs the ventID passed to it
    const ventSced = await ventSchedModel.find({deviceID: req.params.deviceID}).exec();

    try {
        res.send(ventSced);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.post("/ventScehd", async (request, response) => {
    const ventSched = new ventSchedModel(request.body);

    try{
        await ventSched.save();
        response.send(ventSched);
    }catch{
        response.status(500).send(error);
    }
});
 app.patch("/ventSched/:id", async (req, res) => {
    try{
        await ventSchedModel.findByIdAndUpdate(request.params.id, request.body);
        await ventSchedModel.save();
        response.send(ventSched);
    }catch (error) {
        response.status(500).send(error);
    }
 });

app.delete("/ventSched/:id", async (req, res) => {
    try {
        const ventSched = await ventSchedModel.findByIdAndDelete(request.params.id);

        if (!ventSched){
            res.status(404).send("No vent Schedule Found!");
        }
        res.status(200).send();
    } catch (error){
        res.status(500).send(error);
    }
});



module.exports = app;
