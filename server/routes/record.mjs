import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

//This section is for getting all users
router.get("/", async (req, res)=>{
    let collection = await db.collection("users");
    let results =await collection.find({}).toArray();
    res.send(results).status(200);
});
//Gets user information based on email
router.get("/:email",async (req, res)=> {
    let collection = await db.collection("users");
    let query ={_email: new ObjectId(req.params.email)};
    let result = await collection.findOne(query);
    if(!result) res.send("Not Found").status(404);
    else res.send(result).status(200);
});
//