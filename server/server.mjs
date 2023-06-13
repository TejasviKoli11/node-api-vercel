import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ventScedRoute from "./routes/api/ventsched.js";
import ventDataRoute from "./routes/api/ventdata.js";
import 'dotenv/config';


const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

//generic route for testing if server is live
app.get('/', (req,res)=>{
    res.json({mssg:'We are live PEOPLE!'})
})
//Routes
app.use(ventScedRoute);
app.use(ventDataRoute);

//connect to the db and starts server
mongoose.connect(process.env.ATLAS_URI)
    .then(()=>{
        app.listen(PORT, () =>{
            console.log('Connected to DB, listening on port', PORT)
        })
    })
    .catch((error)=>{
        console.log(error);
    });


