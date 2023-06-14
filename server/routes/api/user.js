/**
 * Author:Juniper Grunow
 * Date: 5/24/2023
 * 
 */
import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
//all this might need to be redone with mongoose, but should translate easy enough

const router = express.Router();
//Gets user based on email
router.get("/:email", async (req,res)=>{
    let collection = await db.collection("users");
    let query = {_email: new ObjectId(req.params.email)};
    let result = await collection.findOne(query);

    if(!result) res.send("Not Found").status(404);
    else res.send(result).status(200);
});

//Create new user
router.post("/user", async (req, res) => {
    let newDocument = {
        //needs to be filled more completely
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.Lastname,
        isVerified: false,
        role: null,
        lastLogin: new  Date(),
        //needs to be generated, and then check to see if home group string is already in use
        homegroup: req.body.homegroup,
    };
    let collection = await db.collection("users");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});