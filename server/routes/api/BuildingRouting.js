// BUILDING ROUTING

const express = require('express');
const routing = express.Router();
const Building = require('../../models/building.js');


// Get all buildings
 

// Get a specific building by ID
routing.post('/buildings', async (req, res) => {
  try {
    console.log(req.body.id);
    const building = await Building.find({owner:req.body.id});
    if (!building) {
      return res.status(404).json({ error: 'Building not found.' });
    }
    res.json(building);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the building.' });
  }
});

 

// Create a new building
<<<<<<< HEAD
routing.post('/buildingsnew', async (req, res) => {
=======
<<<<<<< HEAD
routing.post('/buildingsNew', async (req, res) => {
=======
routing.post('/buildingsnew', async (req, res) => {
>>>>>>> da18f363380b778ad6235abf53d3c6a97c07c92b
>>>>>>> bcf069c950cab71f9c2771561ef9ab410d977fa4
  try {
    const userModel = require('../../models/user.js');
    
    const building = new Building(req.body);
    const userObj = await userModel.findById(building.owner);
    if(!userObj){
      throw Error("User does not exist");
    }

    await building.save();
    res.status(201).json(building);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the building.' });
  }
});

 

// Update a building by ID
routing.patch('/buildings/:id', async (req, res) => {
  try {
    const building = await Building.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!building) {
      return res.status(404).json({ error: 'Building not found.' });
    }
    res.json(building);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the building.' });
  }
});

 

// Delete a building by ID
routing.delete('/buildings/:id', async (req, res) => {
  try {
    const building = await Building.findByIdAndDelete(req.params.id);

    if (!building) {
      return res.status(404).json({ error: 'Building not found.' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the building.' });
  }
});

 

module.exports = routing;