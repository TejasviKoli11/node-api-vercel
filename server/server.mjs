import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ventScedRoute from "./routes/api/ventsched.js";
import ventDataRoute from "./routes/api/ventdata.js";
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

const dbo = require("./db/conn");

mongoose.connect(db, {
    useNewUrlParse: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, function(error){
    onslotchange.log("Error!"+error);
});
//Routes
app.use(ventScedRoute);
app.use(ventDataRoute);

//start Express server
app.listen(PORT, ()=> {
    console.log('Server is running one port: ${PORT}');
});