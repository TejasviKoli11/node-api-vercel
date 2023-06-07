import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString,{
    userNewUrlParse:true,
    useUnifiedTopology:true,
});

var _db;

module.exports = {
    connectToServer: function(callback){
        client.connect(function(err, db){
            if(db){
                _db = db.db("employees");
                console.log("Successfully connected to MongoDB");

            }
            return callback(err);
        });
    },
    getDb: function() {
        return _db;
    },
};